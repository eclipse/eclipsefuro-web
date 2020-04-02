import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-snackbar-display', () => {

  let snackbar;
  let snackbarDisplay;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-snackbar
                      timeout-in-ms=1000 position-left position-right icon="close"
                      label-text="label" action-button-text="redo"
                      close-on-escape size="200px" max-size="500px" ></furo-snackbar>
          <furo-snackbar-display></furo-snackbar-display>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, snackbar,snackbarDisplay] = testbind.parentNode.children;
    await host.updateComplete;
    await snackbar.updateComplete;
    await snackbarDisplay.updateComplete;
  });

  it('should be a furo-snackbar-display', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(snackbarDisplay.nodeName.toLowerCase(), "furo-snackbar-display");
    done()
  });

  it('should be a furo-snackbar', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(snackbar.nodeName.toLowerCase(), "furo-snackbar");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(snackbarDisplay));



  it('should stack the snackbar after triggering the function show in furo-snackbar element', (done) => {
    snackbar.show();

    setTimeout(()=>{
      assert.equal(snackbarDisplay._stack.length, 1);
      done();
    },1)

  });

  it('should remove snackbar from the stack after time out', (done) => {
    snackbar.show();
    assert.equal(snackbarDisplay._stack.length, 1);
    setTimeout(()=>{
      assert.equal(snackbarDisplay._stack.length, 0);
      done();
    },1200)

  });


  it('should stack snackbar from the stack after time out', (done) => {
    snackbar.show();
    snackbar.show();
    assert.equal(snackbarDisplay._stack.length, 2);
    setTimeout(()=>{
      assert.equal(snackbarDisplay._stack.length, 1);
      done();
    },1200)

  });


  it('should remove snackbar on close', (done) => {
    snackbar.show();
    snackbar.show();
    snackbarDisplay._FBPTriggerWire("--closeClicked");
    assert.equal(snackbarDisplay._stack.length, 1);
    setTimeout(()=>{
      assert.equal(snackbarDisplay._stack.length, 0);
      done();
    },1200)

  });


  it('should remove snackbar on action', (done) => {
    snackbar.show();
    snackbar.show();
    snackbarDisplay._FBPTriggerWire("--actionClicked");
    assert.equal(snackbarDisplay._stack.length, 1);
    setTimeout(()=>{
      assert.equal(snackbarDisplay._stack.length, 0);
      done();
    },1200)

  });



});
