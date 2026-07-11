# Summit Shield Insurance — GoHighLevel Import Kit

Rebuild the entire one-page site inside GHL in about 5 minutes.

## Files

| File | Paste into |
|---|---|
| `1-CUSTOM-CSS.css` | Site/Funnel Settings → **Custom CSS** |
| `2-HEAD-CODE.html` | Site/Funnel Settings → Custom Code → **Header Code** |
| `3-PAGE-BLOCK.html` | One **Custom JS/HTML element** on the page — **fully responsive, use this alone** |
| `4-PAGE-BLOCK-MOBILE.html` | Legacy fallback for existing two-section device splits; not needed for new installs |

## Steps

1. **Create the page.** In GHL: Sites → Websites (or Funnels) → New page. Delete any default sections.
2. **Paste the CSS.** Open the page builder's settings gear → Custom CSS → paste all of `1-CUSTOM-CSS.css`.
3. **Paste the head code.** Settings → Custom Code / Tracking Code → Header → paste `2-HEAD-CODE.html` — it loads the Poppins/Inter fonts, **the mobile viewport tag** (without it, phones render the page zoomed-out desktop size), and **the favicon links** that replace GHL's default funnel icon. Also upload `assets/img/favicon-512.png` under GHL's site favicon setting as a backup; Google Search shows the new favicon only after it recrawls the site (days, not minutes).
4. **Add the page block.** Add one full-width section → set section/row/element **padding to 0 and width to full** → drag in a **Custom JS/HTML** element → paste all of `3-PAGE-BLOCK.html`. This one block adapts to phones, tablets, and desktop—including GHL's narrow mobile editor—and includes a sticky bottom CTA bar on real mobile screens. Do not add block 4.
5. **Confirm the form popup.** Every "Book My Free Consultation" CTA opens the GoHighLevel form **Summit Shield - Free Consultation** (`BMCvnCSHkyDRszN6VevH`) in a popup modal. The popup component is a single shared file — `assets/popup.js` on the Netlify site — loaded by this block and by every Netlify page, so there is exactly one copy to edit (it carries its own styles; a stale Custom CSS paste can't break it). If a CTA ever falls back to scrolling to the contact panel instead of opening the popup, check that https://summitshieldinsurance.netlify.app/assets/popup.js is reachable.
6. **Publish and test** on a real phone: anchor links (Coverage/FAQ/Contact), the hamburger menu, the FAQ accordion, the form popup (open, submit, close with the X / Escape / backdrop), and the sticky bottom CTA bar.

> **Buttons look dead in the GHL editor?** That's expected: the builder canvas doesn't run custom scripts, so the popup, hamburger, and FAQ only respond in **Preview** or on the **published page** — not while editing.

## Mobile checklist (if the page looks wrong on a phone)

1. Confirm `2-HEAD-CODE.html` is in the **Header Code** — the viewport tag is what makes phones render at the right scale.
2. Confirm the section/row/column holding the block have **0 padding** and **full width** — GHL's default padding boxes the design in.
3. Re-paste the latest `1-CUSTOM-CSS.css`. Block 3 measures its own rendered width and adds the narrow-layout class automatically, so it adapts even when GHL narrows the editor canvas without narrowing the browser viewport.
4. The sticky bottom CTA bar only appears on true mobile viewports (real phones / dev-tools device mode), not in GHL's editor preview — that's expected, it's pinned to the device screen.

## `4-PAGE-BLOCK-MOBILE.html` — legacy fallback only

**Do not use it for a new install.** `3-PAGE-BLOCK.html` is now the recommended universal block. Keep block 4 only if an existing page intentionally uses separate desktop/mobile content and you are not ready to consolidate it.

If you do want a device split, here is exactly where each file goes:

1. In the GHL page builder, create **two sections**, one below the other.
2. **Section 1** → add a Custom JS/HTML element → paste **`3-PAGE-BLOCK.html`** → select the *section* → open its settings → **Visibility: hide on mobile** (so it shows on desktop only).
3. **Section 2** → add a Custom JS/HTML element → paste **`4-PAGE-BLOCK-MOBILE.html`** → select the *section* → **Visibility: hide on desktop** (so it shows on mobile only).
4. Both sections: width full, padding 0. Confirm the embedded form appears in both blocks if you intentionally keep this legacy split.
5. Block 4's element ids are prefixed `m-` so the two blocks never collide on the same page, and it also self-hides above 768px as a backup even if the visibility setting is forgotten.

Never paste block 4 as your only block on a normal page — it hides itself on desktop screens by design (that guard is removable; see the comment at the top of the file).

## Notes

- **Images** are hot-loaded from the live Netlify site (`https://summitshieldinsurance.netlify.app`) with responsive srcset variants (phones get ~20–40KB files). If you prefer GHL-hosted images, upload `assets/img/*` to the Media Library and find-replace the URLs in the block.
- **Legal pages** (Privacy/Terms) link to the Netlify site. Recreate them in GHL later if you want everything under one roof.
- The CSS is scoped to the block's `.ss-root` wrapper, so it won't restyle other GHL sections you add to the page — and GHL's own styles won't bleed into the block.
