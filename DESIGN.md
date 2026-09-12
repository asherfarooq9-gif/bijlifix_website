---
name: Bijlifix
description: Licensed electrician marketing site for Karachi, built for one thing - the tap-to-call.
colors:
  ohm-blue: "oklch(0.5 0.19 262)"
  ohm-blue-foreground: "oklch(0.99 0 0)"
  volt-orange: "oklch(0.68 0.18 45)"
  volt-orange-foreground: "oklch(0.16 0.03 40)"
  cloud-white: "oklch(0.985 0.004 250)"
  ink-navy: "oklch(0.18 0.02 255)"
  card-white: "oklch(1 0 0)"
  mist-grey: "oklch(0.955 0.008 250)"
  mist-grey-foreground: "oklch(0.28 0.03 255)"
  muted-foreground: "oklch(0.48 0.02 255)"
  accent-tint: "oklch(0.94 0.02 255)"
  border-hairline: "oklch(0.9 0.008 250)"
  ring-focus: "oklch(0.6 0.17 262)"
  alert-red: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.2vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "4.8px"
  md: "6.4px"
  lg: "8px"
  xl: "11.2px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ohm-blue}"
    textColor: "{colors.ohm-blue-foreground}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "oklch(0.44 0.19 262)"
  button-cta:
    backgroundColor: "{colors.volt-orange}"
    textColor: "{colors.volt-orange-foreground}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-cta-hover:
    backgroundColor: "oklch(0.63 0.19 45)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ohm-blue}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-service:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge-trust:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.ohm-blue}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
---

# Design System: Ohmwerks

## 1. Overview

**Creative North Star: "The Trusted Call"**

Every pixel exists to get a stressed, mobile homeowner from "is this electrician legit?" to a finished phone call in under five seconds. The system reads as a licensed professional's site, not a startup's: confident, plain-spoken, quick to prove credentials, quick to hand over a phone number. Density stays low and calm (this is not a dashboard); contrast stays high (this is read on a cracked phone screen in bad light, possibly during a power outage).

This system explicitly rejects the generic AI-template SaaS landing page: no centered hero over a gradient blob, no three identical feature cards, no tiny uppercase eyebrow stamped above every section. It also rejects the fly-by-night contractor look: no stock-photo-only hero, no vague "we serve your area" copy, no fake urgency countdowns, no wall-of-text pricing.

**Key Characteristics:**
- One accent does the talking: Ohm Blue for brand and structure, Volt Orange reserved only for the action the page wants (call, WhatsApp).
- Asymmetric, split layouts over centered symmetry - the page has a point of view, not a template.
- Real local specifics (named Karachi areas, licensing language, response times) instead of generic trade-site filler.
- Flat, mostly shadow-free surfaces; depth comes from tonal layering, not drop shadows.

## 2. Colors

Cool, near-white "cloud" neutrals carry the page; one deep blue carries the brand; one warm orange is spent exclusively on the conversion action.

### Primary
- **Ohm Blue** (`oklch(0.5 0.19 262)` / ~#1E4FD8): brand color. Nav mark, primary buttons, links, section headings that need weight, focus rings. This is the color a visitor associates with "Ohmwerks."

### Secondary
- **Volt Orange** (`oklch(0.68 0.18 45)` / ~#E08A2E): the single conversion color. Used only for the Call Now / WhatsApp actions and nothing else - not decoration, not a second brand color. Paired with near-black text (`oklch(0.16 0.03 40)`), never white text, since orange-on-white text fails contrast.

### Neutral
- **Cloud White** (`oklch(0.985 0.004 250)` / ~#F7F8FA): page background. A whisper of blue, not warm cream - keeps the trade-professional feel cool and clean rather than "artisan warm."
- **Card White** (`oklch(1 0 0)` / #FFFFFF): surfaces lifted above the page (cards, nav bar, popovers).
- **Ink Navy** (`oklch(0.18 0.02 255)` / ~#1B2233): primary text. Never pure black.
- **Mist Grey** (`oklch(0.955 0.008 250)` / ~#EEF0F4): secondary surfaces, subtle section bands.
- **Muted Foreground** (`oklch(0.48 0.02 255)` / ~#6A7180): secondary text, captions, metadata. Passes 4.5:1 against both Cloud White and Card White.
- **Border Hairline** (`oklch(0.9 0.008 250)` / ~#D9DCE3): dividers, card outlines, input borders.
- **Alert Red** (`oklch(0.577 0.245 27.325)`): reserved strictly for form validation errors. Never used for "urgency" decoration - the Trusted Call rule below covers why.

### Named Rules
**The One Job Rule.** Volt Orange appears only on elements whose job is "make the visitor call or message us right now." If a element isn't the primary conversion action, it does not get orange.

**The No Fake Urgency Rule.** Red, orange, and exclamation-style badges are never used to simulate scarcity or countdowns. Trust is earned through licensing/experience copy, not urgency theater.

## 3. Typography

**Display Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Inter (same family, different weights)
**Label/Mono Font:** `ui-monospace, SF Mono, Menlo, Consolas, monospace` for phone numbers only, so digits read unambiguously.

**Character:** One neutral, highly-legible grotesque carrying the whole page. This is a deliberate choice, not a default: Inter is the same family the brand reference (Sky Soft / shadcn) already committed to, and a single well-weighted family reads as calm competence rather than trying to look "designed."

### Hierarchy
- **Display** (700, `clamp(2.25rem, 1.4rem + 3.2vw, 3.75rem)`, line-height 1.05, tracking -0.02em): the hero headline only. Max two lines at desktop.
- **Headline** (700, `clamp(1.5rem, 1.2rem + 1vw, 2.25rem)`, line-height 1.15, tracking -0.01em): section headings.
- **Body** (400, 1rem, line-height 1.65): all paragraph copy. Capped at 65-75ch measure.
- **Label** (600, 0.8125rem, tracking 0.01em): button labels, nav links, badge text. Sentence case, not uppercase-tracked (see Don'ts).
- **Mono** (500, 1rem): phone numbers and WhatsApp numbers wherever they appear as tap targets.

### Named Rules
**The One Family Rule.** Inter and nothing else. No serif accent, no second display face. Contrast comes from weight and size, never from mixing families.

## 4. Elevation

Flat by default. Depth comes from tonal layering (Card White sitting on Cloud White, Mist Grey banding between sections) plus a 1px Border Hairline, not drop shadows. The single exception is the sticky nav bar and the Call Now button, which carry a soft, blue-tinted shadow (never pure black) to read as "always on top."

### Shadow Vocabulary
- **nav-float** (`box-shadow: 0 1px 12px oklch(0.5 0.19 262 / 0.08)`): the sticky nav bar only, so it reads as floating above content on scroll.
- **cta-lift** (`box-shadow: 0 6px 20px oklch(0.68 0.18 45 / 0.25)`): the Call Now / WhatsApp buttons at rest, deepening slightly on hover to reinforce "press me."

### Named Rules
**The Flat-By-Default Rule.** Everything except the nav and the primary CTA is flat. If a new component reaches for a shadow, that's a signal it should be a tonal surface instead.

## 5. Components

### Buttons
- **Shape:** 6.4px radius (`md`) for standard buttons; full pill (999px) for the Call Now / WhatsApp CTAs specifically, so they read as a distinct, unmissable action shape versus every other button on the page.
- **Primary** (`button-primary`): Ohm Blue background, near-white text, 12px/24px padding, `md` radius. Used for secondary actions like "See Our Work" or in-page navigation CTAs.
- **CTA** (`button-cta`): Volt Orange background, near-black text, 14px/28px padding, pill radius, `cta-lift` shadow. Reserved for Call Now and WhatsApp Us only, per the One Job Rule.
- **Outline** (`button-outline`): transparent background, Ohm Blue text and 1.5px Ohm Blue border. Used for tertiary actions (e.g. "View All Services").
- **Hover / Focus:** all buttons darken their fill by one step and lift `-1px` on hover; focus-visible gets a 2px Ring Focus (`oklch(0.6 0.17 262)`) outline offset 2px. `:active` scales to 0.98 for tactile feedback.

### Badges (trust strip)
- **Style** (`badge-trust`): Accent Tint background, Ohm Blue text, pill radius, 6px/14px padding. Used for "Licensed & Insured," "24/7 Emergency," etc. Icon + label, never emoji.

### Cards (services, testimonials)
- **Corner Style:** 8px radius (`lg`).
- **Background:** Card White on the Cloud White page background; Card White on Mist Grey band sections for extra lift.
- **Shadow Strategy:** none at rest (Flat-By-Default Rule); a 1px Border Hairline substitutes for elevation.
- **Internal Padding:** 24px (`md` spacing step).

### Accordion (FAQ)
- **Style:** full-width rows separated by a single Border Hairline (not a border on every row - one hairline between rows only), chevron rotates 180deg on open, 200ms ease-out.

### Navigation
- Sticky, single line, 72px height max, Card White background with `nav-float` shadow once scrolled. Logo mark + wordmark left, links centered/right, Call Now pill always visible at the far right, collapsing to a hamburger plus a persistent phone icon button below 768px. Active/hover link state underlines in Ohm Blue, no background pill.

## 6. Do's and Don'ts

### Do:
- **Do** keep Volt Orange exclusive to the Call Now / WhatsApp actions (the One Job Rule).
- **Do** use asymmetric, split-content layouts for the hero and feature sections instead of centered symmetry.
- **Do** name real Karachi areas served, real licensing/experience facts, and a real (or clearly placeholder-marked) phone number above the fold.
- **Do** keep buttons, cards, and inputs on the single radius scale (4.8 / 6.4 / 8 / 11.2px, plus pill for CTAs only).
- **Do** cap body copy at 65-75ch and hero subtext at ~20 words / 4 lines max.

### Don't:
- **Don't** ship the generic AI-template SaaS landing page: no centered hero over a gradient blob, no three identical feature cards, no tiny uppercase-tracked eyebrow above every section.
- **Don't** ship the fly-by-night contractor look: no stock-photo-only hero with no specifics, no vague "we serve your area" copy, no fake urgency countdowns or scarcity badges.
- **Don't** use Alert Red or any "urgency" color as decoration; it is reserved for real form errors only.
- **Don't** put white text on the Volt Orange CTA; it fails contrast. Near-black text only.
- **Don't** use `border-left`/`border-right` colored stripes as an accent on any card or list row.
- **Don't** mix in a second typeface. Inter, in different weights, is the entire type system.
