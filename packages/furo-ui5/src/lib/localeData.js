import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// en
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('en', async runtimeLocaleId => (await fetch(`assets/cldr/en.json`)).json());

// de
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('de', async runtimeLocaleId => (await fetch(`assets/cldr/de.json`)).json());

// de_CH
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('de_CH', async runtimeLocaleId => (await fetch(`assets/cldr/de_CH.json`)).json());

// de_CH
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('es', async runtimeLocaleId => (await fetch(`assets/cldr/de_CH.json`)).json());

// de_CH
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('fr', async runtimeLocaleId => (await fetch(`assets/cldr/de_CH.json`)).json());

// de_CH
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('it', async runtimeLocaleId => (await fetch(`assets/cldr/de_CH.json`)).json());

// de_CH
// eslint-disable-next-line no-unused-vars
registerLocaleDataLoader('zh_CN', async runtimeLocaleId => (await fetch(`assets/cldr/de_CH.json`)).json());
