import {
  registerCldr,
  setCldrData,
} from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// eslint-disable-next-line camelcase
import de_CH from '../../assets/cldr/de_CH.js';
// en as fallback
import en from '../../assets/cldr/en.js';
import de from '../../assets/cldr/de.js';
import fr from '../../assets/cldr/fr.js';
import it from '../../assets/cldr/it.js';
import es from '../../assets/cldr/es.js';
// eslint-disable-next-line camelcase
import zh_CN from '../../assets/cldr/zh_CN.js';

const cldrData = {
  de_CH,
  en,
  de,
  fr,
  it,
  es,
  zh_CN,
};

Object.entries(cldrData).forEach(([key, value]) => {
  if (typeof value === 'object') {
    setCldrData(key, value);
  } else {
    registerCldr(key, value);
  }
});
