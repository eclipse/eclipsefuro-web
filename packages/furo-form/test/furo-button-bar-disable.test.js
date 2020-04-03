import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-button-bar-disable', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-button-bar-disable></furo-button-bar-disable>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-button-bar-disable', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-button-bar-disable");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));



});
