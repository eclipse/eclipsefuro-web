import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-search-input', () => {
  let dataSearchInput;
  let host;
  let dataObject;
  let secondSearchInput;
  let invalidSearchInput;
  let deepLink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object type="person.Person" @-object-ready="--entity"></furo-data-object>
          <furo-data-search-input ƒ-bind-data="--entity(*.name)"></furo-data-search-input>
          <furo-data-search-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.name)"
            @-value-changed="--searchChanged"
          ></furo-data-search-input>

          <furo-data-search-input ƒ-bind-data="--entity(*.invalidBinding)"></furo-data-search-input>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      dataObject,
      dataSearchInput,
      secondSearchInput,
      invalidSearchInput,
      deepLink,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataSearchInput.updateComplete;
    await secondSearchInput.updateComplete;
    await invalidSearchInput.updateComplete;
    await dataObject.updateComplete;
    await deepLink.updateComplete;
  });

  it('should be a furo-data-search-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataSearchInput.nodeName.toLowerCase(), 'furo-data-search-input');
    assert.equal(secondSearchInput.nodeName.toLowerCase(), 'furo-data-search-input');
    assert.equal(invalidSearchInput.nodeName.toLowerCase(), 'furo-data-search-input');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataSearchInput));

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidSearchInput.binder.fieldNode, undefined);
      // valid binding
      assert.equal(secondSearchInput.binder.fieldNode._isValid, true);
      done();
    }, 10);
  });

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondSearchInput.getAttribute('hint'), 'FromTPL');
      done();
    }, 10);
  });
  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondSearchInput.getAttribute('label'), 'FromTPL');
      done();
    }, 10);
  });

  it('should receive value with bind', done => {
    dataObject.data.name._value = 'YES';
    setTimeout(() => {
      assert.equal(dataSearchInput.binder.fieldNode._value, 'YES');
      done();
    }, 10);
  });

  it('should bind the field description', done => {
    setTimeout(() => {
      assert.equal(dataSearchInput.getAttribute('label'), 'Name**');
      done();
    }, 10);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondSearchInput.binder.fieldNode.addEventListener('field-value-changed', val => {
        assert.equal(val.detail, 'newText');
        done();
      });

      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = 'newText';
      secondSearchInput.dispatchEvent(customEvent);
    }, 10);
  });

  it('should be a furo-data-search-input_test', done => {
    assert.equal(dataSearchInput.nodeName.toLowerCase(), 'furo-data-search-input');
    done();
  });

  it('should listen field-became-invalid event add set error', done => {
    setTimeout(() => {
      const err = { description: 'minimal 3 charaters', constraint: 'min' };
      dataSearchInput.binder.fieldNode.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataSearchInput.error, true);
          assert.equal(dataSearchInput.errortext, 'minimal 3 charaters');
          done();
        }, 10);
      });
      dataSearchInput.binder.fieldNode._setInvalid(err);
    }, 10);
  });
});
