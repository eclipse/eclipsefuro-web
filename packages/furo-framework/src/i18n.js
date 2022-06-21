import { Env } from './environment.js';

/**
 * The built in i18n is a trivial translation mechanism which translates keys (words)
 * a method for pluralized keys (words with numbers) is available but not implemented.
 *
 * You can override the builtin methods in your init file, as long you keep *i18n.t* and *i18n.n*
 *
 *
 * ## Usage
 * After you have registered a translation file, you can use **i18n** in your components.
 *
 *
 * ```javascript
 * // import i18n
 * import {i18n} from "@furo/framework/src/i18n"
 *
 * // use it in your source
 *  let label = i18n.t("key");
 *
 * // use it in your template like this
 *   render() {
 *     // language=HTML
 *     return html` <div>${i18n.t("key")}</div>`;
 *  }
 *
 * ```
 *
 * ## Register a translation file and use custom translation methods
 * Register i18n in the init phase of your application.
 *
 *```javascript
 *import {Init, i18n, Env, Iconset} from "@furo/framework/src/furo.js";
 *
 * // import your translations
 *import {Translations} from "./translations";
 *
 * // register your translations
 * i18n.registerResBundle(Translations);
 *
 * // Apply custom Intl methods
 * i18n.t = (key) => {
 *    let b = i18n.resbundle[Env.locale.toLowerCase().replace("-", "_")] || i18n.resbundle['de_ch'];
 *
 *    if (b === undefined) {
 *        console.warn('No resource bundle with locale ' + Env.locale + ' exists.');
 *        return
 *    }
 *
 *    const res = key.split('.').reduce((acc, part) => acc && acc[part], b);
 *    return  (res ? res : key + '**');
 *};
 * // Apply custom Intl methods for pluralized keys
 * i18n.n = (key, num) => {
 *    let t = i18n.resbundle[Env.locale.toLowerCase().replace("-", "_")] || i18n.resbundle['de_ch'];
 *
 *    if (t === undefined) {
 *        console.warn('No resource bundle with locale ' + Env.locale + ' exists.');
 *        return
 *    }
 *
 *    let p = key.split(".");
 *    for (let i = 0; i < p.length; i++) {
 *        if (t[p[i]]) {
 *            t = t[p[i]];
 *        } else {
 *            console.warn("key does not exist", key);
 *            return;
 *        }
 *    }
 *
 *    if (t) {
 *        if (num === 1) {
 *            if (t.one) {
 *                return t.one(num);
 *            } else {
 *                console.warn("key does not exist", key + ".one");
 *                return num;
 *            }
 *        }
 *        if (num > 1) {
 *            if (t.many) {
 *                return t.many(num);
 *            } else {
 *                console.warn("key does not exist", key + ".many");
 *                return num;
 *            }
 *        }
 *        if (t.none) {
 *            return t.none(num);
 *        } else {
 *            console.warn("key does not exist", key + ".none");
 *            return num;
 *        }
 *
 *    }
 *};
 *
 *```
 */
export class i18n {
  static registerResBundle(bundle) {
    this.resbundle = bundle;
  }

  static t(key) {
    if (i18n.resbundle === undefined) {
      // eslint-disable-next-line no-console
      console.warn(
        'There is no resouce bundle registered. Please register with i18.registerResBundle(RESBUNDLE).'
      );
      return key;
    }

    const b = i18n.resbundle[Env.locale];

    if (b === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`No resource bundle with locale ${Env.locale} exists.`);
      return `${key}**`;
    }

    const res = key.split('.').reduce((acc, part) => acc && acc[part], b);
    return res !== undefined ? res : `${key}**`;
  }

  static n(key, num) {
    return `${key}*${num}`;
  }
}
