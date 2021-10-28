import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-config', () => {
  let config;
  let configLoader;
  let secondConfig;
  let secondConfigLoader;

  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-config></furo-config>
          <furo-config-loader></furo-config-loader>
          <furo-config></furo-config>
          <furo-config-loader></furo-config-loader>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, config, configLoader, secondConfig, secondConfigLoader] = testbind.parentNode.children;
    await host.updateComplete;
    await config.updateComplete;
    await configLoader.updateComplete;
    await secondConfig.updateComplete;
    await secondConfigLoader.updateComplete;
  });

  it('should be a furo-config', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(config.nodeName.toLowerCase(), 'furo-config');
    assert.equal(configLoader.nodeName.toLowerCase(), 'furo-config-loader');
    assert.equal(secondConfig.nodeName.toLowerCase(), 'furo-config');
    assert.equal(secondConfigLoader.nodeName.toLowerCase(), 'furo-config-loader');
    done();
  });

  it('should notify config-loaded', done => {
    configLoader.addEventListener('config-loaded', () => {
      done();
    });

    configLoader.setAttribute('src', '/base/packages/furo-util/package.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should handle single furo-config', done => {
    config.setAttribute('section', 'package');
    config.addEventListener(
      'config-updated',
      d => {
        assert(d.detail.license, 'MIT');
        done();
      },
      { once: true },
    );

    configLoader.setAttribute('src', '/base/packages/furo-util/package.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should handle mutliple furo-config', done => {
    config.setAttribute('section', 'package');

    config.addEventListener('config-updated', d => {
      assert.equal(d.detail.license, 'MIT');
    });

    config.setAttribute('section', 'package');
    config.addEventListener('config-updated', d => {
      assert.equal(d.detail.name, '@furo/util');
      done();
    });
    secondConfig.setAttribute('section', 'lerna');
    configLoader.setAttribute('src', '/base/lerna.json');

    secondConfigLoader.setAttribute('section', 'package');
    secondConfigLoader.setAttribute('src', '/base/packages/furo-util/package.json');
  });

  it('should load a config file with loader and notifiy via furo-config', done => {
    config.setAttribute('section', 'package');
    config.addEventListener(
      'config-updated',
      d => {
        assert(d.detail.license, 'MIT');
        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/package.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should  notifiy deep objects', done => {
    config.setAttribute('section', 'package.license');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail, 'MIT');

        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/test.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should handle arrays', done => {
    config.setAttribute('section', 'package');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail.array[1], 'b');

        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/test.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should handle arrays on top level of the configs (like flowConfig)', done => {
    config.setAttribute('section', 'arr');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail[1].x, 3);
        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/array.json');
    configLoader.setAttribute('section', 'arr');
  });

  it('should handle boolean', done => {
    config.setAttribute('section', 'package');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail.deep.trueval, true);
        assert.equal(d.detail.deep.falseval, false);
        assert.equal(d.detail.deep.deeparray[0].x, 2);

        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/test.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should notifiy deep objects 2', done => {
    config.setAttribute('section', 'package.deep.deep');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail, 'val');

        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/test.json');
    configLoader.setAttribute('section', 'package');
  });

  it('should notifiy all values', done => {
    config.setAttribute('section', 'package');

    config.addEventListener(
      'config-updated',
      d => {
        assert.equal(d.detail.deep.deep, 'val');
        assert.equal(d.detail.license, 'MIT');

        done();
      },
      { once: true },
    );
    configLoader.setAttribute('src', '/base/packages/furo-util/test/test.json');
    configLoader.setAttribute('section', 'package');
  });
});
