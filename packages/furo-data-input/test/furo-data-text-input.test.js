import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-text-input', () => {
  let dataTextInput;
  let host;
  let dataObject;
  let secondTextInput;
  let invalidBoundTextInput;
  let deeplink;
  let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-text-input
            ƒ-bind-data="--entity(*.data.furo_data_text_input)"
          ></furo-data-text-input>
          <furo-data-text-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.data.furo_data_text_input)"
            readonly
            required
            @-value-changed="--textChanged"
          ></furo-data-text-input>

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

          <furo-data-text-input ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-text-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      dataTextInput,
      secondTextInput,
      dataObject,
      deeplink,
      entityAgent,
      invalidBoundTextInput,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataTextInput.updateComplete;
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataTextInput));

  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondTextInput.getAttribute('label'), 'FromTPL');
      done();
    }, 10);
  });

  it('should be a furo-data-text-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataTextInput.nodeName.toLowerCase(), 'furo-data-text-input');
    assert.equal(secondTextInput.nodeName.toLowerCase(), 'furo-data-text-input');
    assert.equal(invalidBoundTextInput.nodeName.toLowerCase(), 'furo-data-text-input');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidBoundTextInput.binder.fieldNode, undefined);
      // valid binding
      assert.equal(dataTextInput.binder.fieldNode._isValid, true);
      done();
    }, 10);
  });

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondTextInput.getAttribute('hint'), 'FromTPL');
      done();
    }, 10);
  });

  it('should override required field ', done => {
    assert.equal(secondTextInput.required, true);
    done();
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-changed',
        () => {
          secondTextInput._FBPAddWireHook('--value', val => {
            assert.equal(
              val,
              'hallo test with loads of text to show the overflow. hallo test with loads of text to show the overflow.',
            );
            done();
          });
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should set disabled via disable method', done => {
    dataTextInput.disable();
    assert.equal(dataTextInput.disabled, true);
    done();
  });

  it('should remove disabled via enable method', done => {
    dataTextInput.enable();
    assert.equal(dataTextInput.disabled, false);
    done();
  });

  it('should bind the field label, hint ', done => {
    setTimeout(() => {
      assert.equal(dataTextInput.getAttribute('label'), 'text_input**');
      assert.equal(dataTextInput.getAttribute('hint'), 'hint**');
      done();
    }, 10);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondTextInput.binder.fieldNode.addEventListener('field-value-changed', val => {
        assert.equal(val.detail, 'newText');
        done();
      });

      /**
       * @event value-changed
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = 'newText';
      dataTextInput.dispatchEvent(customEvent);
    }, 10);
  });

  it('should be a furo-data-text-input_test', done => {
    assert.equal(dataTextInput.nodeName.toLowerCase(), 'furo-data-text-input');
    done();
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'minimal 3 charaters', constraint: 'min' };
    setTimeout(() => {
      dataTextInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataTextInput.error, true);
          assert.equal(dataTextInput.errortext, 'minimal 3 charaters');
          done();
        }, 10);
      });
      dataTextInput.binder.fieldNode._setInvalid(err);
    }, 10);
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            assert.equal(dataTextInput.disabled, false);
            assert.equal(dataTextInput.getAttribute('label'), 'text input label via meta');
            done();
          }, 5);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
