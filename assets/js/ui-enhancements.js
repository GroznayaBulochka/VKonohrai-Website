document.addEventListener("DOMContentLoaded", () => {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  const nav = document.querySelector("nav");
  let scrollFrame = null;

  const experienceDisclosure = document.querySelector(".experience-disclosure");
  const syncExperienceDisclosure = () => {
    if (!experienceDisclosure) {
      return;
    }

    const label = experienceDisclosure.open
      ? experienceDisclosure.dataset.collapseLabel
      : experienceDisclosure.dataset.expandLabel;
    const toggleLabel = experienceDisclosure.querySelector("[data-experience-toggle]");

    if (toggleLabel && label) {
      toggleLabel.textContent = label;
    }
  };

  experienceDisclosure?.addEventListener("toggle", syncExperienceDisclosure);
  document.addEventListener("experiencechange", syncExperienceDisclosure);
  document.querySelectorAll("a[href='#experience']").forEach((link) => {
    link.addEventListener("click", () => {
      if (experienceDisclosure) {
        experienceDisclosure.open = true;
      }
    });
  });

  if (window.location.hash === "#experience" && experienceDisclosure) {
    experienceDisclosure.open = true;
  }

  const careerTimeline = document.querySelector("[data-career-timeline]");

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.setProperty("--scroll-progress", String(Math.min(ratio, 1)));
    nav?.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  const revealTargets = [
    ".hero > div:first-child",
    ".role-summary",
    ".photo-wrap",
    ".side-info .info-box",
    ".stat",
    ".journey",
    ".strength",
    ".service-card",
    ".exp-card",
    ".bottom-grid .card",
    ".diploma-section",
    ".reference-section",
    ".reference-card",
    ".contact-card",
    ".quote-card"
  ];

  const elements = revealTargets.flatMap((selector) => [...document.querySelectorAll(selector)]);
  const uniqueElements = [...new Set(elements)];

  uniqueElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 20, 100)}ms`);
  });

  const bars = [...document.querySelectorAll(".bar")];
  const statNumbers = [...document.querySelectorAll(".stat strong")].map((element) => {
    const match = element.textContent.trim().match(/^(\d+)(.*)$/);

    return {
      element,
      value: match ? Number(match[1]) : 0,
      suffix: match ? match[2] : "",
      animated: false
    };
  });

  const animateStat = (stat) => {
    if (stat.animated || !stat.value) {
      return;
    }

    stat.animated = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stat.element.textContent = `${stat.value}${stat.suffix}`;
      return;
    }

    const duration = 820;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      stat.element.textContent = `${Math.round(stat.value * eased)}${stat.suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  const toast = document.querySelector(".copy-toast");
  let toastTimer;

  const toastText = () => {
    const lang = document.documentElement.lang;

    if (lang === "en") {
      return "Copied to clipboard";
    }

    if (lang === "ru") {
      return "Скопировано";
    }

    return "Skopiowano";
  };

  const showToast = () => {
    if (!toast) {
      return;
    }

    toast.textContent = toastText();
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1700);
  };

  const fallbackCopy = (value) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy");

      if (!value) {
        return;
      }

      try {
        await navigator.clipboard.writeText(value);
      } catch {
        fallbackCopy(value);
      }

      showToast();
    });
  });

  if (!("IntersectionObserver" in window)) {
    uniqueElements.forEach((element) => element.classList.add("is-visible"));
    bars.forEach((bar) => bar.classList.add("is-visible"));
    statNumbers.forEach(animateStat);
    careerTimeline?.classList.add("is-drawn");
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: .16,
    rootMargin: "0px 0px -8% 0px"
  });

  uniqueElements.forEach((element) => revealObserver.observe(element));

  if (careerTimeline) {
    const careerObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0]?.isIntersecting) {
        return;
      }

      careerTimeline.classList.add("is-drawn");
      observer.disconnect();
    }, { threshold: .18 });

    careerObserver.observe(careerTimeline);
  }

  const barObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: .45
  });

  bars.forEach((bar) => barObserver.observe(bar));

  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const stat = statNumbers.find((item) => item.element === entry.target);
      if (stat) {
        animateStat(stat);
      }

      observer.unobserve(entry.target);
    });
  }, {
    threshold: .65
  });

  statNumbers.forEach(({ element }) => statObserver.observe(element));

  const menuLinks = [...document.querySelectorAll(".menu a[href^='#']")];
  const sections = menuLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (section) => {
    menuLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${section.id}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveLink = () => {
    const anchorLine = (nav?.getBoundingClientRect().bottom || 0) + 24;
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= anchorLine) {
        activeSection = section;
      }
    });

    const reachedPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (reachedPageEnd) {
      activeSection = sections.at(-1);
    }

    if (activeSection) {
      setActiveLink(activeSection);
    }

  };

  const scheduleViewportUpdate = () => {
    if (scrollFrame === null) {
      scrollFrame = requestAnimationFrame(() => {
        updateScrollState();
        updateActiveLink();
        scrollFrame = null;
      });
    }
  };

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        setActiveLink(target);
      }
    });
  });

  updateScrollState();
  updateActiveLink();
  window.addEventListener("scroll", scheduleViewportUpdate, { passive: true });
  window.addEventListener("resize", scheduleViewportUpdate);
});
