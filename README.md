# Local development

Run `npm install`, then `npm run dev`. Open http://localhost:3000.

Production validation: `npm run build`, then `npm start`.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin before deployment; sitemap and Open Graph use it. The default is localhost. No domain was registered and no publication was performed.

Content and contacts: `src/data/site.ts`. Image source registry: `ASSETS.md`. Replace the matching PNGs in `public/images/` to update photographs. Generated imagery is illustrative. Gallery data is centralized in `src/data/gallery.ts`.

Architecture: App Router server pages, shared header/footer, client components for service dialogs, gallery/lightbox and GSAP/Lenis motion. Native dialogs handle focus trapping, Escape and focus return. Reduced-motion preferences disable animations and smooth scrolling.

The original parallel Antigravity source is preserved in `../references/antigravity-source/`. Only `src/` is used by the application. Overall status and visual QA evidence are recorded in `../PROGRESS.md`.

## Domain and external links

Social profile URLs can be set in site.social in src/data/site.ts. Empty values are intentionally not rendered. Footer uses working phone/email shortcuts until verified social URLs are supplied.
