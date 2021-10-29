import { assert } from '@esm-bundle/chai';

import { i18n } from '../src/i18n.js';
import { Env } from '../src/environment.js';
import { Translations } from './translations.js';

describe('i18n', () => {
  // todo: @maltenorstroem ? is this really what we want?
  it('should return bare key if no resource bundle is registered', done => {
    assert.equal(i18n.t('key'), 'key');
    done();
  });

  it('should return key + ** if key does not exist in registered resource bundle', done => {
    i18n.registerResBundle(Translations);
    assert.equal(i18n.t('key'), 'key**');
    done();
  });

  it('should return translated key', done => {
    i18n.registerResBundle(Translations);
    Env.locale = 'en-US';
    assert.equal(i18n.t('greeting'), 'Hello Furo');
    Env.locale = 'de-DE';
    assert.equal(i18n.t('greeting'), 'Guten Tag Furo');
    done();
  });

  it('Pluralised translations should return key* with param n', done => {
    i18n.registerResBundle(Translations);
    assert.equal(i18n.n('visits', 0), 'visits*0');
    assert.equal(i18n.n('visits', 1), 'visits*1');
    assert.equal(i18n.n('visits', 10), 'visits*10');
    done();
  });
});
