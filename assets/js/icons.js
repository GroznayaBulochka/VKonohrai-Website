const iconPaths = {
  "arrow-left": '<path d="M19 12H5"></path><path d="m11 6-6 6 6 6"></path>',
  "arrow-right": '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
  "arrow-up": '<path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path>',
  award: '<circle cx="12" cy="8" r="5"></circle><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5"></path>',
  brain: '<path d="M9 4.5a3 3 0 0 0-3 3v1.2a3.2 3.2 0 0 0 0 6.2V16a3.5 3.5 0 0 0 6 2.45"></path><path d="M15 4.5a3 3 0 0 1 3 3v1.2a3.2 3.2 0 0 1 0 6.2V16a3.5 3.5 0 0 1-6 2.45"></path><path d="M12 4v16"></path><path d="M8 9h2"></path><path d="M14 9h2"></path><path d="M8 14h2"></path><path d="M14 14h2"></path>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M3 12h18"></path><path d="M10 12v2h4v-2"></path>',
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M3 21h18"></path><path d="M8 7h2"></path><path d="M14 7h2"></path><path d="M8 11h2"></path><path d="M14 11h2"></path><path d="M9 21v-5h4v5"></path>',
  chart: '<path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 15 3-3 3 2 5-7"></path><path d="M18 7h2v2"></path>',
  clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
  "clipboard-check": '<rect x="5" y="4" width="14" height="17" rx="2"></rect><path d="M9 4a3 3 0 0 1 6 0"></path><path d="m9 13 2 2 4-5"></path>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M4 16V6a2 2 0 0 1 2-2h10"></path>',
  download: '<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>',
  "external-link": '<path d="M14 4h6v6"></path><path d="m10 14 10-10"></path><path d="M20 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"></path>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16"></path><path d="M3 21h18"></path><path d="M7 17h2"></path><path d="M12 17h2"></path><path d="M17 17h2"></path>',
  "file-check": '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path><path d="m9 15 2 2 4-5"></path>',
  globe: '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path>',
  "graduation-cap": '<path d="m3 8 9-5 9 5-9 5-9-5z"></path><path d="M7 11v5c3 2 7 2 10 0v-5"></path><path d="M21 8v6"></path>',
  hammer: '<path d="M14 5 5 14"></path><path d="M15 4 20 9"></path><path d="m12 7 5 5"></path><path d="M4 15l5 5"></path><path d="m3 21 6-6"></path>',
  "hard-hat": '<path d="M4 18h16"></path><path d="M5 18v-3a7 7 0 0 1 14 0v3"></path><path d="M9 15V7"></path><path d="M15 15V7"></path><path d="M8 18v2h8v-2"></path>',
  info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v5"></path><path d="M12 8h.01"></path>',
  "heart-handshake": '<path d="M12 21s-7-4.6-9-9.2C1.7 8.9 3.2 6 6.2 6c1.7 0 3 1 3.8 2.1C10.8 7 12.1 6 13.8 6c3 0 4.5 2.9 3.2 5.8C15 16.4 12 21 12 21z"></path><path d="M8 13h3l2 2 3-3"></path>',
  linkedin: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M12 13a2 2 0 0 1 4 0v3"></path>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
  menu: '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
  "map-pin": '<path d="M12 21s7-5.4 7-12A7 7 0 0 0 5 9c0 6.6 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle>',
  message: '<path d="M4 5h16v11H8l-4 4V5z"></path><path d="M8 9h8"></path><path d="M8 13h5"></path>',
  navigation: '<path d="m12 3 8 18-8-4-8 4 8-18z"></path><path d="M12 3v14"></path>',
  paintbrush: '<path d="M14 4 20 10"></path><path d="m4 20 6.5-6.5"></path><path d="M12 6 18 12l-5 5-6-6 5-5z"></path><path d="M6 18c-2 0-3 1-3 3 2 0 3-1 3-3z"></path>',
  pause: '<path d="M8 5v14"></path><path d="M16 5v14"></path>',
  phone: '<path d="M22 16.5v3a2 2 0 0 1-2.2 2A19 19 0 0 1 2.5 4.2 2 2 0 0 1 4.5 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L8 9.8a13 13 0 0 0 6.2 6.2l1.3-1.4a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2z"></path>',
  play: '<path d="M8 5v14l11-7-11-7z"></path>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-5"></path>',
  sparkles: '<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"></path><path d="M5 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"></path><path d="M19 14l.8 1.7L21 16.5l-1.2.8L19 19l-.8-1.7-1.2-.8 1.2-.8L19 14z"></path>',
  sprout: '<path d="M12 21V10"></path><path d="M12 13c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7z"></path><path d="M12 15c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7z"></path>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"></path>',
  store: '<path d="M4 10h16l-1-5H5l-1 5z"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path><path d="M4 10c0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0"></path>',
  target: '<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="4"></circle><path d="M15 9l4-4"></path><path d="M19 5h-3V2"></path>',
  utensils: '<path d="M7 3v8"></path><path d="M4 3v4a3 3 0 0 0 6 0V3"></path><path d="M7 11v10"></path><path d="M16 3v18"></path><path d="M16 3c3 2 4 5 3 8h-3"></path>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9.5" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.9"></path><path d="M16 3.2a4 4 0 0 1 0 7.6"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
};

class VkIcon extends HTMLElement {
  static observedAttributes = ["name"];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name");
    const paths = iconPaths[name];

    this.setAttribute("aria-hidden", "true");

    if (!paths) {
      this.innerHTML = "";
      return;
    }

    this.innerHTML = `<svg viewBox="0 0 24 24" focusable="false">${paths}</svg>`;
  }
}

customElements.define("vk-icon", VkIcon);
