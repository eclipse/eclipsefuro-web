import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-time-input', () => {
  let dataTimeInput;
  let host;
  let dataObject;
  let secondTimeInput;
  let invalidTimeInput;
  let deeplink;
  let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-time-input
            ƒ-bind-data="--entity(*.data.furo_data_time_input)"
          ></furo-data-time-input>
          <furo-data-time-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.data.id)"
            @-value-changed="--textChanged"
          ></furo-data-time-input>
          <furo-data-time-input ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-time-input>

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
      dataTimeInput,
      secondTimeInput,
      invalidTimeInput,
      dataObject,
      deeplink,
      entityAgent,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataTimeInput.updateComplete;
  });

  it('should be a furo-data-time-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(secondTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(invalidTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataTimeInput));

  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondTimeInput.getAttribute('label'), 'FromTPL');
      done();
    }, 10);
  });

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidTimeInput.binder.fieldNode, undefined);
      // valid binding
      assert.equal(dataTimeInput.binder.fieldNode._isValid, true);
      done();
    }, 10);
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-changed',
        () => {
          dataTimeInput._FBPAddWireHook('--value', val => {
            assert.equal(val, '17:34');
            done();
          });
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should bind the field label, hint', done => {
    setTimeout(() => {
      assert.equal(dataTimeInput.getAttribute('label'), 'time-input**');
      assert.equal(dataTimeInput.getAttribute('hint'), 'hint**');
      done();
    }, 20);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondTimeInput.binder.fieldNode.addEventListener('field-value-changed', val => {
        assert.equal(val.detail, '18:33');
        done();
      });

      /**
       * @event value-changed
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = '18:33';
      secondTimeInput.dispatchEvent(customEvent);
    }, 10);
  });

  it('should be a furo-data-time-input_test', done => {
    assert.equal(dataTimeInput.nodeName.toLowerCase(), 'furo-data-time-input');
    done();
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'minimal 3 charaters', constraint: 'min' };
    setTimeout(() => {
      dataTimeInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataTimeInput.error, true);
          assert.equal(dataTimeInput.errortext, 'minimal 3 charaters');
          done();
        }, 10);
      });
      dataTimeInput.binder.fieldNode._setInvalid(err);
    }, 20);
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            assert.equal(dataTimeInput.getAttribute('readonly'), '');
            assert.equal(dataTimeInput.getAttribute('label'), 'time input label via meta');
            done();
          }, 5);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
