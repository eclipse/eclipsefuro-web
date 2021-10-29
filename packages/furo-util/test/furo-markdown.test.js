import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-markdown', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-markdown></furo-markdown>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-markdown', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-markdown');
    done();
  });

  // axeReport a11y tests


  it('should fetch and render a md file', async () => {
    await element.fetchMd('/base/packages/furo-util/test/helper/test.md');
    const c = element.shadowRoot.querySelectorAll('*');
    assert.equal(c[0].innerText, 'Test');
    assert.equal(c[1].innerText, 'done');
  });
});
