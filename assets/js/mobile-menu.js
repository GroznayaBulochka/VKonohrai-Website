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

      if (mobileMenu.matches && target) {
        event.preventDefault();
      }

      setMenuState(false);

      if (mobileMenu.matches && target) {
        window.setTimeout(() => {
          const html = document.documentElement;
          const previousScrollBehavior = html.style.scrollBehavior;
          const navHeight = nav.getBoundingClientRect().height;
          const targetTop = target.getBoundingClientRect().top + window.scrollY;

          html.style.scrollBehavior = "auto";
          window.scrollTo(0, Math.max(0, targetTop - navHeight - 14));
          window.history.pushState(null, "", link.hash);
          html.style.scrollBehavior = previousScrollBehavior;
        }, 340);
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
