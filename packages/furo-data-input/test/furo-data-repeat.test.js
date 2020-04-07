import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-repeat', () => {
  let dataRepeat, host, entityObject, entityAgent,  deeplink;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
                <furo-data-repeat ƒ-bind-data="--entity(*.repstring)" delete-icon="delete" ƒ-add="--addFieldClicked(null)" repeated-component="furo-data-text-input"></furo-data-repeat>
                <furo-data-object type="experiment.Experiment" @-object-ready="--entity" ƒ-init="--emptyClicked" ƒ-inject-raw="--response(*.data)"></furo-data-object>
                <furo-deep-link service="ExperimentService" @-hts-out="--hts" ></furo-deep-link>
                <furo-entity-agent service="ExperimentService" ƒ-hts-in="--hts" load-on-hts-in ƒ-bind-request-data="--entity" @-response="--response"></furo-entity-agent>
         
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataRepeat,entityObject,deeplink,entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataRepeat.updateComplete;
    await entityObject.updateComplete;
    await entityAgent.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-repeat', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataRepeat.nodeName.toLowerCase(), 'furo-data-repeat');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataRepeat));

  it('should produce repeated components after binding', (done) => {

    entityAgent.addEventListener("response", () => {

      setTimeout(()=>{
        assert.equal((dataRepeat.shadowRoot.querySelector("*").shadowRoot.querySelector("slot").assignedNodes().length > 0), true);
        done();
      },100);
    });
    deeplink.qpIn({"exp": 1});
  });

  it('should bind data', (done) => {

    entityAgent.addEventListener("response", () => {

      setTimeout(()=>{
        assert.equal(dataRepeat.shadowRoot.querySelector("*").shadowRoot.querySelector("slot").assignedNodes()[0].querySelector("*").field._value, "AAA");
        done();
      },100);
    });
    deeplink.qpIn({"exp": 1});
  });

});
