import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-message-strip-display', () => {
  let element;
  let messageStripDisplay;
  let messageStrip;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
          <furo-ui5-message-strip></furo-ui5-message-strip>
          <div></div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, messageStripDisplay, messageStrip, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await messageStrip.updateComplete;
    await messageStripDisplay.updateComplete;
  });

  it('should be a furo-ui5-message-strip-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(messageStripDisplay.nodeName.toLowerCase(), 'furo-ui5-message-strip-display');
    done();
  });
});
