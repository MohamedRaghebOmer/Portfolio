/* ===================================================================
   MOHAMED RAGHEB — PORTFOLIO SCRIPT
   Contents:
   1. Utilities
   2. Theme toggle
   3. Mobile navigation
   4. Header scroll state
   5. Active nav link (scroll spy)
   6. Scroll reveal animations
   7. Custom cursor
   8. Contact form (mailto)
   9. Footer year
   10. Scroll to top
   =================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* -----------------------------------------------------------------
     1. UTILITIES
     ----------------------------------------------------------------- */
  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector),
    );
  }

  /* -----------------------------------------------------------------
     2. THEME TOGGLE
     ----------------------------------------------------------------- */
  (function themeModule() {
    var root = document.documentElement;
    var toggleBtn = qs("#themeToggle");
    var STORAGE_KEY = "portfolio-theme";

    function applyTheme(theme) {
      if (theme === "light") {
        root.setAttribute("data-theme", "light");
        toggleBtn.setAttribute("aria-label", "Switch to dark theme");
        toggleBtn.setAttribute("aria-pressed", "true");
      } else {
        root.removeAttribute("data-theme");
        toggleBtn.setAttribute("aria-label", "Switch to light theme");
        toggleBtn.setAttribute("aria-pressed", "false");
      }
    }

    function getStoredTheme() {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        return null;
      }
    }

    function storeTheme(theme) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (err) {
        /* localStorage unavailable — theme just won't persist */
      }
    }

    var stored = getStoredTheme();
    var systemPrefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    var initialTheme = stored || (systemPrefersLight ? "light" : "dark");
    applyTheme(initialTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var isLight = root.getAttribute("data-theme") === "light";
        var next = isLight ? "dark" : "light";
        applyTheme(next);
        storeTheme(next);
      });
    }
  })();

  /* -----------------------------------------------------------------
     3. MOBILE NAVIGATION
     ----------------------------------------------------------------- */
  (function navModule() {
    var navToggle = qs("#navToggle");
    var navMenu = qs("#navMenu");
    var navOverlay = qs("#navOverlay");
    var navLinks = qsa("[data-nav-link]");

    if (!navToggle || !navMenu) return;

    function openMenu() {
      navMenu.classList.add("is-open");
      navOverlay.classList.add("is-visible");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
      navToggle.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      navMenu.classList.remove("is-open");
      navOverlay.classList.remove("is-visible");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      navToggle.classList.remove("is-active");
      document.body.style.overflow = "";
    }

    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navOverlay.addEventListener("click", closeMenu);

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
        closeMenu();
        navToggle.focus();
      }
    });
  })();

  /* -----------------------------------------------------------------
     4. HEADER SCROLL STATE
     ----------------------------------------------------------------- */
  (function headerScrollModule() {
    var header = qs("#siteHeader");
    if (!header) return;

    var lastState = false;

    function onScroll() {
      var shouldBeScrolled = window.scrollY > 24;
      if (shouldBeScrolled !== lastState) {
        header.classList.toggle("scrolled", shouldBeScrolled);
        lastState = shouldBeScrolled;
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  })();

  /* -----------------------------------------------------------------
     5. ACTIVE NAV LINK (SCROLL SPY)
     ----------------------------------------------------------------- */
  (function scrollSpyModule() {
    var sections = qsa("main section[id]");
    var navLinks = qsa("[data-nav-link]");

    if (!sections.length || !("IntersectionObserver" in window)) return;

    var linkMap = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      linkMap[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.remove("active");
            });
            if (linkMap[id]) {
              linkMap[id].classList.add("active");
            }
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  })();

  /* -----------------------------------------------------------------
     6. SCROLL REVEAL ANIMATIONS
     ----------------------------------------------------------------- */
  (function revealModule() {
    var targets = qsa("[data-reveal]");
    if (!targets.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("in-view");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  })();

  /* -----------------------------------------------------------------
     7. CUSTOM CURSOR (desktop, fine-pointer only)
     ----------------------------------------------------------------- */
  (function cursorModule() {
    var cursor = qs("#cursorDot");
    var canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!cursor || !canHover || prefersReducedMotion) return;

    var raf = null;
    var x = 0;
    var y = 0;

    function moveCursor() {
      cursor.style.transform =
        "translate(" + x + "px, " + y + "px) translate(-50%, -50%)";
      raf = null;
    }

    window.addEventListener(
      "mousemove",
      function (e) {
        x = e.clientX;
        y = e.clientY;

        var scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        var isOverScrollbar =
          scrollbarWidth > 0 && e.clientX >= window.innerWidth - scrollbarWidth;

        cursor.classList.toggle("is-hidden", isOverScrollbar);

        if (!isOverScrollbar) {
          cursor.classList.add("is-visible");

          if (!raf) {
            raf = requestAnimationFrame(moveCursor);
          }
        } else {
          cursor.classList.remove("is-visible");
        }
      },
      { passive: true },
    );

    document.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-visible");
    });

    var hoverTargets = qsa(
      "a, button, .skill-badge, .stat-card, .project-card",
    );

    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("is-hovering");
      });

      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("is-hovering");
      });
    });
  })();

  /* -----------------------------------------------------------------
     8. CONTACT FORM (mailto)
     ----------------------------------------------------------------- */
  (function contactFormModule() {
    var form = qs("#contactForm");
    var note = qs("#formNote");
    if (!form) return;

    var DESTINATION_EMAIL = "mohamedraghebomer@gmail.com";

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = qs("#cf-name", form).value.trim();
      var email = qs("#cf-email", form).value.trim();
      var message = qs("#cf-message", form).value.trim();

      var subject = encodeURIComponent("Portfolio inquiry from " + name);
      var body = encodeURIComponent(
        message + "\n\n— " + name + " (" + email + ")",
      );
      var mailtoUrl =
        "mailto:" + DESTINATION_EMAIL + "?subject=" + subject + "&body=" + body;

      window.location.href = mailtoUrl;

      if (note) {
        note.textContent = "Opening your email client…";
      }
    });
  })();

  /* -----------------------------------------------------------------
     9. FOOTER YEAR
     ----------------------------------------------------------------- */
  (function footerYearModule() {
    var yearEl = qs("#year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  })();

  /* -----------------------------------------------------------------
     10. SCROLL TO TOP
     ----------------------------------------------------------------- */
  (function scrollTopModule() {
    var btn = qs("#scrollTopBtn");
    if (!btn) return;

    var SHOW_AFTER = 480; /* px scrolled before the button appears */

    function updateVisibility() {
      btn.classList.toggle("is-visible", window.scrollY > SHOW_AFTER);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  })();
})();
