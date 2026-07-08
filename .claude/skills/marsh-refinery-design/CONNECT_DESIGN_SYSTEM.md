# Connect the Marsh Refinery design system to `refinery-website`

**For:** Claude Code, working in `CptMarsh/refinery-website` (Vite + React + Tailwind v3 + shadcn/ui).
**Goal:** wire the repo's token layer to the Marsh Refinery design system so shadcn components and Tailwind classes render brand-correct, and stop hand-pasting hex values into components.

---

## Context — what's wrong right now

The repo's token layer (`src/index.css`, the `:root` / `.dark` CSS variables that `tailwind.config.js` reads as `hsl(var(--…))`) is **stock shadcn black/white/gray**. It was never connected to the brand. So:

- `bg-primary` renders near-black (`0 0% 9%`), not the signal green.
- `text-muted-foreground`, `bg-card`, `border`, every shadcn component → default grayscale.
- The only place brand color appears (e.g. `src/lib/PageNotFound.jsx`) is **hardcoded hex inline** (`#6b8f4e`, `#4a7a35`, `#d4c9b0`, `#8a7d6a`, `#080808`). Those happen to match the design tokens exactly — but they're literals, so they will drift.

**The brand is dark-only.** `body` is already forced to `#080808`. Don't build a light theme — map the dark palette straight into `:root`.

---

## Step 1 — Replace the token block in `src/index.css`

Replace the entire `@layer base { :root { … } .dark { … } }` block with the following. Values are shadcn's space-separated `H S% L%` channel format (no `hsl()` wrapper — Tailwind adds it). `:root` and `.dark` are intentionally identical: this brand has one mode.

```css
@layer base {
  :root, .dark {
    /* Surfaces — Ink */
    --background:            0 0% 3%;      /* --ink-page   #080808 */
    --card:                  36 24% 4%;    /* --ink-surface #0d0b08 */
    --card-foreground:       42 29% 76%;   /* --bone-200 */
    --popover:               36 24% 4%;    /* --ink-surface */
    --popover-foreground:    42 29% 76%;   /* --bone-200 */

    /* Type — Bone */
    --foreground:            39 29% 69%;   /* --bone-300 body */
    --muted:                 37 20% 10%;   /* --ink-rule */
    --muted-foreground:      36 13% 48%;   /* --bone-400 */

    /* Brand — the signal green stamp */
    --primary:               123 98% 18%;  /* --brand-primary #015a06 */
    --primary-foreground:    42 29% 76%;   /* --bone-200 on green */

    /* Accent — Moss (the working green) */
    --accent:                93 29% 43%;   /* --moss-500 #6b8f4e */
    --accent-foreground:     42 50% 88%;   /* --bone-100 */
    --secondary:             96 29% 18%;   /* --moss-700 #2a3a20 */
    --secondary-foreground:  42 29% 76%;   /* --bone-200 */

    /* Lines */
    --border:                33 27% 13%;   /* --ink-edge #2a2218 */
    --input:                 33 27% 13%;
    --ring:                  93 29% 43%;   /* --moss-500 */

    /* Status */
    --destructive:           0 62% 31%;
    --destructive-foreground: 42 29% 76%;

    /* Radius — brand is almost square (gothic) */
    --radius: 0.25rem;
  }
}
```

Keep the second `@layer base { * { @apply border-border …} html, body { … } }` block as-is — it already sets `background-color: #080808`.

**Fonts — the font files are currently NOT loaded at all; this step is mandatory, not an optimization.** `tailwind.config.js` maps `font-display` → `'Cormorant Garamond'…` and `font-ui` → `'Inter'…`, and pages already use those classes — but nothing loads the actual font files (`index.html` has no `<link>`, `index.css` has no `@import`, `main.jsx` imports no fonts). So the browser falls back: display text renders in **Times New Roman**, UI text in the system sans. That's why it doesn't match the slide template (which loads the real webfonts). The hard-refresh "flicker" is just the unstyled → Times fallback paint.

**Fix: self-host via [Fontsource](https://fontsource.org) — do NOT use the Google Fonts CDN `@import`.** CDN + `display=swap` would load the right fonts but reintroduce FOUT (fallback, then a visible swap) on hard refresh. Self-hosting loads the correct fonts *and* bundles them with the app, so they're cached with everything else and there's no swap. Install:

```bash
npm i @fontsource-variable/cormorant-garamond @fontsource-variable/inter @fontsource/jetbrains-mono
```

Then import the weights the design system uses — once, at the top of `src/main.jsx`, above the CSS import, so Vite bundles and fingerprints them:

```js
import '@fontsource-variable/cormorant-garamond'; // display (400–700, incl. italic)
import '@fontsource-variable/inter';               // UI / body
import '@fontsource/jetbrains-mono/400.css';        // mono
import '@fontsource/jetbrains-mono/500.css';
import './index.css';
```

Do **not** add the `@import url('https://fonts.googleapis.com/…')` line to `index.css`. Fontsource declares `@font-face` with `font-display: swap`; since the files are now local they resolve before first paint, so no visible swap. If any residual flicker remains on the display font, override that face to `font-display: optional`.

**Verify** after: `GRAVEKEEPERS` on the ComingSoon page should render in Cormorant Garamond (high-contrast serif with fine hairlines), not Times New Roman.

---

## Step 2 — Add the brand ramp + fonts to `tailwind.config.js`

The shadcn semantic tokens above cover components. Also expose the raw Marsh ramps as named utilities (`text-bone-200`, `bg-signal`, `border-moss-600`) so page code can reference tokens by name instead of pasting hex. Merge into `theme.extend`:

```js
extend: {
  colors: {
    // …keep the existing shadcn color block…
    ink:  { void:'#050505', page:'#080808', surface:'#0d0b08', rule:'#1e1a14', edge:'#2a2218', edge2:'#3a3028', edge3:'#4a3f33' },
    bone: { 100:'#f0e7d2', 200:'#d4c9b0', 300:'#c8b89a', 400:'#8a7d6a', 500:'#6b6052' },
    moss: { bright:'#8aae6b', 500:'#6b8f4e', 600:'#4a7a35', 700:'#2a3a20' },
    signal: '#015a06',           // --brand-primary
    'green-deep': '#0e4a16',     // --brand-green-deep (mark fill / print)
  },
  fontFamily: {
    display: ["'Cormorant Garamond'", "'Times New Roman'", 'Georgia', 'serif'],
    ui:      ['Inter', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
    mono:    ['ui-monospace', "'JetBrains Mono'", 'Menlo', 'Consolas', 'monospace'],
  },
  letterSpacing: {
    wide: '0.08em', wider: '0.18em', widest: '0.30em', ritual: '0.40em',
  },
},
```

---

## Step 3 — De-hardcode the pages you built

Now that tokens exist, replace inline hexes with utilities. In `src/lib/PageNotFound.jsx` and any page under `src/pages/`:

| Inline literal | Replace with |
| --- | --- |
| `bg-[#080808]` | `bg-background` (or `bg-ink-page`) |
| `text-[#d4c9b0]` | `text-bone-200` |
| `text-[#8a7d6a]` | `text-bone-400` |
| `text-[#6b8f4e]` / `bg-[#6b8f4e]` | `text-moss-500` / `bg-moss-500` |
| `border-[#4a7a35]` | `border-moss-600` |
| `rgba(107,143,78,0.15)` glow | `moss/15` in an arbitrary shadow, or the `--moss-glow` token |
| `#c8b89a` dot texture | `bone-300` |

Uppercase labels use `uppercase tracking-widest` (or `tracking-ritual` for eyebrows). Display headings use `font-display`; UI/body uses `font-ui`.

---

## Step 4 — Fix the 404 copy (voice)

`src/lib/PageNotFound.jsx` currently reads **"Quoth the Raven"** / **"Return Home"**. That Poe reference is the solemn, literary register the brand is explicitly moving *away* from.

The brand voice is now **deadpan / indifferent** — a foreman who treats a haunted graveyard as a night shift; comedy is in the underreaction, never a bolted-on punchline. For a 404, lean into the developer-meme deadpan:

- Eyebrow (replaces "Quoth the Raven"): **"QUOTH THE SERVER"**
- A flat line under the `404`: *"Nothing buried here."* (italic, `text-bone-400`)
- Button (keep): **"RETURN HOME"** — uppercase, `tracking-widest`.

Keep it dry. No exclamation points, no emoji.

---

## Voice & brand rules (reference)

Full rules live in the design system's `README.md` (Content Fundamentals) and `SKILL.md`. The short version:

- **Look:** gothic / occult-industrial, dark-only. **Voice:** deadpan comic/pulp horror — dry, indifferent, never zany.
- **Casing:** UPPERCASE labels with wide tracking; body copy italic, sentence case; facts (dates, numbers, status) in roman.
- **Never** use emoji. Exclamation points almost never.
- **Mark:** the barrel-and-tentacles glyph (`studio-barrel-*.png`) — cream on dark, green as the stamp.

---

## Done when

- `bg-primary` is signal green, `text-foreground` is bone, shadcn `Button`/`Card`/`Badge` render dark+brand out of the box.
- No `[#rrggbb]` arbitrary color literals remain in `src/pages/` or `src/lib/PageNotFound.jsx`.
- Display text is Cormorant Garamond; UI text is Inter.
- The 404 says "QUOTH THE SERVER".
