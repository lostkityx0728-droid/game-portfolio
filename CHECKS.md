# V5 verification — 2026-10-04

## What was actually exercised

The complete portable HTML preview was loaded into headless Chromium using locally supplied page content. The container blocks normal file/localhost navigation and cannot create a WebGL context. Tests therefore used the animated Canvas2D renderer, not an external deployment or a real GPU.

The following interactions passed without captured JavaScript page errors:

- Live procedural silk opening and scroll-driven expansion to local silent gameplay.
- Three-scene visual sequence, scroll-linked curved image wipe, and clickable timeline controls.
- Full-screen menu opening, curtain completion, Escape dismissal, and release of the modal.
- Direct skip to the project index, transition into Wonder Webby, and return to the home view.
- Project clip selection by click and arrow keys. The selected clip played with a positive playback time and readyState 4.
- Screenshot lightbox opening, next image with the keyboard, and Escape dismissal.
- Chinese/English switching.
- Explicit Motion off restores unpinned flow and exposes all scene descriptions.
- System reduced-motion turns decorative motion off and disables the overriding motion control.

## Layout

Both English and Chinese, and both home and project views, were checked at viewport widths 320, 390, 768, 1024, 1440 and 1920 pixels: 24 combinations. The final run reported no horizontal page overflow. The mobile uppercase project title and resize behaviour of the floating project image were corrected during testing.

Desktop opening, expanded game scene, image sequence and menu were captured. Mobile home and sequence were captured in Chinese. The mobile active chapter's description-to-link gap was approximately 29 px in the exercised 390 px viewport.

## Source

All four JavaScript files passed Node syntax checking. The Bash publisher passed `bash -n`. Local image, stylesheet and script references were checked against files in the package. The Windows publisher was reviewed but could not be executed in this Linux container; no Windows end-to-end result is claimed.

## Delivery and publication

A local Git repository is included. **No commit was pushed to GitHub and no public website was created during this conversation.** The active GitHub connector exposes read operations, not repository creation or push. The publisher scripts require the account holder to log in through the official GitHub CLI and confirm public publication on their computer.

The MP4 walkthrough is a recording of the actual browser interaction layer, using the Canvas2D renderer. It is not a prerendered website animation used by the site itself. The portable preview lets the user operate the same interactions.

## Limits

The WebGL shader branch has not been verified on an actual GPU. Safari, Firefox, physical-device touch interaction, screen-reader behaviour and the remote GitHub Pages build have not been tested. No performance score, full accessibility compliance, perfect reproduction of the reference site's animation or universal browser support is claimed.
