# Summit Shield Insurance — GoHighLevel Import Kit

Rebuild the entire one-page site inside GHL in about 5 minutes.

## Files

| File | Paste into |
|---|---|
| `1-CUSTOM-CSS.css` | Site/Funnel Settings → **Custom CSS** |
| `2-HEAD-CODE.html` | Site/Funnel Settings → Custom Code → **Header Code** |
| `3-PAGE-BLOCK.html` | One **Custom JS/HTML element** on the page — **fully responsive, use this alone** |
| `4-PAGE-BLOCK-MOBILE.html` | *(Optional, advanced)* mobile-only variant for GHL device-visibility splits |

## Steps

1. **Create the page.** In GHL: Sites → Websites (or Funnels) → New page. Delete any default sections.
2. **Paste the CSS.** Open the page builder's settings gear → Custom CSS → paste all of `1-CUSTOM-CSS.css`.
3. **Paste the head code.** Settings → Custom Code / Tracking Code → Header → paste `2-HEAD-CODE.html` — it loads the Poppins/Inter fonts **and the mobile viewport tag** (without it, phones render the page zoomed-out desktop size).
4. **Add the page block.** Add one full-width section → set section/row/element **padding to 0 and width to full** → drag in a **Custom JS/HTML** element → paste all of `3-PAGE-BLOCK.html`. This one block adapts to phones, tablets, and desktop, and includes a sticky bottom CTA bar that appears only on mobile.
5. **Wire your GHL form.** In the pasted code, search for `GHL_FORM_EMBED`. Replace the dashed placeholder `<div class="ghl-embed-placeholder">…</div>` with your form's iframe embed (GHL → Sites → Forms → your form → Integrate → copy embed).
6. **Wire the quote capture.** The email-only "Request a Quote" form uses Netlify Forms, which only works on the Netlify-hosted site. Inside GHL, either:
   - replace it with a second (email-only) GHL form embed — recommended, feeds your CRM; or
   - swap the submit button for a link to `mailto:summitshieldinsure@gmail.com`.
7. **Publish and test** on a real phone: anchor links (Coverage/FAQ/Contact), the hamburger menu, the FAQ accordion, and the sticky bottom CTA bar.

## Mobile checklist (if the page looks wrong on a phone)

1. Confirm `2-HEAD-CODE.html` is in the **Header Code** — the viewport tag is what makes phones render at the right scale.
2. Confirm the section/row/column holding the block have **0 padding** and **full width** — GHL's default padding boxes the design in.
3. Preview on a real device or with browser dev tools, not only GHL's editor preview — the editor sometimes renders custom HTML at desktop width regardless.

## When would I use `4-PAGE-BLOCK-MOBILE.html`?

Only if you want **different content or layout per device** using GHL's show/hide device visibility: put `3-PAGE-BLOCK.html` in a "desktop only" section and the mobile file in a "mobile only" section. Its element ids are prefixed `m-` so the two blocks can share a page without colliding. For a normal build you don't need it — block 3 is fully responsive by itself.

## Notes

- **Images** are hot-loaded from the live Netlify site (`https://summitshieldinsurance.netlify.app`) with responsive srcset variants (phones get ~20–40KB files). If you prefer GHL-hosted images, upload `assets/img/*` to the Media Library and find-replace the URLs in the block.
- **Legal pages** (Privacy/Terms) link to the Netlify site. Recreate them in GHL later if you want everything under one roof.
- The CSS is scoped to the block's `.ss-root` wrapper, so it won't restyle other GHL sections you add to the page — and GHL's own styles won't bleed into the block.
