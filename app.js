/* Small, dependency-free interactions. The site also works directly from disk. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data?.languages) return;
  document.documentElement.classList.add('js');
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const local = {
    get() { try { return localStorage.getItem('portfolio-language'); } catch { return null; } },
    set(value) { try { localStorage.setItem('portfolio-language', value); } catch { /* Storage can be blocked on file://. */ } }
  };
  let lang = new URLSearchParams(location.search).get('lang') || local.get() || data.defaultLanguage || 'en';
  if (!data.languages[lang]) lang = 'en';
  let selectedClip = 0;
  let currentImage = -1;
  const t = key => (data.languages[lang][key] ?? data.languages.en[key] ?? key).replaceAll('{name}', data.profile.name);
  const players = $$('[data-player]');
  const pauseAll = () => $$('video').forEach(v => v.pause());

  function updateTitle() {
    const project = document.documentElement.dataset.page === 'project';
    document.title = project ? `Wonder Webby — ${data.profile.name}` : `${data.profile.name} — ${lang === 'zh' ? '游戏项目作品集' : 'Game Projects'}`;
    $$('[data-nav="games"]').forEach(a => a.toggleAttribute('aria-current', project));
    $$('[data-nav="games"][aria-current]').forEach(a => a.setAttribute('aria-current', 'location'));
  }
  function applyLanguage() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-language-current]').forEach(el => { el.textContent = lang === 'en' ? 'EN' : '中'; });
    $$('[data-language-other]').forEach(el => { el.textContent = lang === 'en' ? '中' : 'EN'; });
    $$('.language-button').forEach(el => el.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English'));
    if ($('#clip-note') && data.clips[selectedClip]) $('#clip-note').textContent = t(data.clips[selectedClip].noteKey);
    $$('[data-lightbox]').forEach(el => { const img = $('img', el); if (img) img.alt = t(el.dataset.caption); });
    if ($('#lightbox')?.open) renderLightbox();
    updateTitle();
    document.dispatchEvent(new Event("portfolio:language"));
  }
  $$('[data-profile-name]').forEach(el => { el.textContent = data.profile.name; });
  $$('.brand').forEach(el => el.setAttribute('aria-label', `${data.profile.name} — home`));
  // The display name is not a baked-in graphic and remains editable.
  const nameParts = data.profile.name.trim().split(/\s+/);
  $$('[data-name-first]').forEach(el => { el.textContent = (nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : nameParts[0]).toUpperCase(); });
  $$('[data-name-last]').forEach(el => { el.textContent = (nameParts.length > 1 ? nameParts.at(-1) : '').toUpperCase(); });
  $('#hero-title')?.setAttribute('aria-label', data.profile.name);
  const email = typeof data.profile.email === 'string' ? data.profile.email.trim() : '';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $$('.email-link').forEach(el => { el.href = 'mailto:' + email; el.hidden = false; });
    $$('.contact-pending').forEach(el => { el.hidden = true; });
  }
  const resume = data.profile.resumeUrl;
  // Accept local relative paths or HTTPS, never javascript:, data:, or protocol-relative URLs.
  if (typeof resume === 'string' && (/^https:\/\//i.test(resume) || /^(?:\.\.?\/)?assets\/[\w./% -]+$/.test(resume))) {
    $$('.resume-link').forEach(el => { el.href = resume; el.hidden = false; });
  }
  $$('.language-button').forEach(button => button.addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en'; local.set(lang); applyLanguage();
  }));

  // An explicit scroll avoids sticky-header anchor ambiguity.
  $$('.back-top').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: document.documentElement.dataset.motion === 'on' ? 'smooth' : 'instant'});
  }));

  // Full-screen menu is managed by the motion layer, not a mobile-only dropdown.
  function closeMenu() { window.closePortfolioMenu?.(); }

  // Each player starts only when clicked. Native controls remain available during playback.
  players.forEach(stage => {
    const video = $('video', stage), overlay = $('.play-overlay', stage), error = $('.video-error', stage);
    if (!video || !overlay) return;
    video.controls = false;
    overlay.addEventListener('click', async () => {
      pauseAll(); stage.classList.add('started'); video.controls = true; error.hidden = true;
      try { await video.play(); video.focus(); }
      catch { error.hidden = false; /* The user can still retry through native controls. */ }
    });
    video.addEventListener('play', () => {
      $$('video').filter(v => v !== video).forEach(v => v.pause());
      stage.classList.add('started'); video.controls = true; error.hidden = true;
    });
    video.addEventListener('ended', () => {
      stage.classList.remove('started'); video.controls = false; video.currentTime = 0;
    });
    video.addEventListener('error', () => { stage.classList.add('started'); video.controls = true; error.hidden = false; });
  });
  const projectStage = $('[data-player="project"]');
  const projectVideo = $('#project-video');
  const tabs = $$('.clip-tab');
  function selectClip(index, focus = false) {
    const clip = data.clips[index];
    if (!clip || !projectVideo) return;
    selectedClip = index; projectVideo.pause();
    projectVideo.src = clip.src; projectVideo.poster = clip.poster;
    projectVideo.controls = false; projectStage.classList.remove('started');
    $('.video-error', projectStage).hidden = true;
    $('.video-length', projectStage).textContent = '0' + clip.duration;
    projectStage.setAttribute('aria-labelledby', `clip-tab-${index}`);
    projectVideo.load();
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1;
    });
    $('#clip-note').dataset.i18n = clip.noteKey; $('#clip-note').textContent = t(clip.noteKey);
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectClip(index));
    tab.addEventListener('keydown', event => {
      let next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== null) { event.preventDefault(); selectClip(next, true); }
    });
  });
  // Pause media when the tab is hidden. Playback is never resumed automatically.
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseAll(); });

  // Native modal with keyboard dismissal and previous/next stills.
  const dialog = $('#lightbox');
  const images = $$('[data-lightbox]');
  let returnFocus = null;
  function renderLightbox() {
    if (currentImage < 0 || !images[currentImage]) return;
    const source = images[currentImage];
    $('.lightbox-image', dialog).src = source.dataset.lightbox;
    $('.lightbox-image', dialog).alt = t(source.dataset.caption);
    $('.lightbox-caption', dialog).textContent = `${currentImage + 1} / ${images.length} — ${t(source.dataset.caption)}`;
  }
  if (dialog && typeof dialog.showModal === 'function') {
    images.forEach((link, index) => link.addEventListener('click', event => {
      event.preventDefault(); currentImage = index; returnFocus = link;
      pauseAll(); renderLightbox(); dialog.showModal(); document.body.classList.add('no-scroll');
    }));
    $('.lightbox-close', dialog).addEventListener('click', () => dialog.close());
    function changeImage(delta) { currentImage = (currentImage + delta + images.length) % images.length; renderLightbox(); }
    $('.lightbox-prev', dialog).addEventListener('click', () => changeImage(-1));
    $('.lightbox-next', dialog).addEventListener('click', () => changeImage(1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1); }
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => { document.body.classList.remove('no-scroll'); returnFocus?.focus(); });
  }
  // Current section indicator, progressively enhanced.
  const sectionLinks = $$('.project-nav a');
  if ('IntersectionObserver' in window && sectionLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
          const current = link.getAttribute('href') === '#' + entry.target.id;
          if (current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-14% 0px -62% 0px', threshold: 0 });
    sectionLinks.forEach(link => { const section = $(link.getAttribute('href')); if (section) observer.observe(section); });
  }

  // The portable, single-file preview shares these same pages via hash routes.
  if (document.documentElement.dataset.preview === 'true') {
    const home = $('[data-view="home"]'), project = $('[data-view="project"]');
    const rewrite = href => {
      if (href === 'wonderwebby.html') return '#project';
      if (href.startsWith('index.html#')) return '#home-' + href.split('#')[1];
      if (href === 'index.html') return '#home';
      if (['#games', '#about', '#fragments'].includes(href)) return '#home-' + href.slice(1);
      return href;
    };
    $$('a[href]').forEach(a => { a.setAttribute('href', rewrite(a.getAttribute('href'))); });
    function renderRoute() {
      const hash = location.hash;
      let isProject = document.documentElement.dataset.page === 'project';
      if (hash.startsWith('#project')) isProject = true;
      else if (hash.startsWith('#home') || !hash) isProject = false;
      const changed = (document.documentElement.dataset.page === 'project') !== isProject;
      home.hidden = isProject; project.hidden = !isProject;
      home.id = isProject ? 'home-main' : 'main'; project.id = isProject ? 'main' : 'project-main';
      document.documentElement.dataset.page = isProject ? 'project' : 'home';
      if (changed) pauseAll();
      closeMenu(); updateTitle();
      {
        let selector = null;
        if (hash.startsWith('#home-')) selector = '#' + hash.slice(6);
        else if (hash.startsWith('#project-')) selector = hash;
        else if (['#contact','#top','#main'].includes(hash)) selector = hash;
        const target = selector ? $(selector) : null;
        if (target) target.scrollIntoView({behavior:'instant', block:'start'});
        else window.scrollTo({top:0,behavior:'instant'});
      }
      document.dispatchEvent(new Event('portfolio:route'));
    }
    let transition = null;
    function route() {
      const currentlyProject = document.documentElement.dataset.page === 'project';
      const hash = location.hash;
      const nextProject = hash.startsWith('#project') ? true : (hash.startsWith('#home') || !hash ? false : currentlyProject);
      const animate = false; // V5 uses the coordinated iris curtain.
      if (transition) { transition.skipTransition(); transition = null; }
      if (animate) {
        transition = document.startViewTransition(renderRoute);
        transition.finished.catch(() => {}).finally(() => { transition = null; });
      } else renderRoute();
    }
    window.addEventListener('hashchange', route); route();
  }
  applyLanguage();
})();
