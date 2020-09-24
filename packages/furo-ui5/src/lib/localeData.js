import {
  registerCldr,
  setCldrData,
} from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// eslint-disable-next-line camelcase
import de_CH from '../../assets/cldr/de_CH.js';

const cldrData = {
  de_CH,
};

const allEntriesInlined = Object.entries(cldrData).every(value => typeof value === 'object');

if (allEntriesInlined) {
  // eslint-disable-next-line no-console
  console.warn(`Inefficient bundling detected: consider bundling CLDR imports as URLs instead of inlining them.
See rollup-plugin-url or webpack file-loader for more information.
Suggested pattern: "assets\\/.*\\.json"`);
}

Object.entries(cldrData).forEach(([key, value]) => {
  if (typeof value === 'object') {
    setCldrData(key, value);
  } else {
    registerCldr(key, value);
  }
});
