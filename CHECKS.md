# Validation records

The game-engine projects were not modified or launched for the website task.

## Previous revision browser checks

An independent headless Chrome instance ran on the user's Windows computer with a temporary profile. Existing browser windows and accounts were not controlled.

- Five pages at 1440, 390 and 320 pixel widths, in English and Chinese: 30 combinations.
- No horizontal document overflow, missing loaded images, untranslated key names, page exceptions or HTTP errors.
- Category counts and pressed states, empty narrative/tabletop category and reset.
- Keyboard category navigation, live language switching and native case links.
- Language and category retained on returning to the collection.
- Menu open/Escape; image viewer next/Escape and focus restoration.
- Wonder Webby keyboard clip switching and actual MP4 playback.
- Reduced-motion layouts, normal-motion case transitions and motion toggle.
- Static English collection links and case content with JavaScript disabled.

191 assertions passed, including the Jiangnan replacement, its four-image gallery and the legacy URL preserving language, category and anchor. Desktop and mobile screenshots were captured and visually reviewed in both languages. The Jiangnan title and stacked contribution layout were reviewed at desktop and narrow widths.

## Content and assets

The 11 original text files were verified against GitHub blob hashes before edits, from main commit 8104a5addaa57344210de793f5d70ecdc6ac10f6. All 12 existing public media files match the GitHub hashes.

New Moon Vagrant and FanWorks images are converted copies of selected project screenshots. No gameplay or audio was generated. Jiangnan Water Town uses four actual map screenshots and its original top-down layout. Its Hybrid objective flow is documented design intent rather than a verified complete multiplayer implementation.

Private documents, participant data, credentials and original game-source folders are excluded from the website. Publishing scripts received syntax checks.

## Limits

These checks cover the portfolio in this local Chrome environment. They do not verify game balance, uninterrupted game completion or other browsers. Deployment and online smoke checks are separate from this local test record.

## Moon Vagrant playable preview

Local validation in the user's installed Chrome through a static HTTP server with the /game-portfolio/ URL prefix passed 24 checks. The test clicked the actual title Start button, revealed and advanced the comic with real inputs, selected Pick Up, entered Boss combat, moved the real ship and created a real bullet with left mouse input. No runtime errors, HTTP errors or external game requests occurred.

Checked muted initial state, sound after user gestures, native fullscreen entry and exit, focus-loss pause, click-to-resume, Escape unloading and focus return, toolbar Exit, original menu Exit, asset-load failure and successful retry. English and Chinese copy and 390/320 px layouts were checked. Touch controls remain unsupported. Complete victory/endings and all combat balance were not certified by this check.

The reviewed browser package contains 650 files, approximately 25 MB, with a largest file below 2 MB. Commercial music, editable project JSON, desktop executables and private author/project identifiers are excluded. Larger raster textures retain their original dimensions when converted to WebP.

## Six-project collection revision

The owner-supplied PortfolioG directory contains three project PDFs. These were read locally and kept intact; only 13 selected crops, approximately 0.8 MB combined, are included in the site. No full PDF, private document link, student identifier or source-engine project was added. Testament uses a neutral exploration screenshot. New pages describe prototype scope, unimplemented inventory, unverified chapter completion, documented third-party references and the non-commercial tabletop study context.

Local Chrome validation passed 558 assertions over 42 combinations: home plus all six cases, at 1440, 390 and 320 px in English and Chinese. Checked loaded images, native links, category counts (6/3/2/1/2), filters, keyboard navigation, case links, language and category persistence, new galleries and captions, menu/Escape, reduced motion, normal motion transitions, static English with JavaScript disabled and the explicit FanWorks legacy-link guide. Representative screenshots were visually reviewed.

Moon Vagrant regression passed 25 checks with real inputs through title, comic and combat. Movement, shooting, right-mouse dash with fuel consumption, sound, fullscreen, focus-loss pause, resume, Escape, toolbar/menu Exit and failed-load retry all worked. Its page, controls and all 650 runtime assets were byte-preserved, alongside Wonder Webby and Jiangnan Water Town’s pages and corrected screenshots.

## Wonder Webby content update — 21 October 2026

Prepared locally on the restored portfolio style; not pushed or published.

- 176 focused checks passed across English/Chinese and 1440/390/320 px: full image proportions, translated captions and alt text, lightbox source and keyboard focus, official external itch.io link, current/earlier version labels, archived clip keyboard switching and real video playback, static English fallback, existing menu and motion toggle.
- 558 existing six-case checks passed across 42 page/width/language combinations, including categories, navigation, translations and the other cases’ galleries.
- The unchanged Moon Vagrant browser preview was loaded to its real title scene and exited; the 650 runtime files remain byte-identical. A new full combat playthrough was not needed for this content-only change.
- The other five case HTML files and their used translation values remain unchanged. Global styles, interaction scripts, the home introduction and existing clip files are unchanged. Only the shared Wonder Webby thumbnail changes within the existing common UI.
- Five official public-playtest originals were inspected, converted to WebP without cropping or resampling, and presented at their native aspect ratios. Actual desktop/mobile page and section screenshots were inspected in both languages.
- Private project documents and Git records were read only to verify scoped contributions; they are not included in the public site. No current Unity/build capture was attempted because no running editor or ready local build was found.
- JavaScript syntax, PowerShell parser, Bash syntax and Git whitespace checks passed.

## Wonder Webby personal-case focus — 21 October 2026

- Removed the team roster, team-size fact, teammate-responsibility block and expanded team credits from the visible case study. Reduced the general game explanation to one brief team-project background sentence.
- Preserved the complete personal contribution copy, screenshots and their native proportions, earlier prototype archive, existing style and other cases.
- Added the official game-detail page and desktop browser playtest at the main media and related-links section, with matching English/Chinese labels.
- 139 focused local browser checks and 558 existing six-case checks passed. These include team-detail absence, links, translated copy, galleries, mobile layout, Moon title loading and exit.

## Local cursor and edge refinement — 21 October 2026

Prepared on a separate local branch from da810a5; not pushed or published. Layout, text, images and project data are retained.

- 57 pointer checks passed in installed Chrome: exact-position dual-tone dot, bounded short afterimage, no idle pointer redraw, clickable/pressed states, high-contrast focus, editing/iframe/game fallbacks, window leave/blur, real tab focus changes with Playwright focus emulation disabled, visibility events, reduced motion/site motion off, forced colours, light/dark OS settings, white/dark/photo surfaces, touchscreen emulation, navigation and browser Back.
- 558 existing six-case assertions passed across 42 page/width/language combinations.
- 25 real Moon Vagrant assertions passed with normal page motion: title/comic/combat, mouse movement, shooting, dash/fuel, audio, fullscreen, blur pause/resume, all exit paths, mobile limitations and failed-asset retry. Its 650 runtime files are unchanged.
- Cursor motion produced no layout shift in the targeted check. The pointer ticker stops after its short tail settles; static case pages no longer inherit the old always-running cursor/page loop. The existing home canvas continues only while its scene is visible and page motion is enabled.
- Actual rendered desktop/mobile images were inspected. A real-mouse GIF and white/dark/photo comparisons are in the private review deliverables, outside publication files.
- Lighthouse 13.5.0 local desktop, one matched run per version: baseline performance 95, refined 95; baseline/refined CLS 0/0. These are local lab observations, not field Core Web Vitals or physical-device certification. Existing content/accessibility findings are outside this visual-interaction patch.
- No new production dependency. Lighthouse is installed only in the private QA directory. No physical touch device, Safari, Firefox or Windows-wide cursor replacement is claimed.

## Home image cursor fallback fix — 21 October 2026

The homepage photograph is rendered by the aria-hidden `#trace-canvas` directly inside `.trace-images`. It was incorrectly caught by the general native-canvas fallback in both JavaScript and CSS. Only that exact decorative renderer is now exempt; interactive/unknown canvases, native controls, dialogs, iframes and the Moon session retain their native fallback.

- 21 image-specific checks passed: actual home canvas hits in both languages, project-card previews, detail images and lightbox, unknown canvas, a similarly named canvas outside the image container, WebGL-disabled rendering, and Moon title/exit.
- 57 existing pointer checks passed, including reduced motion, touch, keyboard, window/tab lifecycle, editing, iframe clicks and game-native cursor behaviour.
- The screenshot image itself, project data, all HTML, layout and art styling are unchanged. Only the native-cursor eligibility selectors were narrowed.


## Local reference refinement / 2026-10-26

Base: a339915cec770e97f0ec2a69c8f7be1c32791638. Local-only branch `design/reference-refinement`; no push or deployment.

- Reviewed VoltAgent/awesome-design-md at 3b605329240ce735b510037cca322f1831fdd7f8. It is a DESIGN.md collection, not a skill installer. Added two inert, MIT-licensed reference documents with source notes. No CLI, scripts, fonts or runtime dependencies installed.
- Preserved existing identity and layout. Improved metadata/body/caption scale, index rhythm and 44px touch targets. Anchored smaller image previews via CSS, keeping project names/types clear. Limited hover movement to 8px and disabled transitions with reduced motion/site motion off. Small screens retain native project links without floating previews.
- Existing collection regression: 558 assertions over 42 page/width/language combinations. Pointer/menu/lightbox/accessibility behavior: 57. Homepage decorative-canvas pointer regression: 21. Real Moon game: 25 (move/shoot/dash/fullscreen/pause/exit/retry). Added refinement checks: 72 over 320/390/768/1024/1440/1920px, both languages, touch/keyboard and reduced motion.
- Actual Chrome screenshots: desktop 1440px, phone 390px English/Chinese, homepage and Wonder Webby; before and after, plus normal-motion hover/keyboard. Phone checks use Chrome device emulation, not physical iOS/Android.
- Desktop Lighthouse on Wonder Webby: baseline and refined both performance 95 / accessibility 96; CLS 0 / TBT 0; LCP about 1.51s each. These are local laboratory observations, not production field metrics. Existing audit findings remain; no claim of full WCAG conformance.
- Keep original HTML, bilingual copy/data, image/video assets, official project/itch links, Moon runtime and custom pointer implementation. Verify exact Git content preservation before approval.
- QA scripts, raw reports and full screenshots are in the parent workspace under `audit/reference-refinement`; review comparison sheets and report under `deliverables/reference-refinement`. Local preview: http://127.0.0.1:4211/game-portfolio/ .
