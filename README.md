# Rong Guo - Game Portfolio

English and Chinese portfolio hosted by the existing GitHub Pages site:
https://lostkityx0728-droid.github.io/game-portfolio/

## Projects

- Wonder Webby: team Unity prototype, with scoped gameplay and interaction contributions.
- Moon Vagrant: individual GDevelop prototype and playtesting work.
- Testament: Unity narrative and interaction prototype.
- Fukuoka Central Street: Unreal street and interior environment study.
- Yakuza — Dragon of Kamurocho: non-commercial, fan-inspired physical tabletop study.
- Jiangnan Water Town: an Overwatch-inspired academic Hybrid FPS level prototype in Unreal Engine 5.6.

The collection supports digital games, levels and environments, gameplay and technical prototypes, and narrative and tabletop filters. Categories overlap. Testament and Dragon of Kamurocho populate the narrative and tabletop category. FanWorks is retired from the collection; its old URL offers a clear link to current work.

## Preview and structure

Open index.html or serve this directory with a static server. Each page includes static English content; JavaScript supplies language switching, category filtering, media controls and transitions.

- site-data.js: original site copy and Wonder Webby clips.
- projects-data.js: confirmed project data, categories and bilingual copy.
- app.js: language, filtering, media controls and page accessibility.
- experience.js: motion, menus and case transitions.
- collection.css: collection and case responsive styles.
- assets/: selected screenshots, scene-order diagrams and existing public clips.

## Publishing

Use a fresh checkout of https://github.com/lostkityx0728-droid/game-portfolio.git and review changes against current main. Keep the checkout's .git directory. Only copy website files and selected assets.

PUBLISH.cmd or publish.sh checks the intended account, main branch and matching origin, stages an explicit website whitelist and performs a normal push. Existing Pages settings must remain main at the repository root. No additional repository or server is required.

Contact and resume fields remain blank. See SOURCES.md and ASSET-NOTICE.md for attribution, and CHECKS.md for local validation scope.

## Moon Vagrant browser preview

The Moon Vagrant detail page loads the actual existing GDevelop HTML5 runtime on demand (about 25 MB). Serve the site over HTTP(S); file:// cannot run the preview. The preview requires a desktop mouse and keyboard. Sound starts muted and can be enabled with a user gesture. Native fullscreen, pause on focus loss, Escape, toolbar Exit and the game menu Exit are supported. Closing the preview unloads its iframe and audio.

Only reviewed browser runtime files listed in game-files.txt are staged by the publishers. Editable engine projects, desktop wrappers and commercial background music are excluded. Compiled JavaScript and runtime data are publicly downloadable, as required to run a browser game. Attribution and full engine/font licences are in games/moon-vagrant/CREDITS.md and its licenses folder.
