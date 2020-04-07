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
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataSearchInput.updateComplete;
    await secondSearchInput.updateComplete;
    await invalidSearchInput.updateComplete;
    await dataObject.updateComplete;
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
      assert.equal(invalidSearchInput.field, undefined);
      // valid binding
      assert.equal(secondSearchInput.field._isValid, true);
      done();
    }, 10);
  });

  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondSearchInput._theInputElement.getAttribute('hint'), 'FromTPL');
      done();
    }, 10);
  });
  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondSearchInput._theInputElement.getAttribute('label'), 'FromTPL');
      done();
    }, 10);
  });
  it('should receive value with bind', done => {
    dataSearchInput._FBPAddWireHook('--value', val => {
      assert.equal(val, 'YES');
      done();
    });
    dataObject.data.name._value = 'YES';
  });
  it('should bind the field description', done => {
    setTimeout(() => {
      assert.equal(dataSearchInput._theInputElement.getAttribute('label'), 'Name');
      done();
    }, 10);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondSearchInput._FBPAddWireHook('--value', val => {
        assert.equal(val, 'newSearch');
        done();
      });

      dataSearchInput._FBPTriggerWire('--valueChanged', 'newSearch');
    }, 10);
  });

  it('should be a furo-data-search-input_test', done => {
    assert.equal(dataSearchInput.nodeName.toLowerCase(), 'furo-data-search-input');
    done();
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'minimal 3 charaters', constraint: 'min' };
    dataSearchInput.field.addEventListener('field-became-invalid', () => {
      setTimeout(() => {
        assert.equal(dataSearchInput.error, true);
        assert.equal(
          dataSearchInput._theInputElement.getAttribute('errortext'),
          'minimal 3 charaters',
        );
        done();
      }, 25);
    });
    dataSearchInput.field._setInvalid(err);
  });
});
