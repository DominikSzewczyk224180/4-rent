/* ==========================================================================
   4RENT · interakcje (one-pager)
   menu mobilne · cień nagłówka · scroll-reveal · scrollspy · rok w stopce
   ========================================================================== */
(function () {
  "use strict";

  var body = document.body;

  /* ---- Menu mobilne ---------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var backdrop = document.querySelector(".nav-backdrop");

  function closeMenu() {
    body.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    body.classList.add("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.contains("menu-open") ? closeMenu() : openMenu();
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  document.querySelectorAll(".nav__menu a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---- Cień nagłówka przy scrollu -------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle("scrolled", window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll reveal --------------------------------------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Scrollspy: aktywna kotwica w nawigacji -------------------------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  if (navLinks.length && "IntersectionObserver" in window) {
    var map = {};
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var sec = document.getElementById(id);
      if (sec) { map[id] = link; sections.push(sec); }
    });

    var setActive = function (id) {
      navLinks.forEach(function (l) { l.classList.remove("is-active"); });
      if (map[id]) map[id].classList.add("is-active");
    };

    var spy = new IntersectionObserver(
      function (entries) {
        // wybierz najbardziej widoczną sekcję u góry ekranu
        var best = null;
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            if (!best || en.intersectionRatio > best.intersectionRatio) best = en;
          }
        });
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach(function (s) { spy.observe(s); });

    // u samej góry: bez aktywnej pozycji; przy dole: ostatnia
    window.addEventListener("scroll", function () {
      if (window.scrollY < 120) {
        navLinks.forEach(function (l) { l.classList.remove("is-active"); });
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        setActive(sections[sections.length - 1].id);
      }
    }, { passive: true });
  }

  /* ---- Rok w stopce ---------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Modal specyfikacji maszyny -------------------------------------- */
  var specModal = document.getElementById("specModal");
  if (specModal) {
    var pagesBox  = document.getElementById("specModalPages");
    var bodyBox   = document.getElementById("specModalBody");
    var titleEl   = document.getElementById("specModalTitle");
    var eyebrowEl = document.getElementById("specModalEyebrow");
    var dlEl      = document.getElementById("specModalDownload");
    var lastFocus = null;

    function openSpec(card) {
      var title = card.getAttribute("data-spec-title") || "Specyfikacja";
      var cat   = card.getAttribute("data-spec-cat") || "Specyfikacja";
      var pdf   = card.getAttribute("data-spec-pdf") || "#";
      var pages = (card.getAttribute("data-spec-pages") || "").split(",");

      titleEl.textContent = title;
      eyebrowEl.textContent = cat;
      dlEl.setAttribute("href", pdf);
      dlEl.setAttribute("download", title.replace(/[\\/\s]+/g, "-") + ".pdf");

      pagesBox.innerHTML = "";
      pages.forEach(function (src, i) {
        src = src.trim();
        if (!src) return;
        var img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.alt = title + ", specyfikacja, strona " + (i + 1);
        pagesBox.appendChild(img);
      });
      if (bodyBox) bodyBox.scrollTop = 0;

      lastFocus = document.activeElement;
      body.classList.add("spec-open");
      specModal.classList.add("is-open");
      specModal.setAttribute("aria-hidden", "false");
      var closeBtn = specModal.querySelector("[data-spec-close]");
      if (closeBtn && closeBtn.focus) closeBtn.focus();
    }

    function closeSpec() {
      specModal.classList.remove("is-open");
      specModal.setAttribute("aria-hidden", "true");
      body.classList.remove("spec-open");
      pagesBox.innerHTML = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll("[data-spec-open]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var card = el.closest(".lift-card");
        if (card) openSpec(card);
      });
    });
    specModal.querySelectorAll("[data-spec-close]").forEach(function (el) {
      el.addEventListener("click", closeSpec);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && specModal.classList.contains("is-open")) closeSpec();
    });
  }
})();
