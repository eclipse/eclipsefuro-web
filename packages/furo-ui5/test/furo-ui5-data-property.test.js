import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui5-data-property', () => {
  let dataProperty;
  let host;
  let entityObject;
  let entityAgent;
  let deeplink;
  let dataProperty2;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <!-- single Property -->
          <furo-ui5-data-property
            ƒ-bind-data="--entity(*.single_type_property)"
          ></furo-ui5-data-property>
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
          <div>
            <furo-ui5-data-property
              ƒ-bind-data="--entity(*.type_property)"
            ></furo-ui5-data-property>
          </div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      dataProperty,
      entityObject,
      deeplink,
      entityAgent,
      dataProperty2,
    ] = testbind.parentNode.children;
    await host.updateComplete;

    await dataProperty.updateComplete;
    await entityAgent.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await dataProperty2.updateComplete;
  });

  it('should be a furo-ui5-data-property', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataProperty.nodeName.toLowerCase(), 'furo-ui5-data-property');
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

  it('should display properties with furo ui5 data components', done => {
    entityObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(dataProperty2.querySelectorAll('furo-ui5-data-property').length, 12);
        done();
      }, 100);
    });

    deeplink.qpIn({ exp: 1 });
  });
});
