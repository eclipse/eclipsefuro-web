import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks


describe('furo-head-tail', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-head-tail></furo-head-tail>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-head-tail', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-head-tail');
    done();
  });

  // axeReport a11y tests



  it('should split an array to tail', done => {
    element.addEventListener('tail', e => {
      assert.deepEqual(e.detail, ['b', 'c']);
      done();
    });
    element.split(['a', 'b', 'c']);
  });

  it('should split an array to head', done => {
    element.addEventListener('head', e => {
      assert.equal(e.detail, 'a');
      done();
    });
    element.split(['a', 'b', 'c']);
  });

  it('should be a furo-head-tail', done => {
    assert.equal(element.nodeName, 'FURO-HEAD-TAIL');
    done();
  });
});
