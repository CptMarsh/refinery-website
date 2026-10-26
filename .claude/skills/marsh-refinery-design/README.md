> *Make it through the night. Or don't.*

The Marsh Refinery is an independent game studio. Its first announced title is **Gravekeepers** — a co-op horror game where players are *"maintenance workers in a haunted graveyard. Do your job, survive the night, extract alive. But don't worry — even if you die, you're still in the game!"* The studio's **look** is gothic, occult-industrial; the **voice** is comic/pulp horror played deadpan — a graveyard-shift foreman who has seen it all.

Use this system for the marketing site and everything after it: new pages, decks, social posts, pitch material, credits. The brand is **dark only** — there is one theme.

## Surfaces

- **Marketing website** (themarshrefinery.com) — one page: `Navbar`, `HeroSection` (looping muted trailer), `GameTeaser`, `NewsletterSignup` ("Punch In / Follow the Dig"), `StudioFooter`. All five are components here.
- **Pitch deck** — `SlideTemplate`, six 1920×1080 slides.
- The playable build on itch.io, social avatars and print follow the same rules.

---

## Content fundamentals

The voice is the most defining trait of the brand, and the dial is deliberate. **Gravekeepers is co-op comic/pulp horror, but the comedy is deadpan, not zany.** The register is *indifference*: the studio treats a haunted graveyard as a night shift, and death as a scheduling problem. The humor lives in the underreaction — *"Make it through the night. Or don't."* — never in a bolted-on punchline.

- **Deadpan, indifferent register.** Name actions plainly, like shift instructions: *"Punch In"*, *"Follow the Dig"*, *"Clock In"*, *"Descend"* (the scroll cue). Avoid both failure modes: scripture-toned commands (*"Bear Witness"*, *"Kneel"*) and zany punchlines (*"…you'll respawn as something worse!"*). If a line has to explain its own joke, cut the explanation — the flatness is the joke.
- **Co-op camaraderie.** Speak to players as a team — *"you and your crew"*, *"nobody digs alone"*. Warmth is allowed; misery loves company.
- **Second person to the crew; third person to the studio.** Game copy talks to the players (*"You're maintenance workers in a haunted graveyard"*). Studio copy says *"The Marsh Refinery"*, never "we".
- **Short, flat, final.** *"Do your job. Survive the night. Extract alive."* Understatement beats overstatement.
- **Exclamation points: almost never.** The one sanctioned exception is the game's own tone-breaker (*"…you're still in the game!"*). Don't add more.
- **Italic = narrative voice.** Body paragraphs are italic (`t-body`). Facts — status, dates, numbers, names — are roman (`t-strong`).
- **UPPERCASE LABELS.** Every nav label, button, tag, eyebrow, status key and footer heading is uppercase with wide tracking (`tr-wider` 0.18em to `tr-ritual` 0.40em), ≤ 4 words. Sentences are never uppercase.
- **No emoji. Ever.** Thin SVG icons and the ornamental diamond only — the humor is in the words.
- **Names and punctuation.** Em-dashes for the flat aside: *"Get dispatches from the Refinery — dev logs, reveals, release dates."* "The Marsh Refinery" always keeps its article — Title Case in body, UPPERCASE in chrome. "Gravekeepers" is one word, capitalised in body, UPPERCASE in titles.
- **Tags** read like inscriptions: *"Co-op"*, *"Horror"*, *"Comedy"* — Title Case in source, uppercased by CSS.

Real copy to match:

| Where | Copy |
| --- | --- |
| Hero tagline | *Make it through the night. Or don't.* |
| Teaser body | *Do your job, survive the night, extract alive.* |
| Newsletter | PUNCH IN · FOLLOW THE DIG · *Get dispatches from the Refinery — dev logs, reveals, release dates.* |
| Submitted | You're on the list. Dispatches to follow. |
| 404 | QUOTH THE SERVER · *Nothing buried here.* · RETURN HOME |

Checklist for a new line: would a foreman who's seen it all say it flat? If it's grim, dry it out; if it's zany, cut the gag. A label is UPPERCASE, wide-tracked, ≤ 4 words. Body is italic, sentence case, short. A fact is roman with no decoration.

---

## Visual foundations

### Colour

Four families, in this priority:

1. **Ink** — almost the whole UI. `ink-page` is the page (`bg`), `ink-surface` raises inputs and code (`bg-elev`), `ink-rule` draws chrome hairlines, `ink-edge` frames cards, images and inputs, `ink-edge-2` is the hover border and resting icon colour, `ink-edge-3` is placeholder and footer-dim text.
2. **Bone** — warm cream type, never pure white. `bone-200` for headings, `bone-300` for strong body and input text, `bone-350` for the site's large italic ledes, `bone-400` for muted italic body.
3. **Moss** — the *only* chrome accent. `moss-500` for accent text, eyebrows, tags and ornaments; `moss-600` for button borders, focus borders and hover underlines; `moss-700` for tag borders. Fills are only `moss-fill-soft` (20%) or `moss-glow` (15%) washes — moss is never a solid fill.
4. **Signal green** — `brand-primary` is the studio's loud stamp: covers, splashes, section-divider slides, social avatar backgrounds, stickers, print. Pair it with `bone-200` or `bone-100` type. Never a page background or a chrome border. Moss is whisper, signal is shout — they almost never share a composition.

There is no blue, no purple, no warm secondary; don't introduce one. `blood` and `rust` are provisional status colours the live site never uses — use `blood` as a fill or border with bone type on it, not as text.

Legibility: `bone-100` to `bone-400`, `bone-350`, `moss-bright` and `moss-500` all pass 4.5:1 on `ink-page` and `ink-surface`. `bone-500` passes only at 24px+. `ink-edge-3`, `ink-edge-2` and `ink-edge` as text (placeholder, footer heading, footer icons, copyright) are below 3:1 exactly as the live site has them — keep them for decorative, non-essential text only.

### Type

**Inter, doing double duty** — one free webfont (Google Fonts), loaded once — plus JetBrains Mono.

- Display and section titles: Inter 900, uppercase, `tr-wide` 0.08em — `t-display` (fluid `t-display-size`, `shadow-display`, once per page) and `t-h1` (fluid `t-h1-size`). `t-h2` is 900 at 0.18em; `t-h3` is 600 sentence case.
- Body voice: `t-body` — Inter italic 400, 16px, line-height 1.7, `bone-400`.
- Facts: `t-strong` — roman 600, `bone-300`.
- Labels: `t-eyebrow` (0.40em), `t-meta` (0.30em), `t-tag` and `t-link` (0.18em), `t-button` — all 12–13px uppercase, moss-500 (links bone-300 with a moss underline).
- Mono: `t-mono` for code, hex values and metadata.

No serif is in production. Inter stands in for a dedicated display face the studio hasn't chosen yet.

### Spacing and layout

- **8px grid**: `s-1` 4px through `s-10` 144px. Sections pad `s-9` (96px) vertically; the hero is full viewport height, centred on both axes.
- Content width: 1100px (`max-w-6xl`) for content, 600px for centred text blocks (newsletter), 480px for taglines.
- Inside a column use 16–24px (`s-4`–`s-5`). At 32–48px breaks, use an `Ornament` instead of a bigger gap.
- Navbar fixed and full-bleed; footer centred with a single `ink-rule` hairline on top. On mobile, columns stack and type scales with the clamps.

### Backgrounds

The signature stack (`BackgroundLayers`) for any showcase surface:

1. `ink-page` base.
2. Optional muted, looping, control-less video or still, scaled 1.5×.
3. **Dot dust** — a 1px `bone-300` dot on a 40px tile at `texture-opacity` (6%). It reads as grain or incense haze at a distance; it also sits on the teaser and on every slide.
4. Black overlay at `overlay-opacity` (60%) for legibility.

No gradients between brand colours. No photographs of people. No illustration beyond the mark and the Gravekeepers key art.

### Borders, ornaments, radii, shadows

- **Hairlines are 1px, never thicker.** `ink-rule` for chrome dividers, `moss-600` or `moss-fill-rule` for accent rules.
- **The ornament** — hairline · rotated square · hairline, moss-500 at 30–50% opacity — frames display titles and section headers.
- **Square corners** everywhere: `r-0` on buttons, inputs, tags, cards and frames. `r-full` only for status pills and the seal.
- **Cards are framed objects**: transparent (the dust shows through), 1px `ink-edge` border, `shadow-key-art` as a ground shadow — a candlelit alcove. Never a filled card surface.

### States and motion

- Links: underline colour `moss-rule-40` → `moss-600` over 300ms; no thickness change.
- Buttons: `moss-fill-soft` fades in over 300ms. No translate, scale, bounce or spring. A pressed state, if added, is 30% moss.
- Inputs: `ink-edge` border → `moss-600` on focus.
- Icons: `ink-edge-2` → `bone-400`, 200ms.
- Keyboard focus on buttons, links and icons: a 1px solid `moss-bright` outline 3px out (8:1 on ink) — added in this system; the live site has none.
- Motion is restrained: the looping hero video, 200–300ms colour and border transitions, smooth anchor scrolling. No fade-in-on-scroll, parallax, marquee or blur reveals. Anything new should feel like a candle flicker — slow, subtle, optional.
- The navbar's `blur(6px)` over 90% ink is the only blur. Overlays are black at 60%.

### Imagery

Desaturated, low-key, dominantly black with moss-green highlights — the Gravekeepers key art shares the chrome's dark-green-on-near-black palette. Centre the subject with generous negative space, in square or 3:4 portrait frames.

---

## Iconography

Inline SVG only — no icon font. Four icons ship in production (`Icon`, and as files in the Icons group): **Mail** (2px stroke, round caps and joins, no fill) and the filled **LinkedIn**, **YouTube** and **Discord** glyphs with their native paths. Colour them through `currentColor`: `ink-edge-2` at rest, `bone-400` on hover.

The one ornamental glyph is the diamond — a small square rotated 45° between hairlines.

No emoji. No Unicode glyphs as icons (no ✓, no arrows) — the newsletter's submitted check is an inline SVG. If you need an icon outside the set, use Lucide at a 2px stroke with matching caps and joins, and flag the substitution.

## The mark

The studio mark is a refinery **barrel with cephalopod tentacles** pouring from its base — the refinery and the creature in one glyph. It ships in three tints (Logos group): **cream** (`bone-200`, the workhorse on dark grounds — prefer it), **green** (`brand-primary`, the stamp on bone and print) and **gray** (`bone-400`, dim chrome). Use the `Lockup` component for the stacked, horizontal, monogram, seal, avatar and chrome lockups. The earlier standalone octopus is retired from lockups and kept only for reference.

---

## Index — what's in this folder

- **`README.md`** — this file, synced from The Marsh Refinery Design System artifact (https://claude.ai/artifact/BiAv5TgcbDJaENVAv4k8oe).
- **`CONNECT_DESIGN_SYSTEM.md`** — how the token layer in `src/index.css` and `tailwind.config.js` is wired to the system.
- **`assets/`** — barrel marks (cream / green / gray), the retired octopus logos, the Gravekeepers key art, the OG share image.
- **`ui_kits/website/`** — an older static recreation of the marketing site. The production components in `src/components/` (with the shared atoms in `src/components/brand.jsx`) are the up-to-date reference.
