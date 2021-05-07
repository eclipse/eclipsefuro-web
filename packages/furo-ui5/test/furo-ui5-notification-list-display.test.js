import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-notification-list-display', () => {
  let element;
  let notificationList;
  let notification;
  let host;
  const grpcMessage = {
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
        '@type': 'type.googleapis.com/google.rpc.Help',
        links: [
          {
            description: 'SAP Fiori Message Handling',
            url: 'https://experience.sap.com/fiori-design-web/message-page/',
          },
        ],
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
          <furo-ui5-notification-list-display show-close></furo-ui5-notification-list-display>
          <furo-ui5-notification></furo-ui5-notification>
          <div></div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, notificationList, notification, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await notification.updateComplete;
    await notificationList.updateComplete;
  });

  it('should be a furo-ui5-notification-list', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(notificationList.nodeName.toLowerCase(), 'furo-ui5-notification-list-display');
    done();
  });

  // axeReport a11y tests
  // it('a11y', () => axeReport(notificationList));

  it('should handle grpc error objects', done => {
    notification.parseGrpcStatus(grpcMessage);
    setTimeout(() => {
      const items = notificationList.shadowRoot.querySelectorAll('ui5-li-notification');

      assert.equal(items.length, 6);

      done();
    }, 0);
  });
});
