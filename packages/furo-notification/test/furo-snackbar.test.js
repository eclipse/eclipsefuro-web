import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-snackbar', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-snackbar
                      timeout-in-ms=5000 position-left position-right icon="close"
                      label-text="label" action-button-text="redo"
                      close-on-escape size="200px" max-size="500px" ></furo-snackbar>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-snackbar', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-snackbar");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));


  it('should set properties via attributes ', (done) => {
    assert.equal(element.icon, "close");
    assert.equal(element.positionLeft, true);
    assert.equal(element.positionRight, true);
    assert.equal(element.closeOnEscape, true);
    assert.equal(element.timeoutInMs, 5000);
    assert.equal(element.size, "200px");
    assert.equal(element.maxSize, "500px");
    done();
  });


  it('should override label and button text via attributes ', (done) => {
    assert.equal(element.labelText, "label");
    assert.equal(element.actionButtonText, "redo");
    done();
  });

  it('should send event `open-furo-snackbar-requested` with detail which is snackbar self when function show() is called', (done) => {

    element.addEventListener("open-furo-snackbar-requested", (e)=>{
      assert.equal(e.detail.actionButtonText, "redo");
      done();
    });

    element.show();
  });

  it('should send event `snackbar-action-clicked` with detail which is the `payload`  when function action() is called', (done) => {
    let obj ={"payload":"test"};
    element.addEventListener("snackbar-action-clicked", (e)=>{
      assert.equal(JSON.stringify(e.detail), JSON.stringify(obj));
      done();
    });
    element.show(obj);

    element._action();
  });


  it('should send event `snackbar-closed` with detail which is the `payload`  when function _close() is called', (done) => {
    let obj ={"payload":"test"};
    element.addEventListener("snackbar-closed", (e)=>{
      assert.equal(JSON.stringify(e.detail), JSON.stringify(obj));
      done();
    });
    element.show(obj);

    element._close();
  });

  it('should send event `snackbar-dismiss-clicked` with detail which is the `payload`  when function _close() is called', (done) => {
    let obj ={"payload":"test"};
    element.addEventListener("snackbar-dismiss-clicked", (e)=>{
      assert.equal(JSON.stringify(e.detail), JSON.stringify(obj));
      done();
    });
    element.show(obj);

    element._dismiss();
  });

  it('should set label via setLabelText()', (done) => {

    element.setLabelText("text");

    assert.equal(element.labelText, "text");
    done();

  });

  it('should set button text via setActionButtonText()', (done) => {

    element.setActionButtonText("text");

    assert.equal(element.actionButtonText, "text");
    done();

  });

  it('should parse grpc status', (done) => {
    let obj={"code": 404, "message":"message"};

    element.parseGrpcStatus(obj);

    assert.equal(element.labelText, "message");
    done();
  });

});
