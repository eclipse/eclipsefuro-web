import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-property', () => {
  let dataProperty;
  let host;
  let entityObject;
  let entityAgent;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <!-- single Property -->
          <furo-data-property ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataProperty, entityObject, deeplink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;

    await dataProperty.updateComplete;
    await entityAgent.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-property', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataProperty.nodeName.toLowerCase(), 'furo-data-property');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataProperty));

  it('should bind data to single Property', done => {
    entityObject.addEventListener('data-injected', () => {
      assert.equal(dataProperty.field.data.year._value, '2022');
      done();
    });
    deeplink.qpIn({ exp: 1 });
  });
});
