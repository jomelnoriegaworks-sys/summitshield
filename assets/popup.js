/* ============================================================
   SUMMIT SHIELD — CONSULTATION FORM POPUP (single source of truth)

   Loaded by every Netlify page via <script src="assets/popup.js" defer>
   and by the GHL page block via the absolute URL
   https://summitshieldinsurance.netlify.app/assets/popup.js
   (the block already hot-loads all images from this site).

   Injects its own styles and modal markup, then wires every
   consultation/quote CTA to open the modal. Idempotent: does nothing
   if a modal is already present. If this script fails to load, CTAs
   fall back to their anchor hrefs (scroll to the contact panel).
   ============================================================ */
(function () {
  'use strict';

  var FORM_ID = 'BMCvnCSHkyDRszN6VevH';
  var FORM_SRC = 'https://links.smilesociety.online/widget/form/' + FORM_ID;
  var EMBED_SRC = 'https://links.smilesociety.online/js/form_embed.js';

  var CSS = [
    '.ss-form-modal, .ss-form-modal *, .ss-form-modal *::before, .ss-form-modal *::after { box-sizing: border-box; }',
    '.ss-form-modal {',
    '  position: fixed;',
    '  inset: 0;',
    '  z-index: 700;', /* above sticky header (500) and mobile CTA bar (600) */
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  padding: 16px;',
    "  font-family: var(--font-body, 'Inter', 'Segoe UI', Arial, sans-serif);",
    '  visibility: hidden;',
    '  opacity: 0;',
    '  pointer-events: none;',
    '  transition: opacity 220ms ease, visibility 220ms ease;',
    '}',
    '.ss-form-modal.is-open { visibility: visible; opacity: 1; pointer-events: auto; }',
    /* CRITICAL: GHL's form_embed.js writes "visibility:visible;
       pointer-events:auto" INLINE on the form iframe, which overrides the
       inherited hidden state — leaving an invisible click-eating iframe
       fixed over the page. Author !important beats inline styles, so while
       the modal is closed nothing inside it may ever hit-test. */
    '.ss-form-modal:not(.is-open),',
    '.ss-form-modal:not(.is-open) * {',
    '  pointer-events: none !important;',
    '}',
    '.ss-form-modal:not(.is-open) iframe[data-form-id] {',
    '  visibility: hidden !important;',
    '}',
    '.ss-form-modal-backdrop {',
    '  position: absolute;',
    '  inset: 0;',
    '  background: rgba(4, 15, 34, 0.62);',
    '  -webkit-backdrop-filter: blur(3px);',
    '  backdrop-filter: blur(3px);',
    '}',
    '.ss-form-modal-panel {',
    '  position: relative;',
    '  display: flex;',
    '  flex-direction: column;',
    '  width: min(620px, 100%);',
    '  max-height: calc(100vh - 32px);',
    '  max-height: calc(100dvh - 32px);',
    '  background: #fff;',
    '  border-radius: 14px;',
    '  box-shadow: 0 24px 64px rgba(4, 15, 34, 0.4);',
    '  overflow: hidden;',
    '  transform: translateY(12px);',
    '  transition: transform 220ms ease;',
    '}',
    '.ss-form-modal.is-open .ss-form-modal-panel { transform: translateY(0); }',
    '.ss-form-modal-head {',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: space-between;',
    '  gap: 12px;',
    '  padding: 14px 16px;',
    '  border-bottom: 1px solid var(--ss-border, #E2E8F0);',
    '  flex-shrink: 0;',
    '}',
    '.ss-form-modal-head strong {',
    "  font-family: var(--font-heading, 'Poppins', 'Segoe UI', Arial, sans-serif);",
    '  font-size: 1.0625rem;',
    '  color: var(--ss-primary, #0B2D5C);',
    '}',
    '.ss-form-modal-close {',
    '  width: 36px;',
    '  height: 36px;',
    '  flex-shrink: 0;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  border: 1px solid var(--ss-border, #E2E8F0);',
    '  border-radius: 50%;',
    '  background: var(--ss-bg, #F5F7FA);',
    '  color: var(--ss-primary, #0B2D5C);',
    '  font-size: 22px;',
    '  line-height: 1;',
    '  cursor: pointer;',
    '  padding: 0;',
    '}',
    '.ss-form-modal-close:hover { background: var(--ss-border, #E2E8F0); }',
    '.ss-form-modal-body {',
    '  position: relative;',
    '  overflow-y: auto;',
    '  -webkit-overflow-scrolling: touch;',
    '  padding: 4px;',
    '}',
    /* Loading spinner behind the (transparent-until-painted) iframe */
    '.ss-form-modal-body::before {',
    "  content: '';",
    '  position: absolute;',
    '  top: 72px;',
    '  left: 50%;',
    '  width: 32px;',
    '  height: 32px;',
    '  margin-left: -16px;',
    '  border-radius: 50%;',
    '  border: 3px solid var(--ss-border, #E2E8F0);',
    '  border-top-color: var(--ss-secondary, #1E5AA8);',
    '  animation: ss-modal-spin 0.8s linear infinite;',
    '}',
    '@keyframes ss-modal-spin { to { transform: rotate(360deg); } }',
    '.ss-form-modal-body iframe[data-form-id] {',
    '  position: relative;',
    '  display: block;',
    '  width: 100%;',
    '  border: none;',
    '  min-height: min(70vh, 640px);', /* visible while loading; form_embed.js sets the real height */
    '}',
    '@media (max-width: 480px) {',
    '  .ss-form-modal { padding: 10px; }',
    '  .ss-form-modal-panel {',
    '    max-height: calc(100vh - 20px);',
    '    max-height: calc(100dvh - 20px);',
    '  }',
    '}',
    '@media (prefers-reduced-motion: reduce) {',
    '  .ss-form-modal, .ss-form-modal-panel { transition-duration: 0.01ms; }',
    '  .ss-form-modal-body::before { animation-duration: 2s; }',
    '}',
  ].join('\n');

  var HTML = [
    '<div class="ss-form-modal-backdrop" data-ss-modal-close></div>',
    '<div class="ss-form-modal-panel">',
    '  <div class="ss-form-modal-head">',
    '    <strong>Book your free consultation</strong>',
    '    <button type="button" class="ss-form-modal-close" data-ss-modal-close aria-label="Close form">&times;</button>',
    '  </div>',
    '  <div class="ss-form-modal-body">',
    '    <iframe',
    '      src="' + FORM_SRC + '"',
    '      style="width:100%;height:100%;border:none;border-radius:0px"',
    '      id="inline-' + FORM_ID + '"',
    '      data-layout="{\'id\':\'INLINE\'}"',
    '      data-trigger-type="alwaysShow"',
    '      data-trigger-value=""',
    '      data-activation-type="alwaysActivated"',
    '      data-activation-value=""',
    '      data-deactivation-type="neverDeactivate"',
    '      data-deactivation-value=""',
    '      data-form-name="Summit Shield - Free Consultation"',
    '      data-height="1551"',
    '      data-layout-iframe-id="inline-' + FORM_ID + '"',
    '      data-form-id="' + FORM_ID + '"',
    '      title="Summit Shield - Free Consultation">',
    '    </iframe>',
    '  </div>',
    '</div>',
  ].join('\n');

  function init() {
    if (document.getElementById('ss-form-modal')) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var modal = document.createElement('div');
    modal.className = 'ss-form-modal';
    modal.id = 'ss-form-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Book your free consultation');
    modal.innerHTML = HTML;
    document.body.appendChild(modal);

    // Script tags inside innerHTML never execute — create the GHL
    // resize/handshake script explicitly.
    var embed = document.createElement('script');
    embed.src = EMBED_SRC;
    document.body.appendChild(embed);

    var lastTrigger = null;

    function openModal(trigger) {
      lastTrigger = trigger || null;
      modal.classList.add('is-open');
      // Lock page scroll without the layout jump the vanishing scrollbar causes
      var scrollbar = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbar > 0) document.body.style.paddingRight = scrollbar + 'px';
      document.body.style.overflow = 'hidden';
      var closeBtn = modal.querySelector('.ss-form-modal-close');
      if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
      lastTrigger = null;
    }

    // Every consultation/quote CTA opens the popup. Delegated, so CTAs
    // added or re-wrapped after load keep working; hrefs stay as no-JS
    // fallbacks. Suffix match covers "#consultation" and
    // "index.html#consultation" alike.
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest(
        'a[href$="#consultation"], a[href$="#quote"], .js-ss-open-form'
      );
      if (!el) return;
      e.preventDefault();
      openModal(el);
    });
    document.querySelectorAll('a[href$="#consultation"], a[href$="#quote"]')
      .forEach(function (el) { el.setAttribute('aria-haspopup', 'dialog'); });

    modal.querySelectorAll('[data-ss-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      // Keep Tab inside the open dialog
      if (e.key === 'Tab') {
        var focusables = modal.querySelectorAll('button, iframe');
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (!modal.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
