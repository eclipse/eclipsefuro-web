import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-banner', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-banner icon="close" text="label" dismiss-button-text="cancel" confirm-button-text="fix it"  ></furo-banner>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-banner', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-banner");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));


  it('should set properties via attributes ', (done) => {
    assert.equal(element.icon, "close");
    assert.equal(element.text, "label");
    assert.equal(element.dismissButtonText, "cancel");
    assert.equal(element.confirmButtonText, "fix it");
    done();
  });


  it('should send event `open-furo-banner-requested` with detail which is banner self when function show() is called', (done) => {

    element.addEventListener("open-furo-banner-requested", (e)=>{
      assert.equal(e.detail.dismissButtonText, "cancel");
      done();
    });

    element.show();
  });

  it('should send event `confirm` with detail which is the `payload`  when function confirm() is called', (done) => {
    let obj ={"payload":"test"};
    element.addEventListener("confirmed", (e)=>{
      assert.equal(JSON.stringify(e.detail), JSON.stringify(obj));
      done();
    });
    element.show(obj);

    element.confirm();
  });


  it('should set text via setText()', (done) => {

    element.setText("text");

    assert.equal(element.text, "text");
    done();

  });

  it('should set confirm button text via setConfirmButtonText()', (done) => {

    element.setConfirmButtonText("text");

    assert.equal(element.confirmButtonText, "text");
    done();

  });

  it('should set dismiss button text via setDismissButtonText()', (done) => {

    element.setDismissButtonText("text");

    assert.equal(element.dismissButtonText, "text");
    done();

  });


});
