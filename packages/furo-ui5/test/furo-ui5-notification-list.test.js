import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-notification-list', () => {
  let element;
  let notificationList;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-notification-list></furo-ui5-notification-list>
          <div></div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, notificationList, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await notificationList.updateComplete;
  });

  it('should be a furo-ui5-notification-list', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(notificationList.nodeName.toLowerCase(), 'furo-ui5-notification-list');
    done();
  });

  // axeReport a11y tests
  // it('a11y', () => axeReport(notificationList));

  it('should handle grpc error objects', done => {
    notificationList.parseGrpcStatus({
      code: 400,
      message: 'Request had invalid credentials.',
      status: 'SOMETHING',
      details: [
        {
          '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
          message: 'Some localized message\n\nwith newline',
          locale: 'de-ch',
        },
        {
          '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
          message: 'Other localized message with newline',
          locale: 'de-ch',
        },
        {
          '@type': 'type.googleapis.com/google.rpc.BadRequest',
          message: 'This should not be visible',
          locale: 'de-ch',
        },
      ],
    });
    setTimeout(() => {
      const items = notificationList.shadowRoot.querySelectorAll('p');

      assert.equal(items[0].innerHTML, 'Some localized message');
      assert.equal(items[1].innerHTML, 'with newline');
      assert.equal(items[2].textContent, 'Other localized message with newline');
      assert.equal(items.length, 3);

      done();
    }, 0);
  });

  it('should handle grpc error objects with fallback message', done => {
    notificationList.parseGrpcStatus({
      code: 400,
      message: 'Request had invalid credentials.',
      status: 'SOMETHING',
      details: [
        {
          '@type': 'type.googleapis.com/google.rpc.BadRequest',
          message: 'This should not be visible',
          locale: 'de-ch',
        },
      ],
    });
    setTimeout(() => {
      const items = notificationList.shadowRoot.querySelectorAll('p');

      assert.equal(items[0].innerHTML, 'Request had invalid credentials.');
      assert.equal(items.length, 1);

      done();
    }, 0);
  });
});
