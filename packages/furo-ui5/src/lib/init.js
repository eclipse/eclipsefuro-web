import './localeData.js';
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

setLanguage('en');

// register i18n for ui5 webcomponents
registerI18nLoader('@ui5/webcomponents', {
  en: 'assets/i18n/messagebundle_en.properties',
  de: 'assets/i18n/messagebundle_de.properties',
});

// register i18n for webcomponents-fiori
registerI18nLoader('@ui5/webcomponents-fiori', {
  en: 'assets/i18n/messagebundle_en.properties',
  de: 'assets/i18n/messagebundle_de.properties',
});
