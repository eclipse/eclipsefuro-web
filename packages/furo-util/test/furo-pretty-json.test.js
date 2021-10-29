import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-pretty-json', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-pretty-json></furo-pretty-json>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-pretty-json', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-pretty-json');
    done();
  });

  // axeReport a11y tests


  it('should accept json', done => {
    element.injectData({ a: 1, b: true, c: 12 });
    const content = element.renderRoot.innerHTML;
    assert.equal(content.length, 196);
    done();
  });

  it('should reset innerHTML if injected data is empty', done => {
    element.injectData({ a: 2 });

    element.injectData(undefined);
    assert.equal(element.renderRoot.innerHTML, '');
    done();
  });
});
