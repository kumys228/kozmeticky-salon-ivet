# Visual and functional QA — 2026-10-20

## Visual comparison
1. Compared the 1600×900 browser rendering with 1.jpg and the scrolled lower page with 2.jpg. Header measured 74px. Identified narrow headline, contact-section split and animation/hydration interaction.
2. Enlarged headline and services title, adjusted about/contact columns, and compared again. Tested 390px and 320px mobile layouts. Identified and fixed contact heading overflow at 1440/1024 and service heading wrapping at 320.

The final geometry preserves the reference composition, palette, 3×2 desktop service grid and combined lower section. Photos and botanical mark differ from the original; exact font metrics, icons and botanical shadows also differ. No claim of exact pixel identity.

## Checks passed
- `npm run build`: production compilation, TypeScript and static prerendering.
- `npx tsc --noEmit`: passed.
- Browser widths: 1600, 1440, 1280, 1024, 768, 390, 320. No horizontal page overflow; no contact overflow after corrections. Raw measurements: breakpoints.json.
- Native mobile menu: open, close, Escape, focus return, navigation to services.
- All six service dialogs: correct title/content, Escape, focus return. Raw results: services.json.
- Gallery route, image enlargement, next image by ArrowRight, Escape, focus return to originating tile.
- Verified phone/mail/maps hrefs; did not initiate calls, send messages or open external maps.
- Final production page at 127.0.0.1:3001: no new console errors/warnings. Earlier development hydration warnings were fixed by using Web Animations rather than changing React-managed style attributes.
- Reduced-motion branches inspected: no Lenis or reveal animations when the media preference requests reduction. No OS preference was changed to test this.

## Screenshots
- desktop-1600.jpg
- desktop-lower-1600.jpg
- mobile-390.jpg
- gallery-mobile.jpg

No Lighthouse or Core Web Vitals score is claimed. Native dialogs handle keyboard focus; no screen-reader audit was performed. Before publication, set NEXT_PUBLIC_SITE_URL to the confirmed production domain and supply verified social URLs if desired.
