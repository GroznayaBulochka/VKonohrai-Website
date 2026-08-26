document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");

  if (!nav || !toggle || !menu) {
    return;
  }

  const links = [...menu.querySelectorAll("a")];
  const mobileMenu = window.matchMedia("(max-width: 768px)");

  const syncLinkFocus = () => {
    const hideLinks = mobileMenu.matches && !nav.classList.contains("menu-open");
    links.forEach((link) => {
      if (hideLinks) {
        link.tabIndex = -1;
      } else {
        link.removeAttribute("tabindex");
      }
    });
  };

  const setMenuState = (isOpen) => {
    nav.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    syncLinkFocus();
  };

  toggle.addEventListener("click", () => {
    setMenuState(!nav.classList.contains("menu-open"));
  });

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.hash ? document.querySelector(link.hash) : null;

      if (target) {
        event.preventDefault();
      }

      setMenuState(false);

      if (target) {
        const menuCloseDelay = mobileMenu.matches ? 340 : 0;

        window.setTimeout(() => {
          const html = document.documentElement;
          const previousScrollBehavior = html.style.scrollBehavior;
          const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const useSmoothScroll = !mobileMenu.matches && !prefersReducedMotion;
          const alignTarget = (behavior = "auto") => {
            const desiredTop = nav.getBoundingClientRect().bottom + 20;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - desiredTop;
            window.scrollTo({ top: Math.max(0, targetTop), behavior });
          };

          if (useSmoothScroll) {
            alignTarget("smooth");
          } else {
            html.style.scrollBehavior = "auto";
            alignTarget();
          }

          const settleDelay = useSmoothScroll ? 520 : 0;
          window.setTimeout(() => {
            html.style.scrollBehavior = "auto";
            alignTarget();
            requestAnimationFrame(() => requestAnimationFrame(() => alignTarget()));
            window.setTimeout(() => {
              alignTarget();
              html.style.scrollBehavior = previousScrollBehavior;
            }, 180);
          }, settleDelay);

          window.history.pushState(null, "", link.hash);
        }, menuCloseDelay);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!mobileMenu.matches) {
      setMenuState(false);
    } else {
      syncLinkFocus();
    }
  });

  syncLinkFocus();
});
