import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// workaround for elements which do not like lazy loading
import '@ui5/webcomponents/dist/Button.js';

registerLocaleDataLoader('de_CH', () =>
  import('@furo/ui5/assets/cldr/de_CH.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('de_AT', () =>
  import('@furo/ui5/assets/cldr/de_AT.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('de', () =>
  import('@furo/ui5/assets/cldr/de.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('it', () =>
  import('@furo/ui5/assets/cldr/it.js').then(cldr => cldr.default()),
);

registerLocaleDataLoader('en', () =>
  import('@furo/ui5/assets/cldr/en.js').then(cldr => cldr.default()),
);
