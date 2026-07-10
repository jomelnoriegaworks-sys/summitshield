# Summit Shield Insurance — Marketing Website

A premium, conversion-focused 3-page marketing website for **Summit Shield Insurance**, built to integrate seamlessly with **GoHighLevel (GHL)**. Portfolio case study built to production-client standards.

![Summit Shield Insurance](assets/img/logo.png)

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, trust indicators, services overview, proof of results, comparison table, process, cost, testimonials, guarantee, FAQ, CTA |
| `services.html` | Services — Life, Health, Auto, Home, and Business insurance, each with overview, benefits, ideal customer, and CTA |
| `contact.html` | Contact — contact info, GHL form embed placeholder, GHL calendar embed placeholder |

Plus `styles.css` (single stylesheet, all pages) and `script.js` (vanilla JS: mobile nav, FAQ accordion, contact tabs, anchor nav).

## Tech Constraints (by design)

- **No frameworks, no build tools** — plain HTML/CSS/JS that pastes directly into GHL
- **Vanilla JavaScript only**, wrapped in an IIFE, no dependencies
- **Single CSS file** compatible with GHL's site-wide Custom CSS block
- **Semantic HTML** with accessibility baked in (skip links, ARIA states, focus styles, keyboard-operable accordions/tabs)
- Fonts: **Poppins** (headings) + **Inter** (body) via Google Fonts
- Brand palette: `#0B2D5C` primary navy · `#1E5AA8` secondary blue · `#F5F7FA` background · gold accent for CTAs

## GoHighLevel Integration

### 1. Site-wide CSS
Copy the full contents of `styles.css` into **GHL → Sites → your site → Settings → Custom CSS**.

> If `@import` for Google Fonts is stripped by GHL, add the `<link>` font tags (see the comment at the top of `styles.css`) to the site's **Custom Code → Header** instead.

### 2. Page markup
Each page's `<body>` content is organized into clearly commented sections. In GHL, rebuild each page using **Custom HTML elements** — copy each commented section block as needed. Do not paste the `<html>/<head>/<body>` wrapper tags.

### 3. Form & Calendar embeds (contact page)
`contact.html` contains two clearly labeled placeholders:

- **`<!-- GHL_CALENDAR_EMBED -->`** — replace the placeholder `<div class="ghl-embed-placeholder">` in the *Book a Consultation* panel with your GHL Calendar iframe (GHL → Calendars → Embed Code)
- **`<!-- GHL_FORM_EMBED -->`** — replace the placeholder in the *Request a Quote* panel with your GHL Form iframe (GHL → Sites → Forms → Embed Code)

Both placeholders include an example of the exact snippet GHL outputs, in an HTML comment directly above them.

### 4. CTA wiring
All CTAs point at `contact.html#consultation` (calendar tab) or `contact.html#quote` (form tab). The contact page reads the URL hash and opens the correct tab automatically. When rebuilding in GHL, point these buttons at your GHL page equivalents (e.g. `/contact#quote`).

## Local preview

No build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Conversion strategy

Every section moves visitors toward **Book a Free Consultation** (primary) or **Get a Free Quote** (secondary). Copy follows a problem → promise → proof → process → price → testimonial → risk-reversal → urgency → FAQ → CTA narrative arc.
