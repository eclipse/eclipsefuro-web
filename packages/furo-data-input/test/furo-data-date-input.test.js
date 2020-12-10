import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-date-input', () => {
  let dataDateInput;
  let host;
  let dataObject;
  let secondDateInput;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-date-input
            ƒ-bind-data="--entityReady(*.data.furo_data_date_input)"
          ></furo-data-date-input>
          <furo-data-date-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entityReady(*.data.furo_data_date_input_google)"
            @-value-changed="--textChanged"
          ></furo-data-date-input>

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
    [, dataDateInput, secondDateInput, dataObject, deeplink] = testbind.parentNode.children;
    await host.updateComplete;
    await dataDateInput.updateComplete;
    await dataObject.updateComplete;
    await secondDateInput.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-date-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataDateInput.nodeName.toLowerCase(), 'furo-data-date-input');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(secondDateInput.nodeName.toLowerCase(), 'furo-data-date-input');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataDateInput));

  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondDateInput.getAttribute('label'), 'FromTPL');
      done();
    }, 0);
  });

  it('should receive date (ISO 8601 d) value with bind', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(dataDateInput.binder.fieldValue, '2019-02-22');
        done();
      }, 0);
    });

    deeplink.qpIn({ exp: 1 });
  });

  it('should receive date (google.type.Date) value with bind', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(
          JSON.stringify(secondDateInput.binder.fieldValue),
          '{"year":2020,"month":12,"day":31}',
        );
        done();
      }, 0);
    });

    deeplink.qpIn({ exp: 1 });
  });

  it('should be a furo-data-date-input_test', done => {
    assert.equal(dataDateInput.nodeName.toLowerCase(), 'furo-data-date-input');
    done();
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'step 3', constraint: 'min' };
    setTimeout(() => {
      dataDateInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataDateInput.error, true);
          assert.equal(dataDateInput.errortext, 'step 3');
          done();
        }, 15);
      });
      dataDateInput.binder.fieldNode._setInvalid(err);
    }, 15);
  });

  it('should set meta via response meta', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      dataObject.addEventListener(
        'data-injected',
        () => {
          setTimeout(() => {
            assert.equal(dataDateInput.getAttribute('readonly'), '');
            assert.equal(secondDateInput.getAttribute('readonly'), '');
            assert.equal(dataDateInput.label, 'date input label via meta');
            done();
          }, 5);
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
