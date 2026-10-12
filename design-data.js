/* Presentation strings only. Project facts and contribution records remain in their original data files. */
(() => {
  const additions = {
    en: {
      'design.kicker': 'Game portfolio',
      'design.intro': 'Game design through play, space and story.',
      'design.explore': 'Explore selected work',
      'design.work': 'Selected work.',
      'design.hero.alt': 'Wonder Webby gameplay in a greenhouse, with silk routes between plants.',
      'design.menu': 'Menu', 'design.close': 'Close', 'design.home': 'Home',
      'design.theme.light': 'Light', 'design.theme.dark': 'Dark',
      'design.theme.label': 'Switch colour theme',
      'work.label': 'Selected work', 'about.label': 'Behind the work', 'contact.label': 'Contact',
      'menu.label': 'Navigation', 'motion.on': 'Motion on', 'motion.off': 'Motion off', 'motion.reduced': 'Motion off',
      'v5.workTitle': 'Selected work.'
    },
    zh: {
      'design.kicker': '游戏设计作品集',
      'design.intro': '以玩法、空间与叙事探索游戏设计。',
      'design.explore': '浏览精选作品',
      'design.work': '精选作品。',
      'design.hero.alt': 'Wonder Webby 温室中的游戏画面，蛛丝在植物之间形成路线。',
      'design.menu': '菜单', 'design.close': '关闭', 'design.home': '首页',
      'design.theme.light': '浅色', 'design.theme.dark': '深色',
      'design.theme.label': '切换色彩主题',
      'work.label': '精选作品', 'about.label': '作品背后', 'contact.label': '联系',
      'menu.label': '导航', 'motion.on': '动效开启', 'motion.off': '动效关闭', 'motion.reduced': '动效关闭',
      'v5.workTitle': '精选作品。'
    }
  };
  for (const [language, strings] of Object.entries(additions)) {
    Object.assign(window.PORTFOLIO.languages[language], strings);
    // Remove enumerated presentation labels; keep all factual body text verbatim.
    for (const [key, value] of Object.entries(window.PORTFOLIO.languages[language])) {
      if (/\.label$|\.index$/.test(key)) window.PORTFOLIO.languages[language][key] = value.replace(/^\(?\s*\d+\s*(?:\/|-|—)\s*/, '').replace(/^\(\s*|\s*\)$/g, '');
    }
  }
})();
