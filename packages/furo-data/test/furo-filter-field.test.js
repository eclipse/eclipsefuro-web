import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/testhelper/initEnv.js"


describe('furo-filter-field', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-filter-field></furo-filter-field>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-filter-field', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-filter-field");
    done()
  });


  it('should notify changes', (done) => {
    element.addEventListener("furo-filter-field-changed", (e)=>{
      assert.equal(e.detail._field, "description");
      assert.equal(e.detail._is, "eq");
      assert.equal(e.detail._value, "hallo");
      done();
    });
    element.field = "description";
    element.is = "eq";
    element.setValue("hallo") ;
  });



});
