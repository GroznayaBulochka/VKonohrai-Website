# Vladyslav Konohrai – CV and portfolio

Personal website presenting the experience, education, skills and certificates of Vladyslav Konohrai, a psychology student and occupational safety specialist.

**Live website:** [vkonohrai.me](https://vkonohrai.me/)

The site is a static GitHub Pages project. Its publishing entry point is [`index.html`](index.html) in the root of the `main` branch.

## Cookies and analytics

The consent panel supports Polish, English and Russian, independent preference and analytics consent, rejection, and withdrawal through the footer. Consent is stored in `siteConsent` in localStorage for 180 days. Language and CV profile preferences are stored only with preference consent; otherwise they stay in page memory. Older preferences without consent are removed.

To activate Google Analytics 4, set your own `measurementId` in `assets/js/analytics-config.js`. An empty ID sends no analytics data. In the GA4 web stream, **turn off Enhanced measurement**: this integration sends only its own `page_view`, `cv_download` and `profile_select` events, using URLs without query strings or fragments and without form contents. Set data retention and access in your GA4 property as appropriate for your use.

The Google tag is loaded only after analytics consent (basic consent mode). Advertising consent stays denied. Withdrawal disables collection, removes first-party GA cookies and reloads the page to unload the Google script. Consent changes in other tabs reload the page too. No statistics can be collected until a real GA4 property is configured.
