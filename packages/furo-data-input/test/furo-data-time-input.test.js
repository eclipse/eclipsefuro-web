import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-time-input', () => {
  let dataTimeInput, host, dataObject, secondTimeInput, invalidTimeInput, deeplink, entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-time-input  ƒ-bind-data="--entity(*.furo_data_time_input)"></furo-data-time-input>
        <furo-data-time-input hint="FromTPL" label="FromTPL" ƒ-bind-data="--entity(*.id)"
                              @-value-changed="--textChanged"></furo-data-time-input>
        <furo-data-time-input  ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-time-input>

        <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                        ƒ-inject-raw="--response(*.data)"></furo-data-object>

        <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
        <furo-entity-agent service="ExperimentService"
                         ƒ-hts-in="--hts"
                         ƒ-load="--hts"
                         ƒ-bind-request-data="--entity"
                         @-response="--response">
        </furo-entity-agent>


        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataTimeInput,secondTimeInput,invalidTimeInput, dataObject,deeplink,entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataTimeInput.updateComplete;
  });

  it('should be a furo-data-time-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(secondTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(invalidTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataTimeInput));

  it('should override labels ', (done) => {

      setTimeout(()=>{
        assert.equal(secondTimeInput._theInputElement.getAttribute("label"), "FromTPL");
        done();
      },10)

  });

  it('should log invalid bindings', (done) => {
    setTimeout(()=>{
      // invalid binding
      assert.equal(invalidTimeInput.field, undefined);
      // valid binding
      assert.equal(dataTimeInput.field._isValid, true);
      done();
    },10);
  });



  it('should receive value with bind', (done) => {
    dataObject.addEventListener("data-injected", (e) => {
      assert.equal(dataTimeInput.shadowRoot.querySelector("*").value, "17:34");

      done();
    });

    deeplink.qpIn({"exp": 1});
  });


  it('should bind the field label, hint', (done) => {

      setTimeout(()=>{
        assert.equal(dataTimeInput._theInputElement.getAttribute("label"), "time-input");
        assert.equal(dataTimeInput._theInputElement.getAttribute("hint"), "hint");
        done();
      },20);

  });

  it('should log invalid bindings', (done) => {
    setTimeout(()=>{
      // invalid binding
      assert.equal(invalidTimeInput.field, undefined);
      // valid binding
      assert.equal(secondTimeInput.field._isValid, true);
      done();
    },10);
  });

  it('should update the entity when values changed', (done) => {
    // ignore the init values
    setTimeout(()=>{

      secondTimeInput._FBPAddWireHook("--value", (val) => {
        assert.equal(val, "18:33");
        done();
      });

      secondTimeInput._FBPTriggerWire("--valueChanged", "18:33");
    },10);
  });


  it('should be a furo-data-time-input_test', (done) => {
    assert.equal(dataTimeInput.nodeName.toLowerCase(), "furo-data-time-input");
    done()
  });

  it('should listen field-became-invalid event add set error', (done) => {


        let err = {"description": "step 3", constraint: "min"};
    setTimeout(() => {
        dataTimeInput.field.addEventListener("field-became-invalid",()=>{

          setTimeout(() => {
            assert.equal(dataTimeInput.error, true);
            assert.equal(dataTimeInput._theInputElement.getAttribute("errortext"), "step 3");
            done();
          }, 10)

        });
        dataTimeInput.field._setInvalid(err);

    }, 20)

  });

});
