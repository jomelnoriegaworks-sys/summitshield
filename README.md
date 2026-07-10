# Summit Shield Insurance — Marketing Website

A premium, conversion-focused 3-page marketing website for **Summit Shield Insurance**, built to integrate seamlessly with **GoHighLevel (GHL)**. Portfolio case study built to production-client standards.

![Summit Shield Insurance](assets/img/logo.png)

## Structure (single-page site)

| File | Purpose |
|---|---|
| `index.html` | **The entire site in one page**: hero (photo + policy card), trust bar, problem/empathy/promise narrative, 5 full coverage sections (Life/Health/Auto/Home/Business with photos, benefits, ideal customer, CTA), proof of results, comparison table, process, cost, testimonials, guarantee, urgency with rate chart, FAQ, CTA, and the contact section (GHL form embed placeholder + email-only quote form) |
| `privacy.html` / `terms.html` | Legal pages, linked from the footer |
| `thanks.html` | Quote form success page |
| `404.html` | Branded not-found page (Netlify serves this automatically) |
| `_redirects` | Old `/services` and `/contact` URLs redirect to the page anchors |
| `ghl-export/` | **GoHighLevel import kit** — paste-ready Custom CSS, header code, and the whole page as one Custom HTML/JS block, with instructions |

Plus `styles.css` (single stylesheet) and `script.js` (vanilla JS: mobile nav, FAQ accordion, contact tabs with arrow-key support).

Live site: https://summitshieldinsurance.netlify.app (auto-deploys from `main`).

**Quote form**: the email-only "Request a Quote" form uses Netlify Forms. One-time setup: Netlify dashboard → Forms → Notifications → add email notification to `summitshieldinsure@gmail.com`.

Photography: Unsplash/Pexels-licensed stock, self-hosted in `assets/img/` with responsive 480/800/full variants (free for commercial use, no attribution required).

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
