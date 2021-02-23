import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/lib/ui5-data-repeat-delete.js';

describe('furo-ui5-data-repeat-delete', () => {
  let host;
  let del;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <ui5-data-repeat-delete></ui5-data-repeat-delete>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, del] = testbind.parentNode.children;
    await host.updateComplete;
    await del.updateComplete;
  });

  it('should be a ui5-data-repeat-delete element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(del.nodeName.toLowerCase(), 'ui5-data-repeat-delete');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(btn));
});
