import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-busyindicator', () => {
  let host;
  let busy;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-busyindicator size="Small"></furo-ui5-busyindicator>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, busy] = testbind.parentNode.children;
    await host.updateComplete;
    await busy.updateComplete;
  });

  it('should be a furo-ui5-busyindicator element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(busy.nodeName.toLowerCase(), 'furo-ui5-busyindicator');
    done();
  });

  it('should have different sizes', done => {
    busy.setAttribute('size', 'Medium');
    setTimeout(() => {
      assert.equal(busy.size, 'Medium');
      done();
    }, 16);
  });

  it('should be activatable', done => {
    busy.activate();
    setTimeout(() => {
      assert.equal(busy.active, true);
      done();
    }, 16);
  });

  it('should be deactivatable', done => {
    busy.activate();
    busy.deactivate();
    setTimeout(() => {
      assert.equal(busy.active, false);
      done();
    }, 16);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(busy));
});
