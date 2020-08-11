import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-display', () => {
  let dataInput;
  let host;
  let dataObject;
  let deeplink;
  let entityAgent;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-display ƒ-bind-data="--entity(*.data.description)"></furo-data-display>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataInput, dataObject, deeplink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataInput.updateComplete;
    await dataObject.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('should be a furo-data-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataInput.nodeName.toLowerCase(), 'furo-data-display');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(dataInput));

  it('should receive value with bind', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(dataInput.binder.fieldNode._value, 'experiment data for testing');
        assert.equal(dataInput.binder.fieldNode._meta.label, 'Description**');
        done();
      }, 0);
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should receive value of binded field if attribute displayfield does not exist', done => {
    dataInput.displayfield = 'some_attribute';

    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(dataInput.binder.fieldNode._value, 'experiment data for testing');
        assert.equal(dataInput.binder.fieldNode._meta.label, 'Description**');
        done();
      }, 0);
    });
    deeplink.qpIn({ exp: 1 });
  });
});
