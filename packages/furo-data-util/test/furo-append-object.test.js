import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks

describe('furo-append-object', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-append-object></furo-append-object>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-append-object', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-append-object");
    done()
  });



});
