import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '../src/furo-catalog.js';

describe('furo-ui5-data-table', () => {
  let host;
  let tablerow;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-table-row></furo-ui5-table-row>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, tablerow] = testbind.parentNode.children;
    await host.updateComplete;
    await tablerow.updateComplete;
  });

  it('should be a furo-ui5-table-row element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(tablerow.nodeName.toLowerCase(), 'furo-ui5-table-row');
    done();
  });
});
