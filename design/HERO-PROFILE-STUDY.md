# Hero and personal profile refinement

Local iteration based on published `477be58a39d27c54149e05e7ad7ffa01e864ac6a`.

Design read: Rong Guo's game-design portfolio for people reviewing the work, retaining its dark green, paper, handwritten and P3R-inspired scroll language. Variance 7, motion 6, density 3. Native CSS and the existing self-hosted GSAP are sufficient. No framework or new executable dependency.

## Scope

- Remove only the vertical Chinese/English Portfolio marker beside the hero name.
- Cycle the six existing project images through a four-corner aperture. Two decoded image layers crossfade while the aperture and thin outline morph together. Existing project images and case copy are preserved. Moon's title still is contained with breathing room, preserving its composition and avoiding clipped menu text.
- Previous/next controls support keyboard and touch. Manual navigation pauses autoplay. Hover/focus, offscreen, hidden documents and open dialogs pause autoplay. Reduced motion, forced colors and the site's motion-off control use instant manual changes. No wheel interception or permanent animation-frame loop. Bounded loading and transition completion prevent controls from being stranded by failed images or occluded-window frame throttling.
- Replace the old Wonder Webby three-moment interlude with bilingual personal introduction, current QUT studies, earlier IT diploma studies, project practice and public contact links. The About navigation now reaches this section. The former statement remains under `#approach`; `#fragments` is retained as a compatibility anchor.
- Extend the existing Kalam and LXGW WenKai Lite visual language to body and small UI text. Preserve the existing display subsets. Add a neutral-renamed WenKai web-only body subset covering 770 required characters, 170,668 bytes. Copyright and SIL OFL 1.1 remain in `fonts/handtype/`; exact provenance and coverage are in `BODY-SOURCE.json`. Kalam does not supply Chinese. Optional font display and reserved image geometry avoid late font swaps and image-driven layout shifts; measured zero CLS is not claimed.

## Public identity and contact provenance

Primary portfolio name remains **Rong Guo**. The user explicitly supplied the GitHub profile and requested its personal links. The public profile confirms game design, indie game development, Brisbane and current QUT Games and Interactive Environments studies. LinkedIn and YouTube destinations were resolved from that profile:

- https://github.com/lostkityx0728-droid
- https://www.linkedin.com/in/rong-guo-44b2563b5
- https://www.youtube.com/@lostkityx2753
- https://rong-guo.itch.io/ (previously user-confirmed)
- `lostkityx0728@gmail.com` (user-supplied public profile screenshot, confirmed by parent conversation)

Earlier IT diploma studies are user-confirmed context. No award, dates, employer, professional chronology or resume PDF is claimed. LinkedIn blocks automated fetching and YouTube fetching was throttled; their exact destination URLs are verified through GitHub, not independent destination-content claims.

## Review and limits

Actual Edge viewing was used for desktop and 320/390px responsive layouts, Chinese/English copy, contact wrapping and focus, menu, filters, lightbox, Moon loading/entry/exit and native iframe cursor. Six sequential carousel changes were checked to wrap back to Wonder Webby, with exactly one visible image and the expected shape for every project. The original pointer implementation and all Moon runtime source files remain unchanged.

The original four attached screenshot files could not be materialized on Windows: the official Library helper failed at `os.setxattr` before final placement. Native Library reads returned image references rather than pixels. After explicit follow-up direction, implementation used the parent's inspected screenshot targets and actual live website viewing. Do not describe the original attachments as locally viewed.

No full DevTools/media-emulation permission was requested. One ordinary navigation-wait helper timed out internally at Page.enable; current state was then confirmed with the ordinary accessibility snapshot, without retrying that helper. OS reduced-motion, forced colors, physical touch, full Moon combat/audio/fullscreen, measured performance and no-JavaScript browser runtime were not exhaustively retested. Motion-off fallback was actually exercised; media preference gates and no-JS static content were checked in source.

This version is for local review only. No push or publication is authorized for this iteration.
