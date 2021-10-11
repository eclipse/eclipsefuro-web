import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';

// import { getNoConflict, setNoConflict } from "@ui5/webcomponents-base/dist/config/NoConflict.js";

// workaround for elements which do not like lazy loading
import '@ui5/webcomponents/dist/Button.js';

registerLocaleDataLoader('de_CH', () =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import('@furo/ui5/assets/cldr/de_CH.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('de_AT', () =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import('@furo/ui5/assets/cldr/de_AT.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('de', () =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import('@furo/ui5/assets/cldr/de.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('it', () =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import('@furo/ui5/assets/cldr/it.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('en', () =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  import('@furo/ui5/assets/cldr/en.js').then(cldr => cldr.default()),
);

// Set a default language to prevent autoloading of cldrs which are not registered
(async () => {
  await setLanguage('en');
})();

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
