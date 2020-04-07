import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-radio-button-input', () => {
  let dataRadioButtonInput;
  let host;
  let entityObject;
  let secondDataRadioButtonInput;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-radio-button-input
            ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
          ></furo-data-radio-button-input>
          <furo-data-radio-button-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
            @-value-changed="--valueChanged"
          ></furo-data-radio-button-input>

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
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      dataRadioButtonInput,
      secondDataRadioButtonInput,
      entityObject,
      deeplink,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataRadioButtonInput.updateComplete;
    await entityObject.updateComplete;
    await secondDataRadioButtonInput.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-radio-button-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataRadioButtonInput.nodeName.toLowerCase(), 'furo-data-radio-button-input');
    assert.equal(secondDataRadioButtonInput.nodeName.toLowerCase(), 'furo-data-radio-button-input');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataRadioButtonInput));

  // those tests are base on the mockdata/trees/1/get.json. the field tree.root.open should be true in mockdata
  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondDataRadioButtonInput._theInputElement.getAttribute('label'), 'FromTPL');
      done();
    }, 0);
  });

  it('should receive label from meta in spec by entity object ready', done => {
    setTimeout(() => {
      assert.equal(dataRadioButtonInput._theInputElement.getAttribute('label'), 'checkbox_input');
      done();
    }, 0);
  });

  it('should receive hint from meta in spec by entity object ready', done => {
    setTimeout(() => {
      assert.equal(dataRadioButtonInput._theInputElement.getAttribute('hint'), 'Hint');
      done();
    }, 0);
  });

  it('should receive value with bind', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-changed',
        () => {
          secondDataRadioButtonInput._FBPAddWireHook('--value', val => {
            assert.equal(val, true);
            done();
          });
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
