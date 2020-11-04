import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-banner-display', () => {
  let banner;
  let bannerDisplay;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-banner
            icon="close"
            text="label"
            dismiss-button-text="dis"
            confirm-button-text="conf"
          ></furo-banner>
          <furo-banner-display autofocus></furo-banner-display>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, banner, bannerDisplay] = testbind.parentNode.children;
    await host.updateComplete;
    await banner.updateComplete;
    await bannerDisplay.updateComplete;
  });

  it('should be a furo-banner-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(bannerDisplay.nodeName.toLowerCase(), 'furo-banner-display');
    done();
  });

  it('should be a furo-banner-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(banner.nodeName.toLowerCase(), 'furo-banner');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(bannerDisplay));

  it('should stack multiple', done => {
    banner.show();
    banner.show();
    banner.show();
    banner.show();
    assert.equal(bannerDisplay._stack.length, 4);
    bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].click();
    setTimeout(() => {
      assert.equal(bannerDisplay._stack.length, 3);
      done();
    }, 500);
  });

  it('should handle grpc error objects', done => {
    banner.parseGrpcStatus({
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
          field_violations: [
            {
              field: 'excercise',
              description: '**excercise** can not be _Error',
            },
            { field: 'rm1', description: '*rm1* must be 1 or more' },
          ],
        },
      ],
    });
    setTimeout(() => {
      const items = bannerDisplay.shadowRoot.querySelectorAll('p');

      assert.equal(items[0].innerHTML, 'Some localized message');
      assert.equal(items[1].innerHTML, 'with newline');
      assert.equal(items[2].textContent, 'Other localized message with newline');
      assert.equal(items[3].textContent, 'excercise can not be _Error');
      assert.equal(items.length, 5);

      done();
    }, 500);
  });

  it('should handle grpc error objects with fallback message', done => {
    banner.parseGrpcStatus({
      code: 400,
      message: 'Request had invalid credentials.',
      status: 'SOMETHING',
      details: [],
    });
    setTimeout(() => {
      const items = bannerDisplay.shadowRoot.querySelectorAll('p');

      assert.equal(items[0].innerHTML, 'Request had invalid credentials.');
      assert.equal(items.length, 1);

      done();
    }, 500);
  });

  it('display should trigger a "banner-closed" event on furo-banner when dismiss was clicked', done => {
    banner.show();
    banner.addEventListener('banner-closed', () => {
      done();
    });
    setTimeout(() => {
      assert.equal(bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].label, 'conf');
      bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].click();
    }, 500);
  });

  it('display should trigger a "confirmed" event on furo-banner when dismiss was clicked', done => {
    banner.text =
      'display should trigger a "confirmed" event on furo-banner when dismiss was clicked';
    banner.icon = 'apps';
    banner.show();

    banner.addEventListener('confirmed', () => {
      done();
    });
    setTimeout(() => {
      assert.equal(bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].label, 'conf');
      bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].click();
    }, 500);
  });

  it('display should trigger a "dismissed" event on furo-banner when dismiss was clicked', done => {
    banner.text =
      'display should trigger a "dismissed" event on furo-banner when dismiss was clicked';
    banner.icon = 'dashboard';
    banner.show();
    banner.addEventListener('dismissed', () => {
      done();
    });
    setTimeout(() => {
      assert.equal(bannerDisplay.shadowRoot.querySelectorAll('furo-button')[0].label, 'dis');
      bannerDisplay.shadowRoot.querySelectorAll('furo-button')[0].click();
    }, 500);
  });

  it('display should have a confirm button', done => {
    banner.text = 'display should have a confirm button';

    banner.show();
    setTimeout(() => {
      assert.equal(bannerDisplay.shadowRoot.querySelectorAll('furo-button')[1].label, 'conf');
      done();
    }, 500);
  });

  it('display should have a dismiss button', done => {
    banner.setText('display should have a dismiss button');
    banner.setIcon('copyright');
    banner.show();
    setTimeout(() => {
      assert.equal(bannerDisplay.shadowRoot.querySelectorAll('furo-button')[0].label, 'dis');
      done();
    }, 500);
  });

  it('should stack the banner after triggering the function show in furo-banner element', done => {
    banner.show();
    setTimeout(() => {
      assert.equal(bannerDisplay._stack.length, 1);
      done();
    }, 500);
  });
});
