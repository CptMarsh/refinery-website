# UI Kit — Marketing Website

Pixel-fidelity recreation of the live Marsh Refinery marketing site (`themarshrefinery.com`). Sourced from `CptMarsh/refinery-website` master.

## Files
- `index.html` — runnable composition: Navbar + HeroSection + GameTeaser + NewsletterSignup + StudioFooter, in the order they appear on the live site. The "Learn More" button smooth-scrolls to the teaser; the newsletter input shows the success state on submit.
- `website-kit.jsx` — atoms (`Ornament`, `Button`, `Tag`, `Eyebrow`, `MetaLabel`, `BackgroundLayers`) and full sections (`Navbar`, `HeroSection`, `GameTeaser`, `NewsletterSignup`, `StudioFooter`).
- `styles.css` — all visual rules. Ports the inline-Tailwind decisions from the source files into a `.tmr-*` class system.

## Notable choices
- The hero uses a real YouTube embed of the Gravekeepers trailer (same video id as production).
- The Gravekeepers card art is the imported `assets/gravekeepers-keyart.png` (the `gk-preview.png` asset from the repo).
- Inter is loaded from Google Fonts as a stand-in for the studio's intended display face.
- Everything else (color, spacing, motion) matches the live site within 1–2 px.

## Not recreated
- Routing / pages config (the live app only has one page).
- shadcn `ui/*` primitives (no production usage).
- Confetti, Stripe, leaflet, react-quill, etc. (in `package.json` but unused on master).
