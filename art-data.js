/* Art direction and short collection descriptions. Original case facts stay authoritative. */
(() => {
  if(!window.PORTFOLIO?.languages)return;
  const strings={
    en:{
      'art.filter':'Filter projects','art.discipline':'Game design & development','art.browse':'Browse the work','art.work':'Selected work','art.play':'Play Moon Vagrant',
      'art.webby.hero.alt':'A silk network connects the spider and spiderlings in the Wonder Webby prototype.',
      'art.webby.hero.caption':'A greenhouse at spider scale.',
      'art.about.title':'Play, space and the ideas between.',
      'art.wonderwebby.summary':'Explore a greenhouse, weave routes and return to feed spiderlings.','art.wonderwebby.meta':'Gameplay & camera / Unity',
      'art.moon-vagrant.summary':'A space-survival prototype built around flight, combat and story.','art.moon-vagrant.meta':'Solo prototype / GDevelop',
      'art.testament.summary':'Dialogue and exploration in a hand-drawn narrative prototype.','art.testament.meta':'Narrative & interaction / Unity',
      'art.jiangnan-water-town.summary':'A hybrid FPS route through a traditional water town.','art.jiangnan-water-town.meta':'Level design / Unreal Engine',
      'art.fukuoka-central-street.summary':'Rain-lit streets, interiors and scene staging.','art.fukuoka-central-street.meta':'Environment study / Unreal Engine',
      'art.dragon-of-kamurocho.summary':'Territory, money and risk on a physical board.','art.dragon-of-kamurocho.meta':'Fan-inspired tabletop prototype',
      'collection.technical':'Gameplay prototypes','collection.narrative':'Narrative & tabletop',
      'art.testament.hero':'An original interior scene sketch from the project portfolio.',
      'art.fukuoka.hero':'A clean scene detail from the original Fukuoka project portfolio.',
      'art.dragon.hero':'The physical prototype, with its map and assembled play components.'
    },
    zh:{
      'art.filter':'按类型筛选','art.discipline':'游戏设计与开发','art.browse':'浏览作品','art.work':'精选作品','art.play':'游玩 Moon Vagrant',
      'art.webby.hero.alt':'Wonder Webby 原型中，蜘蛛与幼蛛在蛛网里的真实游戏画面。',
      'art.webby.hero.caption':'从蜘蛛的尺度，探索一座温室。',
      'art.about.title':'玩法、空间，以及背后的想法。',
      'art.wonderwebby.summary':'探索温室，编织路线，带着猎物返回喂养幼蛛。','art.wonderwebby.meta':'玩法与相机 / Unity',
      'art.moon-vagrant.summary':'围绕飞行、战斗与叙事展开的太空生存原型。','art.moon-vagrant.meta':'个人原型 / GDevelop',
      'art.testament.summary':'通过对话与场景探索，推进手绘风格的叙事原型。','art.testament.meta':'叙事与交互 / Unity',
      'art.jiangnan-water-town.summary':'以江南水乡组织路线与攻防节奏的混合模式 FPS 关卡。','art.jiangnan-water-town.meta':'关卡设计 / Unreal Engine',
      'art.fukuoka-central-street.summary':'雨幕中的街道、室内空间与场景镜头。','art.fukuoka-central-street.meta':'环境场景练习 / Unreal Engine',
      'art.dragon-of-kamurocho.summary':'在实体棋盘上连接领地、资金与风险。','art.dragon-of-kamurocho.meta':'非官方同人桌游原型',
      'collection.technical':'玩法原型','collection.narrative':'叙事与桌游',
      'art.testament.hero':'原始作品文档中的室内场景手绘草图。',
      'art.fukuoka.hero':'从福冈街景原始作品图中截取的干净场景细节。',
      'art.dragon.hero':'实体原型的地图与组装后的游玩组件。'
    }
  };
  for(const [lang,items]of Object.entries(strings))Object.assign(window.PORTFOLIO.languages[lang],items);
})();
