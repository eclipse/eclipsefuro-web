import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-money-input', () => {

  let dataInput, host, entityObject, deeplink, entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
           <furo-data-money-input ƒ-bind-data="--entity(*.data.furo_data_money_input)"></furo-data-money-input>

                <furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"
                                  ƒ-inject-raw="--response"></furo-data-object>

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
    [, dataInput,entityObject, deeplink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataInput.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('should be a furo-data-money-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataInput.nodeName.toLowerCase(), 'furo-data-money-input');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataInput));


  it('should receive value with bind', (done) => {

    entityObject.addEventListener("data-injected", () => {

      setTimeout(()=>{
        assert.equal(dataInput.field.units._value, "3333");
        assert.equal(dataInput.field.currency_code._value, "CHF");
        assert.equal(dataInput.field.nanos._value, "75100000");
        done();
      },0);
    });
    deeplink.qpIn({"exp": 1});
  });

  it('should be possible to set a list of currencies with the currencies attribute', (done) => {

    dataInput._FBPAddWireHook('--selection', (list) =>{
      assert.equal(list.length, 3);
    });
    entityObject.addEventListener("data-injected", () => {
      setTimeout(()=>{
        assert.equal(dataInput.field.units._value, "3333");
        assert.equal(dataInput.field.currency_code._value, "CHF");
        assert.equal(dataInput.field.nanos._value, "75100000");
        done();
      },0);
    });
    dataInput.setAttribute('currencies', 'chf,eur,usd');
    deeplink.qpIn({"exp": 1});
  });

  it('should convert amount to money object after input the amount', (done) => {

    setTimeout(()=>{

      dataInput.addEventListener("value-changed", (e)=>{

        assert.equal(e.detail.units, 23);
        assert.equal(e.detail.nanos, 22000000);
        done();
      });

      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = 23.22;

      dataInput.shadowRoot.getElementById("input").dispatchEvent(customEvent);
    },0);


  });

  it('should convert selected currency to money object after select the currency', (done) => {

    setTimeout(()=>{
      dataInput.addEventListener("value-changed", (e)=>{
        assert.equal(e.detail.currency_code, "EUR");
        done();
      });

      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = "EUR";

      dataInput.shadowRoot.getElementById("select").dispatchEvent(customEvent);
    },0);
  });
});
