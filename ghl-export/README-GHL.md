# Summit Shield Insurance — GoHighLevel Import Kit

Rebuild the entire one-page site inside GHL in about 5 minutes.

## Files

| File | Paste into |
|---|---|
| `1-CUSTOM-CSS.css` | Site/Funnel Settings → **Custom CSS** |
| `2-HEAD-CODE.html` | Site/Funnel Settings → Custom Code → **Header Code** |
| `3-PAGE-BLOCK.html` | One **Custom JS/HTML element** on the page |

## Steps

1. **Create the page.** In GHL: Sites → Websites (or Funnels) → New page. Delete any default sections.
2. **Paste the CSS.** Open the page builder's settings gear → Custom CSS → paste all of `1-CUSTOM-CSS.css`.
3. **Paste the head code.** Settings → Custom Code / Tracking Code → Header → paste `2-HEAD-CODE.html` (loads the Poppins/Inter fonts).
4. **Add the page block.** Add one full-width section (no padding) → drag in a **Custom JS/HTML** element → paste all of `3-PAGE-BLOCK.html`.
5. **Wire your GHL form.** In the pasted code, search for `GHL_FORM_EMBED`. Replace the dashed placeholder `<div class="ghl-embed-placeholder">…</div>` with your form's iframe embed (GHL → Sites → Forms → your form → Integrate → copy embed).
6. **Wire the quote capture.** The email-only "Request a Quote" form uses Netlify Forms, which only works on the Netlify-hosted site. Inside GHL, either:
   - replace it with a second (email-only) GHL form embed — recommended, feeds your CRM; or
   - swap the submit button for a link to `mailto:summitshieldinsure@gmail.com`.
7. **Publish and test** the anchor links (Coverage/FAQ/Contact), the mobile menu, and the FAQ accordion.

## Notes

- **Images** are hot-loaded from the live Netlify site (`https://summitshieldinsurance.netlify.app`). That works fine in production; if you prefer GHL-hosted images, upload `assets/img/*` to the Media Library and find-replace the URLs in the block.
- **Legal pages** (Privacy/Terms) link to the Netlify site. Recreate them in GHL later if you want everything under one roof.
- The block is vanilla HTML/CSS/JS — no build tools, no dependencies — so it pastes cleanly into GHL's Custom JS/HTML element.
