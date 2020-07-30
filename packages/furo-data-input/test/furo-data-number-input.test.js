import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-number-input', () => {
  let dataNumberInput;
  let host;
  let dataObject;
  let secondNumberInput;
  let invalidNumberInput;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-number-input
            ƒ-bind-data="--entityReady(*.data.furo_data_number_input)"
          ></furo-data-number-input>
          <furo-data-number-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entityReady(*.data.furo_data_number_input)"
            required
            readonly
            @-value-changed="--textChanged"
          ></furo-data-number-input>
          <furo-data-number-input ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-number-input>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entityReady"
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
    [
      ,
      dataNumberInput,
      secondNumberInput,
      invalidNumberInput,
      dataObject,
      deeplink,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataNumberInput.updateComplete;
    await secondNumberInput.updateComplete;
    await invalidNumberInput.updateComplete;
    await dataObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-number-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataNumberInput.nodeName.toLowerCase(), 'furo-data-number-input');
    assert.equal(secondNumberInput.nodeName.toLowerCase(), 'furo-data-number-input');
    assert.equal(invalidNumberInput.nodeName.toLowerCase(), 'furo-data-number-input');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');

    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataNumberInput));

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidNumberInput.field, undefined);
      // valid binding
      assert.equal(dataNumberInput.binder.fieldNode._isValid, true);
      done();
    }, 0);
  });

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondNumberInput.getAttribute('hint'), 'FromTPL');
      done();
    }, 10);
  });

  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondNumberInput.getAttribute('label'), 'FromTPL');
      done();
    }, 0);
  });

  it('should override readonly ', done => {
    setTimeout(() => {
      assert.equal(secondNumberInput.readonly, true);
      done();
    }, 0);
  });

  it('should set disabled via disable method', done => {
    secondNumberInput.disable();
    assert.equal(secondNumberInput.disabled, true);
    done();
  });

  it('should remove disabled via enable method', done => {
    secondNumberInput.enable();
    assert.equal(secondNumberInput.disabled, false);
    done();
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-changed',
        () => {
          dataNumberInput._FBPAddWireHook('--value', val => {
            assert.equal(val, 12.55);
            done();
          });
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should bind the field description', done => {
    setTimeout(() => {
      assert.equal(dataNumberInput.getAttribute('label'), 'number-input**');
      done();
    }, 0);

    deeplink.qpIn({ exp: 1 });
  });

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidNumberInput.field, undefined);
      // valid binding
      assert.equal(secondNumberInput.binder.fieldNode._isValid, true);
      done();
    }, 0);
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'max 23', constraint: 'max' };

    setTimeout(() => {
      dataNumberInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataNumberInput.error, true);
          assert.equal(dataNumberInput.errortext, 'max 23');
          done();
        }, 10);
      });
      dataNumberInput.binder.fieldNode._setInvalid(err);
    }, 20);
  });
});
