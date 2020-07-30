import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-textarea-input', () => {
  let dataTextareaInput;
  let host;
  let entityObject;
  let secondTextareaInput;
  let invalidTextareaInput;
  let deeplink;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-textarea-input
            ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
          ></furo-data-textarea-input>
          <furo-data-textarea-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
            @-value-changed="--textareaChanged"
          ></furo-data-textarea-input>

          <furo-data-textarea-input
            ƒ-bind-data="--entity(*.invalidBinding)"
          ></furo-data-textarea-input>

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
      dataTextareaInput,
      secondTextareaInput,
      invalidTextareaInput,
      entityObject,
      deeplink,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataTextareaInput.updateComplete;
    await secondTextareaInput.updateComplete;
    await invalidTextareaInput.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-textarea-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataTextareaInput.nodeName.toLowerCase(), 'furo-data-textarea-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataTextareaInput));

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidTextareaInput.field, undefined);
      // valid binding
      assert.equal(secondTextareaInput.binder.fieldNode._isValid, true);
      done();
    }, 10);
  });

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondTextareaInput.getAttribute('hint'), 'FromTPL');
      done();
    }, 10);
  });
  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondTextareaInput.getAttribute('label'), 'FromTPL');
      done();
    }, 10);
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-changed',
        () => {
          dataTextareaInput._FBPAddWireHook('--value', val => {
            assert.equal(val, 'hallo , this is textarea input');
            done();
          });
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondTextareaInput.binder.fieldNode.addEventListener('field-value-changed', val => {
        assert.equal(val.detail, 'newTextarea');
        done();
      });

      /**
       * @event value-changed
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = 'newTextarea';
      dataTextareaInput.dispatchEvent(customEvent);
    }, 10);
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            assert.equal(dataTextareaInput.disabled, '');
            assert.equal(dataTextareaInput.getAttribute('label'), 'textarea input label via meta');
            done();
          }, 5);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
