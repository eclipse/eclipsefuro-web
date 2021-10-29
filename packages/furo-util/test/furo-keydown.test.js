import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-keydown', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-keydown stop-propagation prevent-default global key="Enter"></furo-keydown>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-keydown', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-keydown');
    done();
  });

  // axeReport a11y tests


  it('should fire the key event when key was pressed', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    element.dispatchEvent(customEvent);
  });

  it('should fire the key event when key was pressed with ctrl', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    element.setAttribute('ctrl', '');

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    customEvent.ctrlKey = true;
    element.dispatchEvent(customEvent);
  });

  it('should fire the key event when key was pressed with meta', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    element.setAttribute('meta', '');

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    customEvent.metaKey = true;
    element.dispatchEvent(customEvent);
  });
  it('should fire the key event when key was pressed with alt', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    element.setAttribute('option', '');

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    customEvent.altKey = true;
    element.dispatchEvent(customEvent);
  });

  it('should fire the key event when key was pressed with shift', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    element.setAttribute('shift', '');

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    customEvent.shiftKey = true;
    element.dispatchEvent(customEvent);
  });

  it('should fire the key event when key was pressed with shift meta', done => {
    element.addEventListener(
      'key',
      () => {
        done();
      },
      { once: true },
    );

    element.setAttribute('shift', '');
    element.setAttribute('meta', '');
    element.setAttribute('global', '');

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    customEvent.shiftKey = true;
    customEvent.metaKey = true;
    element.dispatchEvent(customEvent);
  });
});
