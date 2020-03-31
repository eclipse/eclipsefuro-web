import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '@furo/util/src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks
import 'sinon/pkg/sinon.js';

describe('furo-head-tail', () => {

  let element;
  let host;

  beforeEach(async () => {
    let testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-head-tail></furo-head-tail>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    element = testbind.parentNode.children[1];
    await element.updateComplete;
  });

  it('should be a furo-head-tail', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-head-tail");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should give a warning on non iterable data', (done) => {

    // "spy" on `console.log()`
    let spy = sinon.spy(console, 'warn');
    element.split("123");
    assert(spy.calledOnce);

    // restore the original function
    spy.restore();

    done();
  });

  it('should split an array to tail', (done) => {
    element.addEventListener("tail", (e) => {
      assert.deepEqual(e.detail, ["b", "c"]);
      done();
    });
    element.split(["a", "b", "c"]);
  });

  it('should split an array to head', (done) => {
    element.addEventListener("head", (e) => {
      assert.equal(e.detail, "a");
      done();
    });
    element.split(["a", "b", "c"]);
  });

  it('should be a furo-head-tail', (done) => {
    assert.equal(element.nodeName, "FURO-HEAD-TAIL");
    done()
  });


});
