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

182 assertions passed. Desktop and mobile screenshots were captured and visually reviewed in both languages. Narrow-screen corrections include the long Ancient Courtyard title and a readable stacked contribution layout.

## Content and assets

The 11 original text files were verified against GitHub blob hashes before edits, from main commit 8104a5addaa57344210de793f5d70ecdc6ac10f6. All 12 existing public media files match the GitHub hashes.

New Moon Vagrant and FanWorks images are converted copies of selected project screenshots. No gameplay or audio was generated. Ancient Courtyard uses a labelled scene-order diagram with a vertical mobile variant; it is not a game screenshot.

Private documents, participant data, credentials and original game-source folders are excluded from the website. Publishing scripts received syntax checks.

## Limits

These checks cover the portfolio in this local Chrome environment. They do not verify game balance, uninterrupted game completion or other browsers. Deployment and online smoke checks are separate from this local test record.
