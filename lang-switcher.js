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
  },

};
const supportedLanguages = [
  { code: "es", label: "ES", ariaLabel: "Cambiar idioma a español" },
  { code: "en", label: "EN", ariaLabel: "Switch language to English" },
  { code: "de", label: "DE", ariaLabel: "Sprache auf Deutsch umstellen" },
  { code: "fr", label: "FR", ariaLabel: "Basculer la langue en français" },
  { code: "it", label: "IT", ariaLabel: "Passa la lingua in italiano" },
];
const languageAnnouncements = {
  es: "Idioma cambiado a español.",
  en: "Language switched to English.",
  de: "Sprache auf Deutsch gestellt.",
  fr: "Langue changée en français.",
  it: "Lingua impostata in italiano."
};

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
function changeLanguage(lang) {
  const service = currentService || document.body?.dataset?.service || "";
  if (!translations[service] || !translations[service][lang]) {
    return;
  }
  applyLanguage(lang);
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
function onLanguageButtonClick(event) {
  const button = event.currentTarget;
  if (!button || !button.dataset) {
    return;
  }
  const { lang } = button.dataset;
  if (lang) {
    changeLanguage(lang);
  }
}

function ensureLanguageSwitcher() {
  let switcher = document.querySelector(".language-switcher");
  if (!switcher) {
    const header = document.querySelector(".page-header");
    if (!header) {
      return null;
    }
    switcher = document.createElement("div");
    switcher.className = "language-switcher";
    header.insertBefore(switcher, header.firstElementChild || null);
  }

  let nav = switcher.querySelector("[data-lang-nav]");
  if (!nav) {
    nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Language selector");
    nav.dataset.langNav = "";
    if (switcher.firstElementChild) {
      switcher.insertBefore(nav, switcher.firstElementChild);
    } else {
      switcher.appendChild(nav);
    }
  }

  const allowedCodes = new Set(supportedLanguages.map(({ code }) => code));

  supportedLanguages.forEach(({ code, label, ariaLabel }) => {
    let button = nav.querySelector(`.lang-btn[data-lang="${code}"]`);
    if (!button) {
      button = document.createElement("button");
      nav.appendChild(button);
    }
    button.type = "button";
    button.classList.add("lang-btn");
    button.dataset.lang = code;
    button.textContent = label;
    button.setAttribute("aria-label", ariaLabel);
    if (!button.hasAttribute("aria-pressed")) {
      button.setAttribute("aria-pressed", "false");
    }
    button.onclick = null;
    button.removeAttribute("onclick");
    button.addEventListener("click", onLanguageButtonClick);
  });

  Array.from(nav.querySelectorAll(".lang-btn")).forEach((button) => {
    if (!allowedCodes.has(button.dataset.lang)) {
      button.remove();
    }
  });

  announcer = switcher.querySelector("[data-lang-announcer]");
  if (!announcer) {
    announcer = document.createElement("span");
    announcer.className = "sr-only";
    announcer.setAttribute("aria-live", "polite");
    announcer.dataset.langAnnouncer = "";
    switcher.appendChild(announcer);
  }

  return nav;
}

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
  const nav = ensureLanguageSwitcher();
  if (!nav) {
    return;
  }

  langButtons = Array.from(nav.querySelectorAll(".lang-btn"));
  announcer = document.querySelector("[data-lang-announcer]");

  nav.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) {
      return;
    }
    const focusedIndex = langButtons.indexOf(document.activeElement);
    if (focusedIndex === -1) {
      return;
    }
    event.preventDefault();
    let targetIndex = focusedIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = (focusedIndex + 1) % langButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex = (focusedIndex - 1 + langButtons.length) % langButtons.length;
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = langButtons.length - 1;
    }
    langButtons[targetIndex].focus();
  });

  const savedLang = localStorage.getItem("preferredLanguage");
  const initialLang = savedLang && translations[currentService][savedLang] ? savedLang : defaultLanguage;
  applyLanguage(initialLang);
}

window.switchLanguage = changeLanguage;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
