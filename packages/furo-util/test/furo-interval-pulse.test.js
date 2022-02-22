import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks

describe('furo-interval-pulse', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-interval-pulse></furo-interval-pulse>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-interval-pulse', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-interval-pulse');
    done();
  });

  // axeReport a11y tests


  it('should fire interval event', done => {
    element.addEventListener('tock', () => {
      element.stop();
      done();
    });
    element.start();
  });
});
