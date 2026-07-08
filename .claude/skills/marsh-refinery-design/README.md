# The Marsh Refinery — Design System

> *Make it through the night. Or don't.*

The Marsh Refinery is an independent game studio. Their first announced title is **Gravekeepers** — a co-op horror game where players are *"maintenance workers in a haunted graveyard. Do your job, survive the night, extract alive. But don't worry — even if you die, you're still in the game!"* The studio's *look* is gothic, occult-industrial; the *voice* is comic/pulp horror — EC Comics gallows humor, a wisecracking graveyard-shift foreman, spooky-but-fun rather than solemn. (Earlier drafts of this system leaned monastic and grim; that register has been lightened — see Content fundamentals.)

This design system captures that voice and the visual rules of the marketing site so you can extend it to new pages, decks, social posts, and pitch material without breaking the spell.

---

## Sources

- **Codebase:** `CptMarsh/refinery-website` (master @ c17b31a) — React + Vite + Tailwind + shadcn/ui. The single live page composes `Navbar`, `HeroSection`, `GameTeaser`, `NewsletterSignup`, `StudioFooter`. Almost all visual choices live as inline Tailwind on those five files; tokens are NOT extracted into theme variables in the original (the shadcn `:root` defaults are unused — the site overrides everything inline). This file system reverse-engineers them.
- **Brand marks (uploaded):** the studio mark — a refinery **barrel with cephalopod tentacles** pouring from its base (the industrial refinery + the creature in one glyph). Shipped as `studio-barrel-cream.png` / `-green.png` / `-gray.png`, tinted from a single white-on-transparent master. The earlier standalone octopus (`studio-logo-*.png`) is retired from the lockups but kept in `assets/` — it now lives *inside* the barrel.
- **Live site context (from index.html metadata):** themarshrefinery.com, contact `omer.schapiro@themarshrefinery.com`, founder LinkedIn `omerschapiro`, Discord `54ChSunvEF`, YouTube `@marsh-refinery-studio`, itch.io `marsh-refinery.itch.io/gravekeepers`.

No Figma, no slide deck, no docs site were attached.

---

## Products represented

There is **one** surface to design against:

1. **Marketing website** — single-page studio + game landing. Hero with looping muted YouTube trailer behind a vignette, a teaser block for the game, a newsletter signup ("Punch In / Follow the Dig"), and a footer with social icons.

The studio also ships a playable build on itch.io and a pitch deck (linked but not stored in repo). Those are the obvious next surfaces — both should follow this system.

---

## Content fundamentals

The voice is the most defining trait of the brand — and the dial here is deliberate. **Gravekeepers is co-op comic/pulp horror, but the comedy is deadpan, not zany.** The register is *indifference*: the studio treats a haunted graveyard as a night shift, and death as a scheduling problem. The humor lives in the underreaction — *"Make it through the night. Or don't."* — never in a bolted-on punchline. Think the dry flatness of a foreman who's seen it all and can't be bothered to be scared for you. (Earlier drafts of this system leaned monastic and grim; the fix is to make it *drier*, not sillier — see Content fundamentals.)

Rules:

- **Deadpan, indifferent register.** The horror is routine; the studio can't be bothered to oversell it. The comedy is in the *underreaction* — death gets a shrug (*"Make it through the night. Or don't."*), not a scream and not a wisecrack. Name actions plainly, like shift instructions: *"Punch In"*, *"Follow the Dig"*, *"Clock In"*, *"Descend"* (scroll cue). Avoid two failure modes: presumptuous scripture-toned commands (*"Bear Witness"*, *"Kneel"*) on one side, and zany bolted-on punchlines (*"…you'll respawn as something worse!"*) on the other. If a line has to explain its own joke, cut the explanation — the flatness is the joke.
- **Co-op camaraderie.** You and your crew are down in the dirt *together*. Speak to players as a team — *"you and your crew"*, *"nobody digs alone"*. Warmth is allowed now; horror is a group activity and misery loves company.
- **Second person to the crew; third person to the studio.** Game copy talks to the players (*"You're maintenance workers in a haunted graveyard"*). Studio copy refers to itself by name (*"The Marsh Refinery"*), not "we".
- **Short, flat, and final.** *"Do your job. Survive the night. Extract alive."* Three clauses, no embellishment, no rimshot. The dry aside is allowed if it stays deadpan (*"… or don't"*); a spelled-out gag is not. Understatement always beats overstatement here.
- **Exclamation points: almost never.** The one sanctioned exception is the game's own tone-breaker (*"…you're still in the game!"*) — warmth that lands *because* everything around it is flat. Don't add more; a deadpan close hits harder.
- **Italic = narrative voice.** Body paragraphs are italic by default — in-fiction, atmospheric, or the punchline. Roman type for facts (status, dates, numbers, names).
- **UPPERCASE LABELS.** Every nav label, button, tag, eyebrow, status pill, and footer heading is uppercase with wide tracking (0.18em–0.40em). Long sentences are NOT uppercase — only the labels.
- **No emoji. Ever.** Thin SVG icons + the ornamental diamond glyph only. (This rule survives the lighter tone — the humor is in the words, not in 💀.)
- **Casing & punctuation specifics:**
  - Em-dashes for the flat aside: *"Get dispatches from the Refinery — dev logs, reveals, release dates."*
  - "The Marsh Refinery" — always with the article, Title Case in body, UPPERCASE in chrome.
  - "Gravekeepers" — one word, capitalised in body, UPPERCASE in titles.
- **Tag style.** Genre tags read like inscriptions: *"Co-op"*, *"Horror"*, *"Comedy"* — Title Case in source, rendered uppercase via CSS.

Writing checklist for a new sentence:
1. Would a foreman who's seen it all say it flat, without flinching? If it's grim, dry it out; if it's zany, cut the gag.
2. Is it a label? UPPERCASE, wide tracking, ≤ 4 words.
3. Is it body? Italic, sentence case, short — setup then twist.
4. Is it a fact (date, status, number)? Roman, sentence case, no decoration.

---

## Visual foundations

### Palette

Three families, used in this priority:

1. **Ink** — `#080808` page, `#0d0b08` surface, `#1e1a14` rule, `#2a2218` border, `#3a3028` hover-border, `#4a3f33` dim text. Almost the whole UI lives here.
2. **Bone** — warm cream foreground. `#d4c9b0` for headings, `#c8b89a` for strong body, `#8a7d6a` for muted/italic body, `#4a3f33` for footer-dim. Never pure white.
3. **Moss** — the *only* accent for chrome. `#6b8f4e` for accent text + rules, `#4a7a35` for button borders + underlines, `#2a3a20` for tag borders, `rgba(74,122,53,0.15–0.20)` for hover fills and glow. Never used as a flat fill — only as borders, hairlines, and 15–20% alpha washes.
4. **Brand Primary / Signal Green** — `#015a06` (token: `--brand-primary`). The studio's *loud stamp* — used full-strength on signature surfaces only: covers, splashes, social avatar backgrounds, sticker prints, section-divider slides. Pairs with bone-200 type. Never used as a page background or chrome border. The two greens (Moss vs. Signal) almost never appear in the same composition — Moss is whisper, Signal is shout.

There is no blue, no purple, no warm secondary. Don't introduce one. Status colors (destructive, warning) — if needed — should be a desaturated rust/blood (`#7a2a1f`) but the live site avoids them.

### Typography

The codebase uses Tailwind defaults (system sans). That's a placeholder — the *intended* feel needs heavier display weight and warmer body. **Substitution flagged:**

- **Display / UI:** Inter (Google Fonts) at 900 / 600 / 500. Wide letter-spacing replaces serif gravitas.
- **Optional serif accent:** Cormorant Garamond — for italic body, if the studio wants to lean more "monastic." Currently NOT in use; offered as the upgrade path.

Scale and tracking (see `colors_and_type.css`):
- Display: clamp(2rem, 9vw, 9rem), 900-weight, uppercase, 0.08em tracking, soft moss glow
- H1: clamp(1.75rem, 5vw, 3rem), 900, uppercase, 0.08em
- Eyebrow: 12px, 500, 0.40em tracking, moss color
- Body: 16px, italic, 1.7 line-height, bone-400
- Tag: 12px, 500, 0.18em, uppercase

> **Action item for the user:** confirm whether the studio plans to ship a custom font (e.g. an actual blackletter / engraved face for display). Inter is the closest free match to the current system-sans rendering; an upgrade to a real display face would dramatically lift the brand.

### Spacing & rhythm

- **8px grid.** All paddings/margins resolve to 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 144.
- Section vertical padding: `py-24` (96px). Hero is full viewport (`min-h-screen`).
- Inner column max-width: `max-w-6xl` for content, `max-w-xl` for centered text blocks (newsletter), `max-w-md` for taglines.
- Between elements inside a column: 16–24px. Stack rhythm uses ornamental rules (diamond + hairlines) at 32–48px breaks instead of bigger gaps.

### Backgrounds

The hero combines four layers — this is the brand's signature stack. Use it on any "showcase" surface:

1. Black base (`#080808`).
2. Optional muted/looping video or hero image, scaled `1.5×`, no controls, no audio.
3. **Dot dust** — `radial-gradient(circle, #c8b89a 1px, transparent 1px)` at 40px tiling, 6% opacity. This subtle bone-colored noise appears on multiple sections; it's the "incense haze."
4. Black overlay at 60% opacity for legibility.
5. **Vignette** — `radial-gradient(ellipse at center, transparent 40%, #000 100%)`.

No gradients between brand colors. No photographs of people. No illustrations beyond the cuttlefish mark and the Gravekeepers key art.

### Borders, rules, ornaments

- **Hairlines.** 1px, never thicker. Color = `#1e1a14` for chrome dividers, `#4a7a35` for accent rules.
- **Ornamental rule.** A repeating motif: short hairline — small rotated square (diamond) — short hairline. The diamond is `1.5px × 1.5px`, rotated 45°, moss color, 30–50% opacity. Use it to frame display titles and section headers.
- **Card borders.** Image-frames use `border: 1px solid #2a2218` plus `box-shadow: 0 0 60px rgba(0,0,0,0.8)`. The shadow looks like the card sits in a candlelit alcove.
- **No rounded corners** on most surfaces. Buttons, inputs, tags, image frames are all square. The shadcn `--radius: 0.5rem` is shipped but unused in the marketing layer.

### Cards

Cards are essentially "framed objects" — square, 1px border in `#2a2218`, no fill (transparent over the dust texture), with an outer black glow that acts as ground-shadow. Avoid filled card surfaces; let the page bleed through.

### Buttons

One button pattern only — outline + moss text. Square corners.

```
border: 1px solid #4a7a35;
color: #6b8f4e;
padding: 12px 32px;
font-size: 14px;
font-weight: 600;
letter-spacing: 0.18em;
text-transform: uppercase;
transition: all 300ms;
hover → background: rgba(74,122,53,0.20);
```

There is also a "ghost link" pattern for secondary actions: bone-400 text, no border, hover → bone-200.

### Form fields

Black-surfaced (`#0d0b08`), 1px `#2a2218` border, bone-300 text, `#4a3f33` placeholder. On focus the border brightens to moss-600 (`#4a7a35`). No rounded corners. Inputs sit at the same height as buttons (44px / `py-3`).

### Hover & press states

- **Links:** decoration-color animates from `rgba(74,122,53,0.4)` → `#4a7a35` over 300ms. No underline thickness change.
- **Buttons:** background fades in to 20% moss over 300ms. No translation, no scale.
- **Icons:** color from `#3a3028` → `#8a7d6a` (footer), 200ms.
- **Press:** no separate active state on the live site. If you add one, darken the moss fill to 30% and skip transforms — never bounce, never spring.

### Motion

Restrained. The only animations on the live site are:
- The hero video looping.
- Color/border transitions (200–300ms, default ease).
- Smooth-scroll on anchor links.

No fade-in-on-scroll, no parallax, no marquee, no blur reveals. If you add motion, it should feel like a candle flicker — subtle, slow, optional.

### Transparency & blur

- Navbar: `bg-[#080808]/90 backdrop-blur-sm` — the only blur on the page.
- Overlays on imagery: black at 60% opacity.
- Moss fills are always 15–20% alpha; never 100%.

### Imagery

- **Color treatment:** desaturated, low-key, dominantly black with green moss highlights. The Gravekeepers key art has the same dark-green-on-near-black palette as the chrome.
- **Cropping:** centered subject, generous negative space, square or 3:4 portrait frames (`max-w-sm`).
- **No grain filter applied in code** — but the dot-dust texture overlay reads as grain at viewing distance.

### Layout rules

- Fixed navbar at top, full-bleed.
- Hero is full viewport height, centered both axes.
- Below the fold: 96px vertical section padding, max 6xl content width, centered.
- Footer is 80px tall, centered, with a single hairline divider at top.
- Mobile: same vertical rhythm, columns stack, type scales via `clamp()`.

---

## Iconography

The studio uses **inline SVGs only** — no icon font, no Lucide, no Heroicons even though `lucide-react` is in `package.json` (not used by any component on master). Three icons total ship in production:

- Mail (rectangle with envelope flap, 2px stroke, round joins)
- LinkedIn (filled glyph)
- YouTube (filled glyph)
- Discord (filled glyph)

Plus one ornamental glyph: a 1.5px rotated square ("the diamond") used between hairlines as a section ornament.

**Stroke style for stroked icons:** 2px stroke, round line-cap, round line-join, no fill. Color from `var(--ink-edge-2)` resting → `var(--bone-400)` hover.

**Filled brand icons** (LinkedIn / YouTube / Discord) keep their native paths, recolored via `currentColor`.

**Mark / logo:** The barrel-and-tentacles glyph — a single-fill silhouette tinted to a brand color. Three prepared tints: **cream** (`--bone-200` `#d4c9b0`, the workhorse on dark grounds — prefer this), **green** (`--brand-primary` `#015a06`, the signal stamp for bone/neutral/print), and **gray** (`--bone-400` `#8a7d6a`, for dim chrome). The master is white on transparent, so any brand color can be applied by recoloring the fill. When placing on dark backgrounds, use cream; on bone or print, use green.

**Emoji:** Never. **Unicode glyphs as icons:** Never (no checkmarks, no arrows). The single inline checkmark in the newsletter "submitted" state is an inline SVG, not `✓`.

If you need an icon not in this set: use Lucide (already imported in the codebase) and FLAG the substitution. Stroke = 2px. Match the line-cap/join above.

---

## Index — what's in this folder

- **`README.md`** — this file. Brand context + content + visual rules.
- **`SKILL.md`** — Agent Skills front-matter so this folder works as a Claude Code skill.
- **`colors_and_type.css`** — every token (color, size, spacing, motion) as CSS custom properties + semantic element styles. Import this and use `var(--…)` instead of inlining hex codes.
- **`assets/`** — logos (green / gray / cream), the Gravekeepers key art, the OG share image.
- **`preview/`** — small HTML cards rendered into the Design System tab. Read them to see tokens in use.
- **`ui_kits/website/`** — pixel-fidelity recreation of the marketing site as composable JSX components plus an interactive `index.html`.

## Caveats / open questions

- No custom font was shipped in the codebase; **Inter** is a substitute. Confirm whether the studio wants a real display face.
- No pitch deck or slide template was supplied; no `slides/` was generated. If you have one, send it over and we'll codify the slide system.
- Status / destructive colors are inferred — the live site never uses them. Treat the rust / blood values as provisional.
- The barrel-and-tentacles mark is the primary studio mark. A wordmark, monogram, and seal lockup exist (see Brand — Logos); no other alternates.
