import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-de-bounce', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-de-bounce></furo-de-bounce>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-de-bounce', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-de-bounce');
    done();
  });

  // axeReport a11y tests


  it('should set attributes', done => {
    element.wait = 3000;
    element.immediate = true;
    assert.equal(element._wait, 3000);
    assert.equal(element._immediate, true);
    done();
  });

  it('should take default values if not set', done => {
    assert.equal(element._wait, 250);
    assert.equal(element._immediate, false);
    done();
  });

  it('should take default value for immediate if not set', done => {
    element.wait = 3000;
    assert.equal(element._wait, 3000);
    assert.equal(element._immediate, false);
    done();
  });

  it('should take default value for wait if not set', done => {
    element.immediate = true;
    assert.equal(element._wait, 250);
    assert.equal(element._immediate, true);
    done();
  });

  it("should fire once every quarter of a second instead of as quickly as it's triggered", done => {
    element.wait = 250;

    element.addEventListener('debounced', e => {
      assert.equal(e.detail.result, 15);
      done();
    });
    element.trigger({ result: 1 });
    element.trigger({ result: 2 });
    element.trigger({ result: 3 });
    element.trigger({ result: 4 });
    element.trigger({ result: 5 });
    element.trigger({ result: 6 });
    element.trigger({ result: 7 });
    element.trigger({ result: 8 });
    element.trigger({ result: 9 });
    element.trigger({ result: 10 });
    element.trigger({ result: 11 });
    element.trigger({ result: 12 });
    element.trigger({ result: 13 });
    element.trigger({ result: 14 });
    element.trigger({ result: 15 });
  });

  it('should fire on leading edge', done => {
    element.immediate = true;

    element.addEventListener('debounced', e => {
      assert.equal(e.detail.result, 1);
      done();
    });
    element.trigger({ result: 1 });
    element.trigger({ result: 2 });
    element.trigger({ result: 3 });
    element.trigger({ result: 4 });
    element.trigger({ result: 5 });
    element.trigger({ result: 6 });
    element.trigger({ result: 7 });
    element.trigger({ result: 8 });
    element.trigger({ result: 9 });
    element.trigger({ result: 10 });
    element.trigger({ result: 11 });
    element.trigger({ result: 12 });
    element.trigger({ result: 13 });
    element.trigger({ result: 14 });
    element.trigger({ result: 15 });
  });
});
