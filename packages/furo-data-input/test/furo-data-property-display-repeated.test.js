import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-property-display-repeated', () => {

  let dataPropertyDisplay, host, entityObject, entityAgent,  deeplink, dataPropertyDisplayRepeated;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
            <!-- single Property -->
                <furo-data-object type="experiment.Experiment" @-object-ready="--entity" ƒ-inject-raw="--response(*.data)"></furo-data-object>
                <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
                <furo-entity-agent service="ExperimentService" ƒ-hts-in="--hts" ƒ-load="--hts" @-response="--response"> </furo-entity-agent>
                <furo-data-property-display ƒ-bind-data="--entity(*.type_property)"></furo-data-property-display>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
if( testbind.parentNode.children.length === 5){
  [, entityObject,deeplink,entityAgent,dataPropertyDisplay] = testbind.parentNode.children;
}
// repeater creates a node before it self,
if( testbind.parentNode.children.length === 6){
  [, entityObject,deeplink,entityAgent,,dataPropertyDisplay] = testbind.parentNode.children;
}

    await dataPropertyDisplay.updateComplete;
    await entityObject.updateComplete;
    await entityAgent.updateComplete;
    await deeplink.updateComplete;

  });


  it('should be a furo-data-property-display-repeated', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataPropertyDisplay.nodeName.toLowerCase(), 'furo-data-property-display');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataPropertyDisplay));
});
