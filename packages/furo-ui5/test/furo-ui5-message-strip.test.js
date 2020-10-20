import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-message-strip', () => {
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

  it('should be a furo-ui5-message-strip', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(messageStrip.nodeName.toLowerCase(), 'furo-ui5-message-strip');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(messageStrip));

  it('should handle grpc error objects', done => {
    messageStrip.parseGrpcStatus({
      code: 12,
      message: 'Request had invalid credentials.',
      status: 'SOMETHING',
    });
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should send message-strip-closed event after clicking close button', done => {
    messageStrip.parseGrpcStatus({
      code: 12,
      message: 'Request had invalid credentials.',
      status: 'SOMETHING',
    });

    messageStrip.addEventListener('message-strip-closed', () => {
      done();
    });

    setTimeout(() => {
      messageStripDisplay.shadowRoot.children[0].shadowRoot.querySelector('ui5-button').click();
    }, 0);
  });
});
