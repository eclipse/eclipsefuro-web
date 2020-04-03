/**
 * This class stores your environment data,
 * - like the api services and types, which is used by the data components
 * - the current locale, which is used by the i18n package
 * - the acceptLanguage, which is used by the data components
 *
 */
export class Env {}

// default Env
// eslint-disable-next-line no-param-reassign
Env._acceptLanguage = window.navigator.languages.map((e, i) => {
  if (i === 0) {
    // eslint-disable-next-line no-param-reassign
    e = e.substr(0, 2);
  }
  return `${e};q=${Math.max(0.1, 1 - (i + 1) / 10)}`;
});
Env._acceptLanguage.unshift(window.navigator.language);

Env.api = {
  headers: [['Accept-Language', Env._acceptLanguage.join(',')]],
  services: {},
  specs: {},
};
Env.locale = window.navigator.language;
