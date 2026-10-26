# Handwritten typography and text motion / local study

Base: published `d2c31cf7e0c1601af38dffd65bfc6155e22fabe4`. Branch `design/handwritten-type`. Local only; no publication approval for this iteration.

Design read: the existing cinematic game portfolio, refined through restrained handwritten headings, game-like metadata and readable body copy. DESIGN_VARIANCE 7 / MOTION_INTENSITY 5 / VISUAL_DENSITY 3. Keep the P3R-inspired scroll structure, original imagery, six projects, URLs and personal contribution claims.

## Fonts and license

- English display: Kalam Regular 400 from the official Google Fonts repository, commit `6e4b84c976cadb3c49a40fd9a1c203e4f7fcf2da`. Kalam is a Latin/Devanagari family; this web subset is Latin only and does not cover Chinese.
- Chinese display: LXGW WenKai Lite Regular from its author's repository, commit `d5a8a1f67872f398ef364a525a77261b3d9ae281`. This is the Lite family, not Google Fonts' TC variant. Do not claim full CJK coverage. The 251 CJK characters/punctuation needed by this portfolio's headings were checked against the original and generated cmap.
- Both are SIL OFL 1.1. Complete licenses, original source URLs, hashes and modification notes are included in `fonts/handtype/`. The WenKai license's additional webfont permission was reviewed. The subsets use new primary family names `Folio Note Latin` and `Folio Note Han`, retain copyright/license metadata and are provided only as WOFF2 web assets. No system fonts were installed. Do not redistribute the private intermediate TTFs as an upstream font package.
- The two WOFF2 files total 85,488 bytes (Latin 27,256; Han 58,232). The site self-hosts them; it does not fetch fonts from third-party servers. Full source TTFs remain in the private audit workspace.
- Body copy and controls retain the system sans stack; compact labels use existing system monospace with the sans fallback. Unsupported/future glyphs fall back to system handwriting/CJK fonts. Preloads plus `font-display: optional` avoid a late webfont swap; on a slow first load the browser may retain its fallback. No zero-CLS claim is made without browser measurement.

## Typography and motion

Handwritten display headings have explicit line heights, fewer synthetic italics, restrained tracking and adjusted size limits. The name retains two deliberate lines; contribution titles and project names have clearer rhythm. Narrow case headers become one column to prevent long headings colliding with the lead. Body text remains readable and the existing header brand is retained.

The old per-word/per-character split is disabled for this iteration. Existing semantic headings and continuous translated phrases remain intact. A short two-part name entrance, small 16px heading entrances, one decorative ink line and a three-phrase scroll emphasis are progressive enhancements. Text never begins fully transparent; no animation changes its content or creates letter wrappers. Keyboard targets and project/game scroll handling are untouched.

The text-motion context reverts on reduced motion, forced colors, site motion off and page lifecycle changes. GSAP is already self-hosted; no new animation dependency is added. Duplicate legacy heading tweens were removed from the cinema layer so both modules do not animate the same heading.

## Actual validation and limitations

- 895 static/preservation checks passed: original text order, bilingual keys, anchor targets, local asset references, exact pointer implementation, existing style/data/game modules and 650 Moon runtime files. SVG/JS source line endings are normalized only where appropriate; game/binary content stays exact.
- All 54 required Latin/punctuation characters and 251 CJK characters are present in the subsets. 24 project-word measurements over four widths and 36 case-title line measurements over six widths passed with actual font metrics. These calculations are not a browser layout test.
- Actual font glyph specimen was rendered and visually inspected with Pillow. `audit/handtype/font-specimen.png` is explicitly a font specimen, not a website screenshot.
- JavaScript syntax checks passed. An automated CSS parser was unavailable in existing tools; browser CSS/layout execution is unverified.
- The local preview process started at http://127.0.0.1:4213/game-portfolio/ and is still running; a separate HTTP read timed out. A same-port start confirmed the port was occupied. No successful HTTP/visual browser verification is claimed.
- No browser or DevTools call was attempted. The earlier blocked full DevTools/media-emulation operation was not retried or bypassed. Current desktop/mobile rendering, live font loading, animation cadence, reduced-motion switching, keyboard/menu/lightbox/Moon integration and CLS/performance still require runtime review. Earlier P3R rapid-menu/filter/detail-return limits carry forward.

The original computer connection dropped twice during preparation. File state was reconciled before continuing; no replacement task or remote publication was created.
