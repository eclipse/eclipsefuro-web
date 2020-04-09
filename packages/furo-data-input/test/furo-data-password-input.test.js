import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-password-input', () => {
  let dataPasswordInput;
  let host;
  let dataObject;
  let secondPasswordInput;
  let invalidPasswordInput;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object type="person.Person" @-object-ready="--entity"></furo-data-object>
          <furo-data-password-input ƒ-bind-data="--entity(*.name)"></furo-data-password-input>
          <furo-data-password-input
            hint="FromTPL"
            label="FromTPL"
            ƒ-bind-data="--entity(*.name)"
            @-value-changed="--passwordChanged"
          ></furo-data-password-input>

          <furo-data-password-input
            ƒ-bind-data="--entity(*.invalidBinding)"
          ></furo-data-password-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      dataObject,
      dataPasswordInput,
      secondPasswordInput,
      invalidPasswordInput,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await dataObject.updateComplete;
    await dataPasswordInput.updateComplete;
    await secondPasswordInput.updateComplete;
    await invalidPasswordInput.updateComplete;
  });

  it('should be a furo-data-password-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(dataPasswordInput.nodeName.toLowerCase(), 'furo-data-password-input');
    assert.equal(secondPasswordInput.nodeName.toLowerCase(), 'furo-data-password-input');
    assert.equal(invalidPasswordInput.nodeName.toLowerCase(), 'furo-data-password-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataPasswordInput));

  it('should log invalid bindings', done => {
    setTimeout(() => {
      // invalid binding
      assert.equal(invalidPasswordInput.field, undefined);
      // valid binding
      assert.equal(secondPasswordInput.field._isValid, true);
      done();
    }, 5);
  });
  it('should override hints ', done => {
    setTimeout(() => {
      assert.equal(secondPasswordInput._theInputElement.getAttribute('hint'), 'FromTPL');
      done();
    }, 0);
  });
  it('should override labels ', done => {
    setTimeout(() => {
      assert.equal(secondPasswordInput._theInputElement.getAttribute('label'), 'FromTPL');
      done();
    }, 0);
  });
  it('should receive value with bind', done => {
    dataPasswordInput._FBPAddWireHook('--value', val => {
      assert.equal(val, 'YES');
      done();
    });
    dataObject.data.name._value = 'YES';
  });
  it('should bind the field description', done => {
    setTimeout(() => {
      assert.equal(dataPasswordInput._theInputElement.getAttribute('label'), 'Name**');
      done();
    }, 0);
  });

  it('should update the entity when values changed', done => {
    // ignore the init values
    setTimeout(() => {
      secondPasswordInput._FBPAddWireHook('--value', val => {
        assert.equal(val, 'newPassword');
        done();
      });

      dataPasswordInput._FBPTriggerWire('--valueChanged', 'newPassword');
    }, 10);
  });

  it('should listen field-became-invalid event add set error', done => {
    const err = { description: 'max 23', constraint: 'max' };
    setTimeout(() => {
      dataPasswordInput.field.addEventListener('field-became-invalid', () => {
        setTimeout(() => {
          assert.equal(dataPasswordInput.error, true);
          assert.equal(dataPasswordInput._theInputElement.getAttribute('errortext'), 'max 23');
          done();
        }, 10);
      });
      dataPasswordInput.field._setInvalid(err);
    }, 20);
  });
});
