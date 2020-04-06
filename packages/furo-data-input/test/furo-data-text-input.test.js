import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-text-input', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-data-text-input></furo-data-text-input>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-data-text-input', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-data-text-input");
    done()
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));



});
