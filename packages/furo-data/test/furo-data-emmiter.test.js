import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/testhelper/initEnv.js"

describe('furo-data-emmiter', () => {


  let host;
  let emmiter; let dataObject; let deepLink; let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
         <furo-data-emmiter  ƒ-trigger="--response"
                                    ƒ-bind-data="--entity"
                                    @-data="--jsonData"
                ></furo-data-emmiter>
                <furo-data-object type="experiment.Experiment" @-object-ready="--entity" ƒ-init="--emptyClicked" ƒ-inject-raw="--response(*.data)"></furo-data-object>
                <furo-deep-link service="ExperimentService" @-hts-out="--hts" ></furo-deep-link>
                <furo-entity-agent service="ExperimentService" ƒ-hts-in="--hts" load-on-hts-in ƒ-bind-request-data="--entity" @-response="--response"></furo-entity-agent>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, emmiter, dataObject, deepLink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await emmiter.updateComplete;
    await dataObject.updateComplete;
    await deepLink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('elements should be correctly assigned', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(emmiter.nodeName.toLowerCase(), "furo-data-emmiter");
    assert.equal(dataObject.nodeName.toLowerCase(), "furo-data-object");
    assert.equal(deepLink.nodeName.toLowerCase(), "furo-deep-link");
    assert.equal(entityAgent.nodeName.toLowerCase(), "furo-entity-agent");
    done()
  });

  it('should emit value of data object', (done) => {


    emmiter.addEventListener("data", (e) => {
      assert.equal(e.detail.id, 1);
      done()
    });

    deepLink.qpIn({"exp": 1});

  });




});
