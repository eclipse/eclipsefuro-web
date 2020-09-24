// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents-base/dist/features/PropertiesFormatSupport.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { registerI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';

import './localeData.js';

// register i18n with properties
// this is only a demo to show how it works.
registerI18nBundle('@ui5/webcomponents', {
  en: 'assets/i18n/messagebundle_de.properties',
});

// register i18n with json
registerI18nBundle('@ui5/webcomponents', {
  de: 'assets/i18n/de.json',
});

// register i18n with properties
registerI18nBundle('@ui5/webcomponents-fiori', {
  en: 'assets/i18n/messagebundle_de.properties',
});

// register i18n with json
registerI18nBundle('@ui5/webcomponents-fiori', {
  de: 'assets/i18n/de.json',
});
// import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
// setTheme("sap_fiori_3_dark");
