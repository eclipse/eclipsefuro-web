import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

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
