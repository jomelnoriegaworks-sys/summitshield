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
3. Re-paste the latest `1-CUSTOM-CSS.css`. The layout breakpoints are written as **container queries**, so the block adapts to the width of the box GHL puts it in — including GHL's editor mobile preview, which narrows the container without narrowing the browser viewport (the situation that makes viewport-only CSS collapse into one-letter-wide nav links).
4. The sticky bottom CTA bar only appears on true mobile viewports (real phones / dev-tools device mode), not in GHL's editor preview — that's expected, it's pinned to the device screen.

## `4-PAGE-BLOCK-MOBILE.html` — where it goes (optional file)

**You probably don't need it.** `3-PAGE-BLOCK.html` is fully responsive on its own — one paste covers desktop, tablet, and mobile. Ignore block 4 unless you specifically want different content per device.

If you do want a device split, here is exactly where each file goes:

1. In the GHL page builder, create **two sections**, one below the other.
2. **Section 1** → add a Custom JS/HTML element → paste **`3-PAGE-BLOCK.html`** → select the *section* → open its settings → **Visibility: hide on mobile** (so it shows on desktop only).
3. **Section 2** → add a Custom JS/HTML element → paste **`4-PAGE-BLOCK-MOBILE.html`** → select the *section* → **Visibility: hide on desktop** (so it shows on mobile only).
4. Both sections: width full, padding 0. Replace the `GHL_FORM_EMBED` placeholder **in both blocks** (they hold separate copies of the form area).
5. Block 4's element ids are prefixed `m-` so the two blocks never collide on the same page, and it also self-hides above 768px as a backup even if the visibility setting is forgotten.

Never paste block 4 as your only block on a normal page — it hides itself on desktop screens by design (that guard is removable; see the comment at the top of the file).

## Notes

- **Images** are hot-loaded from the live Netlify site (`https://summitshieldinsurance.netlify.app`) with responsive srcset variants (phones get ~20–40KB files). If you prefer GHL-hosted images, upload `assets/img/*` to the Media Library and find-replace the URLs in the block.
- **Legal pages** (Privacy/Terms) link to the Netlify site. Recreate them in GHL later if you want everything under one roof.
- The CSS is scoped to the block's `.ss-root` wrapper, so it won't restyle other GHL sections you add to the page — and GHL's own styles won't bleed into the block.
