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
