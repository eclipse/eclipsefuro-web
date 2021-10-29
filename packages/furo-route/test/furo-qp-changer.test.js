import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-qp-changer', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-qp-changer></furo-qp-changer>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-qp-changer', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-qp-changer');
    done();
  });




  it('should dispatch a _locationchanged event', done => {
    element.addEventListener('__furoLocationChanged', e => {
      assert.equal(e.type, '__furoLocationChanged');
      done();
    });

    element.setQp({ a: 4 });
  });
});
