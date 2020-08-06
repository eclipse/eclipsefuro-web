import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-radio-button-input', () => {
  let element;
  let host;
  let radioField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-radio-button-input></furo-radio-button-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    radioField = element.shadowRoot.getElementById('input');
  });

  it('should be a furo-radio-button-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-radio-button-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));

  it('should be possible to set a error with setError', done => {
    element.setError('Text from outside');
    assert.equal(element.errortext, 'Text from outside');
    assert.equal(element.error, true);
    done();
  });

  it('should clear the errorstate and resume to the initial errortext', done => {
    element.errortext = 'Initial Error Text';
    element.setError('Text from outside');
    element.clearError();
    assert.equal(element.errortext, 'Initial Error Text');
    assert.equal(element.error, false);
    done();
  });

  it('should be disablealble with method disable', done => {
    element.disable();
    setTimeout(() => {
      assert.equal(radioField.getAttribute('disabled'), '');
      assert.equal(element.readonly, true);
      done();
    }, 5);
  });

  it('should be enablealble with method enable', done => {
    element.readonly = true;
    element.enable();
    setTimeout(() => {
      assert.equal(radioField.getAttribute('readonly'), null);
      assert.equal(element.readonly, false);
      done();
    }, 5);
  });

  xit('a11y', () => axeReport(fixture('Basic')));

  it('should be focusable', done => {
    element.focus();
    assert.equal(element, document.activeElement);
    done();
  });

  it('should accept a value with setValue', done => {
    element.setValue(true);
    assert.equal(radioField.value, true);
    done();
  });

  it('should be via method `check` checkable', done => {
    element.check();
    assert.equal(radioField.value, true);
    done();
  });

  it('should be via method `uncheck` unselectable', done => {
    element.uncheck();
    assert.equal(radioField.value, false);
    done();
  });

  it('should be via method `toggle` toggleable', done => {
    element.setValue(true);
    assert.equal(radioField.value, true);
    element.toggle();
    setTimeout(()=>{
      assert.equal(radioField.shadowRoot.getElementById("input").value, "on");
      done();

    },1)
  });

  it('should be checked via wire `--labelClicked` if it was previously unchecked', done => {
    element.setValue(false);
    assert.equal(radioField.value, false);
    element._FBPTriggerWire('--labelClicked');
    assert.equal(radioField.value, true);
    done();
  });

  it('should not be checked via wire `--labelClicked` if it was previously already checked', done => {
    element.setValue(true);
    assert.equal(radioField.value, true);
    element._FBPTriggerWire('--labelClicked');
    assert.equal(radioField.value, true);
    done();
  });

  it('should be set value by checked', done => {
    element.checked = true;
    assert.equal(radioField.value, true);
    element.checked = false;
    assert.equal(radioField.value, false);
    done();
  });

  it('should be possible to set value when checkbox is disabled ', done => {
    element.disabled = true;
    element.toggle();
    assert.equal(radioField.value, true);
    done();
  });

  it('should be not possible to set value when click when the checkbox is disabled ', done => {
    element.disable();
    element.value = false;
    radioField.click();
    assert.equal(element.value, false);
    assert.equal(radioField.value, false);
    done();
  });

  it('should emit value-changed when value changed', done => {
    element.addEventListener('value-changed', () => {
      assert.equal(element.value, true);
      done();
    });
    element.setValue(true);
  });

  it('should emit value-changed when checkbox via click checked', done => {
    element.addEventListener('value-changed', () => {
      assert.equal(radioField.value, true);
      done();
    });
    radioField.shadowRoot.getElementById('input').click();
  });
});
