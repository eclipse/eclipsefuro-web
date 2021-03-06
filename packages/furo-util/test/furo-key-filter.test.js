import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks

describe('furo-key-filter', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-key-filter keys="ArrowUp"></furo-key-filter>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-key-filter', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-key-filter');
    done();
  });

  // axeReport a11y tests


  it('should filter', done => {
    element.addEventListener('matched', d => {
      assert.equal(d.detail.key, 'ArrowUp');
      done();
    });

    element.filter({ key: 'Enter' });
    element.filter({ key: 'Enter' });
    element.filter({ key: 'ArrowUp' });
  });
});
