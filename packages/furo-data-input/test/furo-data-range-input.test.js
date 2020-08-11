import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-range-input', () => {
  let dataRangeInput;
  let host;
  let dataObject;
  let secondRangeInput;
  let invalidRangeInput;
  let deeplink;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-range-input
            ƒ-bind-data="--entity(*.data.furo_data_range_input)"
          ></furo-data-range-input>
          <furo-data-range-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.data.furo_data_range_input)"
            @-value-changed="--textChanged"
          ></furo-data-range-input>
          <furo-data-range-input ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-range-input>

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
    [
      ,
      dataRangeInput,
      secondRangeInput,
      invalidRangeInput,
      dataObject,
      deeplink,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataRangeInput.updateComplete;
    await secondRangeInput.updateComplete;
    await invalidRangeInput.updateComplete;
    await dataObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-range-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataRangeInput.nodeName.toLowerCase(), 'furo-data-range-input');
    assert.equal(secondRangeInput.nodeName.toLowerCase(), 'furo-data-range-input');
    assert.equal(invalidRangeInput.nodeName.toLowerCase(), 'furo-data-range-input');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataRangeInput));

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondRangeInput.getAttribute('hint'), 'FromTPL');
      done();
    }, 0);
  });

  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondRangeInput.getAttribute('label'), 'FromTPL');
      done();
    }, 0);
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-changed',
        () => {
          dataRangeInput._FBPAddWireHook('--value', val => {
            assert.equal(val, 31);
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
      assert.equal(dataRangeInput.getAttribute('label'), 'range-input**');
      assert.equal(dataRangeInput.getAttribute('hint'), 'hint**');
      done();
    }, 0);

    // deeplink.qpIn({"exp": 1});
  });

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidRangeInput.binder.fieldNode, undefined);
      // valid binding
      assert.equal(secondRangeInput.binder.fieldNode._isValid, true);
      done();
    }, 0);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondRangeInput.binder.fieldNode.addEventListener('field-value-changed', val => {
        assert.equal(val.detail, '32');
        done();
      });

      /**
       * @event value-changed
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = '32';
      secondRangeInput.dispatchEvent(customEvent);
    }, 10);
  });

  it('should listen field-became-invalid event add set error', done => {
    setTimeout(() => {
      const err = { description: 'step 3', constraint: 'min' };
      dataRangeInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataRangeInput.error, true);
          assert.equal(dataRangeInput.errortext, 'step 3');
          done();
        }, 10);
      });
      dataRangeInput.binder.fieldNode._setInvalid(err);
    }, 20);
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            assert.equal(dataRangeInput.getAttribute('readonly'), '');
            assert.equal(dataRangeInput.getAttribute('label'), 'range input label via meta');
            done();
          }, 5);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
