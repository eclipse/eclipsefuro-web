import {fixture, html} from '@open-wc/testing';

import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks

describe('furo-split-grid', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-split-grid></furo-split-grid>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-split-grid', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-split-grid");
    done()
  });



  it('should set size small', (done) => {
    element._checkSize(undefined)
    assert.equal(element.getAttribute("size"),"size-m")
    done();
  });


  it('should set size small', (done) => {
    element._checkSize(599)
    assert.equal(element.getAttribute("size"),"size-s")
    done();
  });

  it('should set size medium', (done) => {
    element._checkSize(666)
    assert.equal(element.getAttribute("size"),"size-m")
    done();
  });
  it('should set size medium', (done) => {
    element._checkSize(777)
    assert.equal(element.getAttribute("size"),"size-m")
    done();
  });
  it('should set size large', (done) => {
    element._checkSize(1245)
    assert.equal(element.getAttribute("size"),"size-l")
    done();
  });
  it('should set size large', (done) => {
    element._checkSize(1326)
    assert.equal(element.getAttribute("size"),"size-l")
    done();
  });
  it('should set size xlarge', (done) => {
    element._checkSize(1526)
    assert.equal(element.getAttribute("size"),"size-xl")
    done();
  });


});
