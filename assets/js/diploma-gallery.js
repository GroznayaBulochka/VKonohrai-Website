(() => {
  let currentDiploma = 0;
  let activeGroup = "featured";
  let thumbnailObserver;

  const getDiplomas = () => window.activeDiplomas || window.diplomas || [];

  const getElements = () => ({
    image: document.getElementById("diplomaImage"),
    title: document.getElementById("diplomaTitle"),
    description: document.getElementById("diplomaDesc"),
    pdf: document.getElementById("diplomaPdf"),
    count: document.getElementById("diplomaCount"),
    source: document.querySelector("[data-diploma-source]"),
    featuredBadge: document.querySelector("[data-diploma-featured]"),
    prevButton: document.querySelector("[data-diploma-prev]"),
    nextButton: document.querySelector("[data-diploma-next]")
  });

  const getGroupIndexes = (group = activeGroup) => getDiplomas()
    .map((diploma, index) => ({ diploma, index }))
    .filter(({ diploma }) => (group === "featured") === Boolean(diploma.featured))
    .map(({ index }) => index);

  const normalizeGroup = (preferred = activeGroup) => {
    if (getGroupIndexes(preferred).length) {
      return preferred;
    }

    return preferred === "featured" ? "other" : "featured";
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  };

  const formatCount = (index) => {
    const indexes = getGroupIndexes();
    const position = Math.max(0, indexes.indexOf(index));
    return `${String(position + 1).padStart(2, "0")} / ${String(indexes.length).padStart(2, "0")}`;
  };

  const syncGroupUi = () => {
    const counts = {
      featured: getGroupIndexes("featured").length,
      other: getGroupIndexes("other").length
    };

    document.querySelector("[data-credential-tabs]")?.classList.toggle(
      "is-single",
      Object.values(counts).filter(Boolean).length === 1
    );

    document.querySelectorAll("[data-credential-tab]").forEach((tab) => {
      const group = tab.dataset.credentialTab;
      const isActive = group === activeGroup;
      tab.hidden = counts[group] === 0;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.tabIndex = isActive ? 0 : -1;
    });

    document.querySelectorAll("[data-certificate-group]").forEach((section) => {
      const group = section.dataset.certificateGroup;
      section.hidden = counts[group] === 0 || group !== activeGroup;
    });
  };

  const loadThumbnail = (image) => {
    const source = image.dataset.src;
    if (!source) {
      return;
    }

    image.src = source;
    image.removeAttribute("data-src");
    thumbnailObserver?.unobserve(image);
  };

  const observeThumbnail = (image) => {
    if (!("IntersectionObserver" in window)) {
      loadThumbnail(image);
      return;
    }

    if (!thumbnailObserver) {
      thumbnailObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadThumbnail(entry.target);
          }
        });
      }, { rootMargin: "240px 0px" });
    }

    thumbnailObserver.observe(image);
  };

  const createCredentialButton = (diploma, index, labels) => {
    const localized = window.getLocalizedDiploma ? window.getLocalizedDiploma(diploma) : diploma;
    const button = document.createElement("button");
    const preview = document.createElement("img");
    const content = document.createElement("span");
    const title = document.createElement("strong");
    const meta = document.createElement("small");

    button.type = "button";
    button.className = "credential-item";
    button.dataset.diplomaGroupIndex = String(index);
    button.setAttribute("aria-label", `${labels.openLabel}: ${localized.title}`);

    preview.dataset.src = diploma.img;
    preview.alt = "";
    preview.loading = "lazy";
    preview.decoding = "async";
    preview.width = 68;
    preview.height = 48;

    title.textContent = localized.title;
    meta.textContent = [localized.issuer, localized.detail].filter(Boolean).join(" · ");
    content.append(title, meta);
    button.append(preview, content);
    button.addEventListener("click", () => showDiploma(index));
    observeThumbnail(preview);

    return button;
  };

  const renderCertificateGroups = () => {
    const diplomas = getDiplomas();
    thumbnailObserver?.disconnect();
    thumbnailObserver = undefined;
    const labels = window.getDiplomaGroupLabels?.() || {
      groupsLabel: "Kategorie certyfikatów",
      featuredTab: "Wybrane",
      otherTab: "Pozostałe",
      featuredKicker: "Kursy i uprawnienia",
      featuredTitle: "Wybrane certyfikaty",
      featuredDescription: "Dokumenty wydane lub potwierdzone przez rozpoznawalne instytucje.",
      otherKicker: "Pozostałe kwalifikacje",
      otherTitle: "Pozostałe certyfikaty",
      otherDescription: "Kursy i szkolenia uzupełniające kompetencje.",
      featuredBadge: "Wybrany",
      openLabel: "Pokaż dokument",
      issuerLabel: "Wystawca"
    };

    setText("[data-featured-tab-label]", labels.featuredTab);
    setText("[data-other-tab-label]", labels.otherTab);
    setText("[data-featured-kicker]", labels.featuredKicker);
    setText("[data-featured-title]", labels.featuredTitle);
    setText("[data-featured-description]", labels.featuredDescription);
    setText("[data-other-kicker]", labels.otherKicker);
    setText("[data-other-title]", labels.otherTitle);
    setText("[data-other-description]", labels.otherDescription);
    document.querySelector("[data-credential-tabs]")?.setAttribute("aria-label", labels.groupsLabel);
    document.querySelector(".credential-groups")?.setAttribute("aria-label", labels.groupsLabel);

    const groups = [
      { name: "featured", featured: true, container: document.querySelector("[data-featured-certificates]"), count: document.querySelector("[data-featured-count]") },
      { name: "other", featured: false, container: document.querySelector("[data-other-certificates]"), count: document.querySelector("[data-other-count]") }
    ];

    groups.forEach((group) => {
      const matching = diplomas
        .map((diploma, index) => ({ diploma, index }))
        .filter(({ diploma }) => Boolean(diploma.featured) === group.featured);

      if (group.count) {
        group.count.textContent = String(matching.length).padStart(2, "0");
      }
      if (group.container) {
        group.container.replaceChildren(...matching.map(({ diploma, index }) => createCredentialButton(diploma, index, labels)));
      }
    });

    activeGroup = normalizeGroup(activeGroup);
    syncGroupUi();
  };

  const showDiploma = (index) => {
    const diplomas = getDiplomas();
    if (!diplomas.length) {
      return;
    }

    const requestedIndex = Number(index);
    const safeIndex = Number.isFinite(requestedIndex) ? requestedIndex : 0;
    currentDiploma = ((safeIndex % diplomas.length) + diplomas.length) % diplomas.length;

    const sourceDiploma = diplomas[currentDiploma];
    activeGroup = sourceDiploma.featured ? "featured" : "other";
    syncGroupUi();

    const diploma = window.getLocalizedDiploma
      ? window.getLocalizedDiploma(sourceDiploma)
      : sourceDiploma;
    const labels = window.getDiplomaGroupLabels?.();
    const elements = getElements();

    if (elements.image) {
      elements.image.classList.remove("is-loaded");
      elements.image.alt = diploma.title;
      elements.image.onload = () => elements.image.classList.add("is-loaded");
      elements.image.src = diploma.img;
      if (elements.image.complete) {
        requestAnimationFrame(() => elements.image.classList.add("is-loaded"));
      }
    }

    if (elements.title) {
      elements.title.textContent = diploma.title;
    }
    if (elements.description) {
      elements.description.textContent = diploma.desc;
    }
    if (elements.pdf) {
      elements.pdf.href = diploma.pdf;
    }
    if (elements.count) {
      elements.count.textContent = formatCount(currentDiploma);
    }
    if (elements.featuredBadge) {
      elements.featuredBadge.hidden = !diploma.featured;
      elements.featuredBadge.textContent = labels?.featuredBadge || "Wybrany";
    }
    if (elements.source) {
      const sourceText = [diploma.issuer, diploma.detail].filter(Boolean).join(" · ");
      elements.source.hidden = !sourceText;
      elements.source.textContent = sourceText
        ? `${labels?.issuerLabel || "Wystawca"}: ${sourceText}`
        : "";
    }

    document.querySelectorAll("[data-diploma-group-index]").forEach((button) => {
      const isActive = Number(button.dataset.diplomaGroupIndex) === currentDiploma;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const selectGroup = (group) => {
    activeGroup = normalizeGroup(group);
    const [firstIndex] = getGroupIndexes();
    if (firstIndex !== undefined) {
      showDiploma(firstIndex);
    }
  };

  const moveDiploma = (direction) => {
    const indexes = getGroupIndexes();
    if (!indexes.length) {
      return;
    }

    const position = Math.max(0, indexes.indexOf(currentDiploma));
    const nextPosition = (position + direction + indexes.length) % indexes.length;
    showDiploma(indexes[nextPosition]);
  };

  const initializeGallery = () => {
    renderCertificateGroups();
    activeGroup = normalizeGroup("featured");
    const [firstIndex] = getGroupIndexes();
    if (firstIndex !== undefined) {
      showDiploma(firstIndex);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const elements = getElements();

    elements.prevButton?.addEventListener("click", () => moveDiploma(-1));
    elements.nextButton?.addEventListener("click", () => moveDiploma(1));

    document.querySelectorAll("[data-credential-tab]").forEach((tab) => {
      tab.addEventListener("click", () => selectGroup(tab.dataset.credentialTab));
      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }

        event.preventDefault();
        const targetGroup = activeGroup === "featured" ? "other" : "featured";
        selectGroup(targetGroup);
        document.querySelector(`[data-credential-tab="${activeGroup}"]`)?.focus();
      });
    });

    initializeGallery();
  });

  document.addEventListener("languagechange", () => {
    renderCertificateGroups();
    showDiploma(currentDiploma);
  });

  document.addEventListener("diplomaschange", initializeGallery);
})();
