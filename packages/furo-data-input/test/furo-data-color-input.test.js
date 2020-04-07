import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-color-input', () => {
  let dataInput; let host; let entityObject; let deeplink; let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
           <furo-data-color-input ƒ-bind-data="--entity(*.data.furo_data_color_input)"></furo-data-color-input>

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
    [, dataInput,entityObject,deeplink,entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataInput.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('should be a furo-data-color-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataInput.nodeName.toLowerCase(), 'furo-data-color-input');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataInput));
  it('should receive value with bind', (done) => {

    host._FBPAddWireHook("--hts", () => {
      entityObject.addEventListener("data-changed", (e) => {
        dataInput._FBPAddWireHook("--value", (val) => {
          assert.equal(val, "#e318ed");
          done();
        });

      }, {once: true});
    });
    deeplink.qpIn({"exp": 1});
  });
});
