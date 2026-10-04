/* Loads the reviewed static game only after a visitor chooses to play. */
(() => {
  'use strict';
  const session = document.querySelector('[data-game-session]');
  if (!session) return;
  const stage = session.querySelector('[data-game-stage]');
  const poster = stage.firstElementChild;
  const load = session.querySelector('[data-game-load]');
  const soundButton = session.querySelector('[data-game-sound]');
  const fullscreen = session.querySelector('[data-game-fullscreen]');
  const exit = session.querySelector('[data-game-exit]');
  const status = session.querySelector('[data-game-status]');
  let frame = null, timer = null, state = 'idle', sound = false;
  const t = key => window.PORTFOLIO.languages[document.documentElement.lang.startsWith('zh') ? 'zh' : 'en']['play.' + key];
  function render() {
    status.textContent = t(state);
    load.textContent = t(state === 'error' ? 'retry' : 'load');
    soundButton.textContent = t(sound ? 'soundOn' : 'soundOff');
    soundButton.setAttribute('aria-pressed', String(sound));
    session.dataset.state = state;
  }
  function setState(value) { state = value; render(); }
  const send = (type, detail = {}) => frame?.contentWindow?.postMessage({channel: 'portfolio-game', type, ...detail}, location.origin);
  function removeGame() {
    clearTimeout(timer);
    send('stop');
    frame?.remove(); frame = null; sound = false;
    stage.replaceChildren(poster);
    load.hidden = false;
    for (const button of [soundButton, fullscreen, exit]) button.hidden = true;
  }
  async function close() {
    removeGame();
    if (document.fullscreenElement === session) await document.exitFullscreen().catch(() => {});
    setState('closed'); load.focus({preventScroll: true});
  }
  function fail() { removeGame(); setState('error'); }
  load.addEventListener('click', () => {
    if (location.protocol === 'file:') { setState('local'); return; }
    removeGame(); setState('loading'); load.hidden = true; exit.hidden = false;
    frame = document.createElement('iframe');
    frame.title = 'Moon Vagrant playable preview';
    frame.allow = 'autoplay; fullscreen';
    frame.src = 'games/moon-vagrant/index.html';
    frame.addEventListener('error', fail, {once: true});
    stage.replaceChildren(frame);
    timer = setTimeout(fail, 90000);
  });
  window.addEventListener('message', e => {
    if (!frame || e.source !== frame.contentWindow || e.origin !== location.origin || e.data?.channel !== 'portfolio-game') return;
    switch (e.data.type) {
      case 'ready': clearTimeout(timer); soundButton.hidden = false; fullscreen.hidden = false; setState('ready'); break;
      case 'playing': setState('playing'); break;
      case 'paused': if (state !== 'loading') setState('paused'); break;
      case 'exit-request': close(); break;
      case 'error': fail(); break;
    }
  });
  soundButton.addEventListener('click', () => { sound = !sound; send('sound', {enabled: sound}); render(); });
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === session) await document.exitFullscreen();
      else await session.requestFullscreen();
    } catch { setState('fullscreenError'); }
  });
  exit.addEventListener('click', close);
  session.addEventListener('keydown', e => { if (e.key === 'Escape' && frame) { e.preventDefault(); close(); } });
  document.addEventListener('portfolio:language', render);
  window.addEventListener('pagehide', removeGame);
  render();
})();
