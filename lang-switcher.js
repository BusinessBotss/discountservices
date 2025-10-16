(function () {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'en', 'de', 'fr', 'it'];
  const DEFAULT_LANG = 'es';

  const textBundles = {
    homeSubtitle: {
      es: 'Lista Especial de Servicios 2025',
      en: 'Special Service List 2025',
      de: 'Sonderdienstliste 2025',
      fr: 'Liste spéciale de services 2025',
      it: 'Elenco speciale dei servizi 2025'
    },
    serviceTagline: {
      es: 'Servicios profesionales automatizados',
      en: 'Automated professional services',
      de: 'Automatisierte professionelle Dienstleistungen',
      fr: 'Services professionnels automatisés',
      it: 'Servizi professionali automatizzati'
    },
    footer: {
      es: 'Business Bots Solutions © 2025 — Servicios profesionales sin comisión por venta',
      en: 'Business Bots Solutions © 2025 — Professional services with no sales commission',
      de: 'Business Bots Solutions © 2025 — Professionelle Dienstleistungen ohne Verkaufsprovision',
      fr: 'Business Bots Solutions © 2025 — Services professionnels sans commission de vente',
      it: 'Business Bots Solutions © 2025 — Servizi professionali senza commissioni di vendita'
    }
  };

  function normaliseLanguage(lang) {
    if (typeof lang !== 'string') {
      return DEFAULT_LANG;
    }
    const code = lang.trim().toLowerCase();
    return SUPPORTED_LANGS.includes(code) ? code : DEFAULT_LANG;
  }

  function getInitialLanguage() {
    try {
      const stored = localStorage.getItem('preferredLanguage');
      if (stored) {
        return normaliseLanguage(stored);
      }
    } catch (error) {
      console.warn('Unable to access stored language preference', error);
    }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const locale = navigator.language.toLowerCase();
      const match = SUPPORTED_LANGS.find(code => locale.startsWith(code));
      if (match) {
        return match;
      }
    }

    const docLang = document.documentElement.getAttribute('lang');
    if (docLang) {
      return normaliseLanguage(docLang);
    }

    return DEFAULT_LANG;
  }

  function updateButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(button => {
      const btnLang = normaliseLanguage(button.dataset.lang || button.textContent);
      button.dataset.lang = btnLang;
      button.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  function updateSections(lang) {
    const sections = Array.from(document.querySelectorAll('.services-section'));
    if (!sections.length) {
      return;
    }

    let targetLang = lang;
    const hasTarget = sections.some(section => section.id === lang);
    if (!hasTarget) {
      const fallback = sections[0].id;
      targetLang = fallback ? normaliseLanguage(fallback) : DEFAULT_LANG;
    }

    sections.forEach(section => {
      section.classList.toggle('hidden', section.id !== targetLang);
    });

    return targetLang;
  }

  function updateStaticText(lang) {
    document.querySelectorAll('[data-i18n-key]').forEach(node => {
      const key = node.getAttribute('data-i18n-key');
      const bundle = textBundles[key];
      if (bundle && bundle[lang]) {
        node.textContent = bundle[lang];
      }
    });
  }

  function persistLanguage(lang) {
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (error) {
      console.warn('Unable to persist language preference', error);
    }
  }

  function applyLanguage(lang) {
    const requestedLang = normaliseLanguage(lang);
    const visibleLang = updateSections(requestedLang) || requestedLang;

    updateButtons(visibleLang);
    updateStaticText(visibleLang);

    document.documentElement.setAttribute('lang', visibleLang);
    document.documentElement.setAttribute('xml:lang', visibleLang);

    persistLanguage(visibleLang);
  }

  function handleClick(event) {
    const target = event.currentTarget;
    const lang = target.dataset.lang || target.textContent;
    applyLanguage(lang);
  }

  function prepareButtons() {
    document.querySelectorAll('.lang-btn').forEach(button => {
      if (!button.dataset.lang) {
        button.dataset.lang = normaliseLanguage(button.textContent);
      }
      button.removeEventListener('click', handleClick);
      button.addEventListener('click', handleClick);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    prepareButtons();
    const initial = getInitialLanguage();
    applyLanguage(initial);
  });

  window.switchLanguage = applyLanguage;
})();
