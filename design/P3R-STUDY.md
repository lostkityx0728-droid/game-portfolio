# Scroll and visual motion study / 2026-10-26

Design read: a cinematic game portfolio using existing game imagery, with editorial type and a purposeful horizontal project chapter. DESIGN_VARIANCE 7 / MOTION_INTENSITY 6 / VISUAL_DENSITY 3. This is a new authorized direction; `65659fc64fe29a19e8a70aa8b684647b32ed78ca` remains recoverable on `design/reference-refinement`.

## Direct observation

Reference: https://p3re.jp/en/ . Inspected interactively in the user's existing Microsoft Edge tab on the connected desktop. The browser connector did not expose Chrome; Edge was available and already had the reference open. No account or security settings were changed.

- Home/early sections use continuous vertical scrolling, rather than one-wheel-per-section snapping. At the observed 2040×974 viewport, successive wheel movements reached y≈677, 2624, 4083 and 4766 while content moved vertically.
- The character chapter stays in view as wheel input moves the strip horizontally. At y≈5545 the first character occupied the central area; at y≈6518 the next character moved to the center. Reversing the wheel to y≈5742 moved the strip back. The scrollbar continued to represent vertical progress.
- Large serif chapter lettering and low-contrast outline lettering contrast with small sans labels. Broad surface colors separate the pale blue story section from the pink character chapter; imagery and typography occupy distinct foreground/background layers.
- Clicking the visible character opened a detail view through a curved white wave. The detail view used a large vertical name, isolated figure and readable profile/media area. Closing used a wave again and returned to the strip; reverse wheel remained usable. No trailer/music playback was needed.

Official-source cross-check supplied by the parent: the character strip uses GSAP ScrollTrigger pin/scrub with linear translation and a desktop gate. This supports the observed behavior; source inspection alone was not treated as live evidence. Mobile behavior is an adaptation, not a claim about a physically tested P3R mobile device.

## Adaptation and boundaries

- Original two-line name, large existing Wonder Webby screenshot, a restrained angled image edge and scroll-linked image depth form the hero. No Persona logos, characters, fonts, audio or image assets are included.
- The three existing gameplay ideas remain a compact, readable vertical interlude. Its old long pinned renderer is replaced by existing still imagery; all text is exposed.
- On sufficiently large precise-pointer screens, the six existing project anchors become a single pinned horizontal chapter. Native vertical scroll drives a measured content-width translation. Project colors change at discrete project boundaries. Buttons, focus-aware keyboard controls and category filtering use the same native project links.
- Small screens, coarse pointers, short viewports, reduced motion and site motion off use a normal vertical layout. There is no wheel/touch cancellation, full-site snap, smooth-scroll dependency, scroll proxy, UA-only mobile detection or hard-coded giant scroll height.
- Existing curved page/menu transitions are retained with a paper/ink treatment. Case contribution text and intrinsic gallery proportions remain; optional entrances move only 30px and never fully hide essential content.
- GSAP 3.15.0 core and ScrollTrigger are reused from the previously verified official GreenSock download, with SHA-256 checks against its provenance record. No unrelated previous redesign code is restored. The dependency and license are self-hosted; no paid service is required.

## Validation notes

Browser screenshots and checks for this iteration are in `audit/p3r-study` and `deliverables/p3r-study`. The exact local preview is http://127.0.0.1:4212/game-portfolio/ . This study is not approved for publication; do not push or deploy without fresh approval.
