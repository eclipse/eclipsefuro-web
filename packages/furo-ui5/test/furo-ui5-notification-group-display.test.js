import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-notification-group-display', () => {
  let element;
  let notificationGroupDisplay;
  let notification;
  let host;

  const notificationsMessage = [
    {
      id: 1,
      display_name: '',
      heading: 'heading 1',
      message_priority: 'High',
      category: 'warning',
      category_priority: 'High',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
    {
      id: 2,
      display_name: '',
      heading: 'heading 2',
      message_priority: 'High',
      category: 'warning',
      category_priority: 'High',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
    {
      id: 3,
      display_name: '',
      heading: 'heading 3',
      message_priority: 'Low',
      category: 'warning',
      category_priority: 'High',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
  ];

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-notification-group-display
            show-close
            show-counter
          ></furo-ui5-notification-group-display>
          <furo-ui5-notification></furo-ui5-notification>
          <div></div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, notificationGroupDisplay, notification, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await notification.updateComplete;
    await notificationGroupDisplay.updateComplete;
  });

  it('should be a furo-ui5-notification-list', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(
      notificationGroupDisplay.nodeName.toLowerCase(),
      'furo-ui5-notification-group-display',
    );
    done();
  });

  // axeReport a11y tests
  // it('a11y', () => axeReport(notificationGroupDisplay));

  it('should listening open-furo-ui5-notification-group-requested event ', done => {
    const customEvent = new Event('open-furo-ui5-notification-group-requested', {
      bubbles: true,
      composed: true,
    });

    customEvent.detail = {
      payload: notificationsMessage,
    };
    notification.dispatchEvent(customEvent);

    setTimeout(() => {
      const items = notificationGroupDisplay.shadowRoot.querySelectorAll('table');
      assert.equal(items.length, 3);
      done();
    }, 0);
  });
});
