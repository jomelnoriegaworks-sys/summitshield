/* ==========================================================================
   SUMMIT SHIELD INSURANCE — SITE SCRIPT
   Vanilla JS, no dependencies. Safe to paste into a GHL Custom HTML/JS
   block (wrap in an HTML script tag if pasting inline).
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------
     1. MOBILE NAV TOGGLE
     ------------------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.getElementById('primary-nav');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('is-open', !isOpen);
    });

    // Close menu when a nav link is clicked (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('is-open');
      });
    });

    // Close menu on resize back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 880) {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('is-open');
      }
    });
  }

  /* ------------------------------------------------------------
     2. FAQ ACCORDION
     ------------------------------------------------------------ */
  function initFaqAccordion() {
    var questions = document.querySelectorAll('.faq-question');
    if (!questions.length) return;

    questions.forEach(function (btn) {
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      if (!answer) return;

      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all others (single-open accordion behavior)
        questions.forEach(function (otherBtn) {
          if (otherBtn === btn) return;
          var otherAnswer = document.getElementById(otherBtn.getAttribute('aria-controls'));
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        btn.setAttribute('aria-expanded', String(!isOpen));
        answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
      });
    });
  }

  /* ------------------------------------------------------------
     3. CONTACT PAGE — CONSULTATION / QUOTE TABS
     ------------------------------------------------------------ */
  function initEmbedTabs() {
    var tabs = document.querySelectorAll('.embed-tab');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = document.getElementById(tab.getAttribute('data-target'));

        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.embed-panel-content').forEach(function (panel) {
          panel.classList.remove('is-active');
        });

        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        if (target) target.classList.add('is-active');
      });
    });

    // Deep-link support: #quote or #consultation in the URL opens the right tab
    function openTabFromHash() {
      var hash = window.location.hash.replace('#', '');
      var tab = null;
      if (hash === 'quote') tab = document.querySelector('[data-target="panel-quote"]');
      if (hash === 'consultation') tab = document.querySelector('[data-target="panel-consultation"]');
      if (tab) {
        tab.click();
        var panel = document.querySelector('.embed-panel');
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    openTabFromHash();
    window.addEventListener('hashchange', openTabFromHash);
  }

  /* ------------------------------------------------------------
     4. SERVICES PAGE — ANCHOR NAV ACTIVE STATE ON SCROLL
     ------------------------------------------------------------ */
  function initAnchorNav() {
    var anchorLinks = document.querySelectorAll('.anchor-nav a');
    var sections = document.querySelectorAll('.service-block[id]');
    if (!anchorLinks.length || !sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        anchorLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ------------------------------------------------------------
     5. HEADER SHADOW ON SCROLL (subtle polish)
     ------------------------------------------------------------ */
  function initHeaderScrollState() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(11,45,92,0.08)' : 'none';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------
     INIT
     ------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initFaqAccordion();
    initEmbedTabs();
    initAnchorNav();
    initHeaderScrollState();
  });
})();
