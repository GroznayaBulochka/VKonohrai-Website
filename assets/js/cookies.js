(() => {
  "use strict";
  const KEY = "siteConsent";
  const VERSION = 1;
  const LIFETIME = 180 * 24 * 60 * 60 * 1000;
  const preferenceKeys = ["siteLanguage", "selectedCvProfile"];
  const memory = new Map();
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const remove = key => { try { localStorage.removeItem(key); } catch { /* Storage may be unavailable. */ } };
  let consent = null;
  try {
    const saved = JSON.parse(read(KEY));
    if (saved?.version === VERSION && typeof saved.preferences === "boolean" && typeof saved.analytics === "boolean" && Number.isFinite(saved.time) && saved.time <= Date.now() && Date.now() - saved.time < LIFETIME) consent = saved;
  } catch { /* Invalid consent is treated as no consent. */ }
  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach(item => {
      const name = item.split("=")[0].trim();
      if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) return;
      const domains = location.hostname.split(".").map((_, i, parts) => parts.slice(i).join("."));
      const paths = ["/", ...location.pathname.split("/").slice(1).map((_, i, parts) => "/" + parts.slice(0, i + 1).join("/"))];
      paths.forEach(path => {
        document.cookie = `${name}=; Max-Age=0; Path=${path}`;
        domains.forEach(domain => { document.cookie = `${name}=; Max-Age=0; Path=${path}; Domain=${domain}`; });
      });
    });
  }
  if (!consent?.preferences) preferenceKeys.forEach(remove);
  if (!consent?.analytics) clearAnalyticsCookies();
  window.sitePrivacy = {
    getPreference(key) { return memory.get(key) ?? (consent?.preferences ? read(key) : null); },
    setPreference(key, value) {
      if (!preferenceKeys.includes(key)) return;
      memory.set(key, value);
      if (consent?.preferences) { try { localStorage.setItem(key, value); } catch { /* Keep in memory. */ } }
    },
    getConsent() { return consent ? { ...consent } : null; }
  };
  const copy = {
    pl: {
      title: "Cookies i prywatność", intro: "Strona działa bez cookies analitycznych. Możesz zgodzić się na zapamiętywanie ustawień i statystyki odwiedzin albo pozostać przy niezbędnym zapisie decyzji. Zgodę zmienisz w stopce.",
      accept: "Akceptuj wszystkie", reject: "Tylko niezbędne", settings: "Wybierz ustawienia", save: "Zapisz wybór", close: "Zamknij", footer: "Ustawienia cookies i prywatność",
      necessary: "Niezbędne — zawsze aktywne", necessaryText: "Decyzja o zgodzie (siteConsent, localStorage) jest zapisywana na 180 dni. Umożliwia respektowanie Twojego wyboru.",
      preferences: "Zapamiętywanie ustawień", preferencesText: "siteLanguage i selectedCvProfile w localStorage zapamiętują język oraz wariant CV do usunięcia danych przeglądarki lub wycofania zgody. Bez zgody ustawienia działają tylko w bieżącym widoku.",
      analytics: "Cookies analityczne", analyticsText: "Google Analytics 4 mierzy wizyty, pobrania CV i wybór profilu. Uruchamia się wyłącznie po zgodzie. Cookies _ga i _ga_* mają okres do 180 dni. Nie wysyłamy treści formularza, adresów e-mail ani parametrów adresu strony.",
      inactive: "Analityka nie jest obecnie skonfigurowana — żadne dane analityczne nie są wysyłane.", policy: "Informacje o prywatności", policyText: "Właściciel strony: Vladyslav Konohrai, contact@vkonohrai.me. Hosting: GitHub Pages; dostawca hostingu może przetwarzać dane techniczne połączenia. Po włączeniu analityki odbiorcą danych jest Google; dane mogą być przetwarzane poza EOG. Wycofanie zgody zatrzymuje dalsze pomiary i usuwa cookies analityczne z tej przeglądarki, ale nie usuwa wcześniej przesłanych danych. Formularz otwiera wiadomość w wybranej poczcie i nie zapisuje jej na stronie.", google: "Prywatność Google"
    },
    en: {
      title: "Cookies and privacy", intro: "The website works without analytics cookies. You can allow saved settings and visit statistics or keep only the essential consent record. Change your consent in the footer.",
      accept: "Accept all", reject: "Essential only", settings: "Choose settings", save: "Save choices", close: "Close", footer: "Cookie settings and privacy",
      necessary: "Essential — always active", necessaryText: "Your consent decision (siteConsent, localStorage) is saved for 180 days so the website can respect your choice.",
      preferences: "Remember settings", preferencesText: "siteLanguage and selectedCvProfile in localStorage remember the language and CV profile until you clear browser data or withdraw consent. Without consent, settings last for the current page view only.",
      analytics: "Analytics cookies", analyticsText: "Google Analytics 4 measures visits, CV downloads and profile choices, only after consent. _ga and _ga_* cookies last up to 180 days. Form contents, email addresses and URL parameters are not sent.",
      inactive: "Analytics is not configured yet — no analytics data is sent.", policy: "Privacy information", policyText: "Website owner: Vladyslav Konohrai, contact@vkonohrai.me. Hosting: GitHub Pages; the host may process technical connection data. When analytics is enabled, Google receives data and may process it outside the EEA. Withdrawing consent stops further measurement and removes analytics cookies from this browser, but does not delete data already sent. The contact form opens your chosen email service and does not store the message on this website.", google: "Google privacy"
    },
    ru: {
      title: "Cookies и конфиденциальность", intro: "Сайт работает без аналитических cookies. Можно разрешить сохранение настроек и статистику посещений или оставить только запись решения. Изменить согласие можно внизу страницы.",
      accept: "Принять все", reject: "Только необходимые", settings: "Выбрать настройки", save: "Сохранить выбор", close: "Закрыть", footer: "Настройки cookies и конфиденциальность",
      necessary: "Необходимые — всегда активны", necessaryText: "Решение о согласии (siteConsent, localStorage) сохраняется на 180 дней, чтобы сайт учитывал ваш выбор.",
      preferences: "Сохранение настроек", preferencesText: "siteLanguage и selectedCvProfile в localStorage сохраняют язык и вариант резюме до удаления данных браузера или отзыва согласия. Без согласия настройки действуют только в текущем просмотре страницы.",
      analytics: "Аналитические cookies", analyticsText: "Google Analytics 4 измеряет посещения, скачивания резюме и выбор профиля только после согласия. Cookies _ga и _ga_* хранятся до 180 дней. Содержимое формы, адреса электронной почты и параметры URL не отправляются.",
      inactive: "Аналитика пока не настроена — аналитические данные не отправляются.", policy: "Информация о конфиденциальности", policyText: "Владелец сайта: Vladyslav Konohrai, contact@vkonohrai.me. Хостинг: GitHub Pages; провайдер может обрабатывать технические данные соединения. При включении аналитики Google получает данные и может обрабатывать их за пределами ЕЭЗ. Отзыв согласия останавливает измерения и удаляет аналитические cookies из этого браузера, но не удаляет уже отправленные данные. Форма открывает выбранную почту и не сохраняет сообщение на сайте.", google: "Конфиденциальность Google"
    }
  };
  const id = window.siteAnalyticsConfig?.measurementId || "";
  const configured = /^G-[A-Z0-9]+$/.test(id);
  let started = false;
  function startAnalytics() {
    if (!configured || !consent?.analytics || started) return;
    started = true;
    window[`ga-disable-${id}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("js", new Date());
    window.gtag("config", id, { send_page_view: false, page_location: location.origin + location.pathname, page_referrer: "", page_title: "Vladyslav Konohrai — CV", cookie_expires: LIFETIME / 1000, cookie_update: false, allow_google_signals: false, allow_ad_personalization_signals: false });
    window.gtag("event", "page_view", { page_location: location.origin + location.pathname, page_title: "Vladyslav Konohrai — CV", page_referrer: "" });
    const script = document.createElement("script");
    script.id = "site-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.append(script);
  }
  const track = (event, data) => {
    if (configured && consent?.analytics && started) window.gtag("event", event, { ...data, page_location: location.origin + location.pathname, page_referrer: "" });
  };
  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.createElement("section");
    banner.className = "cookie-banner";
    banner.setAttribute("aria-labelledby", "cookie-banner-title");
    banner.innerHTML = '<h2 id="cookie-banner-title" data-cookie-text="title"></h2><p data-cookie-text="intro"></p><div class="cookie-actions"><button data-cookie-action="reject" data-cookie-text="reject"></button><button data-cookie-action="settings" data-cookie-text="settings"></button><button data-cookie-action="accept" data-cookie-text="accept"></button></div>';
    const dialog = document.createElement("dialog");
    dialog.className = "cookie-dialog";
    dialog.setAttribute("aria-labelledby", "cookie-dialog-title");
    dialog.innerHTML = '<button class="cookie-close" type="button" data-cookie-text="close"></button><h2 id="cookie-dialog-title" data-cookie-text="title"></h2><p data-cookie-text="intro"></p><label><input type="checkbox" checked disabled><span data-cookie-text="necessary"></span></label><p data-cookie-text="necessaryText"></p><label><input type="checkbox" name="preferences"><span data-cookie-text="preferences"></span></label><p data-cookie-text="preferencesText"></p><label><input type="checkbox" name="analytics"><span data-cookie-text="analytics"></span></label><p data-cookie-text="analyticsText"></p><p data-cookie-text="inactive"></p><div class="cookie-actions"><button data-cookie-action="reject" data-cookie-text="reject"></button><button data-cookie-action="save" data-cookie-text="save"></button><button data-cookie-action="accept" data-cookie-text="accept"></button></div><div class="cookie-policy"><h3 data-cookie-text="policy"></h3><p data-cookie-text="policyText"></p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" data-cookie-text="google"></a></div>';
    document.body.append(banner, dialog);
    const update = () => {
      const t = copy[document.documentElement.lang] || copy.pl;
      document.querySelectorAll("[data-cookie-text]").forEach(el => { el.textContent = t[el.dataset.cookieText]; });
      document.querySelectorAll("[data-cookie-settings]").forEach(el => { el.textContent = t.footer; });
      dialog.querySelector('[data-cookie-text="inactive"]').hidden = configured;
    };
    const open = () => {
      dialog.querySelector('[name="preferences"]').checked = !!consent?.preferences;
      dialog.querySelector('[name="analytics"]').checked = !!consent?.analytics;
      dialog.showModal();
    };
    const save = (preferences, analytics) => {
      const previouslyRunning = started;
      consent = { version: VERSION, time: Date.now(), preferences, analytics };
      try { localStorage.setItem(KEY, JSON.stringify(consent)); } catch { /* Decision lasts for this view. */ }
      preferenceKeys.forEach(key => {
        if (!preferences) remove(key);
        else if (memory.has(key)) { try { localStorage.setItem(key, memory.get(key)); } catch { /* Keep in memory. */ } }
      });
      banner.hidden = true;
      if (dialog.open) dialog.close();
      if (!analytics) {
        window[`ga-disable-${id}`] = true;
        clearAnalyticsCookies();
        // Unload Google's code completely after withdrawal; no denied-consent pings.
        if (previouslyRunning) location.reload();
      } else startAnalytics();
      document.dispatchEvent(new CustomEvent("consentchange", { detail: { ...consent } }));
    };
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-cookie-action], [data-cookie-settings]");
      if (button) {
        const action = button.dataset.cookieAction;
        if (button.hasAttribute("data-cookie-settings") || action === "settings") open();
        else if (action === "reject") save(false, false);
        else if (action === "accept") save(true, true);
        else if (action === "save") save(dialog.querySelector('[name="preferences"]').checked, dialog.querySelector('[name="analytics"]').checked);
      }
      if (event.target.closest("[data-cv-link]")) track("cv_download", { language: document.documentElement.lang });
      const role = event.target.closest("[data-role-choice]")?.dataset.roleChoice;
      if (["all", "production", "gastro", "office"].includes(role)) track("profile_select", { profile: role });
    });
    dialog.querySelector(".cookie-close").addEventListener("click", () => dialog.close());
    document.addEventListener("languagechange", update);
    window.addEventListener("storage", event => { if (event.key === KEY || event.key === null) location.reload(); });
    update();
    banner.hidden = !!consent;
    startAnalytics();
  });
})();
