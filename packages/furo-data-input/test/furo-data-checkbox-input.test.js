import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-deep-link';

describe('furo-data-checkbox-input', () => {
  let dataCheckboxInput;
  let dataObject;
  let secondCheckboxInput;
  let deeplink;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-checkbox-input
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
          ></furo-data-checkbox-input>
          <furo-data-checkbox-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
            @-value-changed="--valueChanged"
          ></furo-data-checkbox-input>

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
    [, dataCheckboxInput, secondCheckboxInput, dataObject, deeplink] = testbind.parentNode.children;
    await host.updateComplete;
    await dataCheckboxInput.updateComplete;
    await secondCheckboxInput.updateComplete;
    await dataObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-checkbox-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataCheckboxInput.nodeName.toLowerCase(), 'furo-data-checkbox-input');
    assert.equal(secondCheckboxInput.nodeName.toLowerCase(), 'furo-data-checkbox-input');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataCheckboxInput));

  // those tests are base on the mockdata/trees/1/get.json. the field tree.root.open should be true in mockdata
  it('should override labels ', done => {
    assert.equal(secondCheckboxInput.getAttribute('label'), 'FromTPL');
    done();
  });

  it('should receive label from meta in spec by entity object ready', done => {
    setTimeout(() => {
      assert.equal(dataCheckboxInput.getAttribute('label'), 'checkbox_input**');
      done();
    }, 5);
  });

  it('should receive hint from meta in spec by entity object ready', done => {
    setTimeout(() => {
      assert.equal(dataCheckboxInput.getAttribute('hint'), 'Hint**');
      done();
    }, 5);
  });

  it('should receive value with bind', done => {
    setTimeout(() => {
      assert.equal(dataCheckboxInput.binder.fieldNode._value, true);
      done();
    }, 300);

    deeplink.qpIn({ exp: 1 });
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            console.log(dataCheckboxInput._theInputElement);

            assert.equal(dataCheckboxInput.getAttribute('label'), 'checkbox label via meta');
            assert.equal(dataCheckboxInput.getAttribute('readonly'), null);
            done();
          }, 0);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
