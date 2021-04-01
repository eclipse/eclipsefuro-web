import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-message-strip', () => {
  const grpcStatus = {
    code: 3,
    message: 'Missing mandatory values',
    details: [
      {
        '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
        locale: 'en-GB',
        message: 'Please register all the mandatory values.',
      },
      {
        '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
        locale: 'en-GB',
        message: 'If you need help completing the data, call 0800-HELP-FURO.',
      },
      {
        '@type': 'type.googleapis.com/google.rpc.BadRequest',
        field_violations: [
          {
            field: 'short_form',
            description: 'The country designation (short form) should be set.',
          },
          {
            field: 'id',
            description:
              'The id should be ISO Alpha-2 code as described in the ISO 3166 international standard',
          },
          { field: 'area', description: 'Please set a value for the field area.' },
        ],
      },
    ],
  };
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

  it('should show information message', done => {
    messageStrip.showInformation('Information message');
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should show warning message', done => {
    messageStrip.showWarning('Warning message');
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should show Success message', done => {
    messageStrip.showSuccess('Success message');
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should show error message', done => {
    messageStrip.showError('Error message');
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should handle grpc error objects', done => {
    messageStrip.showGrpcLocalizedMessage(grpcStatus);
    setTimeout(() => {
      const items = messageStripDisplay.shadowRoot.querySelectorAll('ui5-messagestrip');

      assert.equal(items.length, 1);

      done();
    }, 0);
  });

  it('should send message-strip-closed event after clicking close button', done => {
    messageStrip.showGrpcLocalizedMessage(grpcStatus);

    messageStrip.addEventListener('message-strip-closed', () => {
      done();
    });

    setTimeout(() => {
      messageStripDisplay.shadowRoot.children[0].shadowRoot.querySelector('ui5-button').click();
    }, 0);
  });
});
