import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-navigation-pad', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-navigation-pad></furo-navigation-pad>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-navigation-pad', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-navigation-pad');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should fire navigated', done => {
    element.addEventListener(
      'navigated',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    element.dispatchEvent(customEvent);
  });

  it('should fire enter-pressed', done => {
    element.addEventListener(
      'enter-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Enter';
    element.dispatchEvent(customEvent);
  });

  it('should fire arrow-left-pressed', done => {
    element.addEventListener(
      'arrow-left-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'ArrowLeft';
    element.dispatchEvent(customEvent);
  });

  it('should fire arrow-right-pressed', done => {
    element.addEventListener(
      'arrow-right-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'ArrowRight';
    element.dispatchEvent(customEvent);
  });

  it('should fire arrow-down-pressed', done => {
    element.addEventListener(
      'arrow-down-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'ArrowDown';
    element.dispatchEvent(customEvent);
  });

  it('should fire arrow-up-pressed', done => {
    element.addEventListener(
      'arrow-up-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'ArrowUp';
    element.dispatchEvent(customEvent);
  });

  it('should fire page-up-pressed', done => {
    element.addEventListener(
      'page-up-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'PageUp';
    element.dispatchEvent(customEvent);
  });

  it('should fire page-down-pressed', done => {
    element.addEventListener(
      'page-down-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'PageDown';
    element.dispatchEvent(customEvent);
  });

  it('should fire end-pressed', done => {
    element.addEventListener(
      'end-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'End';
    element.dispatchEvent(customEvent);
  });

  it('should fire home-pressed', done => {
    element.addEventListener(
      'home-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Home';
    element.dispatchEvent(customEvent);
  });

  it('should fire escape-pressed', done => {
    element.addEventListener(
      'escape-pressed',
      () => {
        done();
      },
      { once: true },
    );

    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.key = 'Escape';
    element.dispatchEvent(customEvent);
  });
});
