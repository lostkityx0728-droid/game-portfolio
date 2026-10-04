# Local validation

The game-engine projects were not modified or launched for the website task.

## Browser checks

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
