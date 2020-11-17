import {
  registerCldr,
  setCldrData,
} from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// eslint-disable-next-line camelcase
import de_CH from '../../assets/cldr/de_CH.js';
// en as fallback
import en from '../../assets/cldr/en.js';

const cldrData = {
  de_CH,
  en
};

Object.entries(cldrData).forEach(([key, value]) => {
  if (typeof value === 'object') {
    setCldrData(key, value);
  } else {
    registerCldr(key, value);
  }
});
