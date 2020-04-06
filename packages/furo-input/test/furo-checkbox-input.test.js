import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-checkbox-input', () => {
  let element;
  let checkField;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-checkbox-input></furo-checkbox-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    checkField = element.shadowRoot.getElementById('input');
  });

  it('should be a furo-checkbox-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-checkbox-input');
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
      assert.equal(checkField.getAttribute('disabled'), '');
      assert.equal(element.readonly, true);
      done();
    }, 5);
  });

  it('should be enablealble with method enable', done => {
    element.readonly = true;
    element.enable();
    setTimeout(() => {
      assert.equal(checkField.getAttribute('readonly'), null);
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
    assert.equal(element.value, true);
    assert.equal(checkField.value, true);
    done();
  });

  it('should be via method `check` checkable', done => {
    element.check();
    assert.equal(element.value, true);
    assert.equal(checkField.value, true);
    done();
  });

  it('should be via method `uncheck` unselectable', done => {
    element.uncheck();
    assert.equal(element.value, false);
    assert.equal(checkField.value, false);
    done();
  });

  it('should be via method `toggle` toggleable', done => {
    element.setValue(true);
    assert.equal(element.value, true);
    element.toggle();
    assert.equal(element.value, false);
    assert.equal(checkField.value, false);
    done();
  });

  it('should be via wire `--toggle` toggleable', done => {
    element.setValue(true);
    assert.equal(element.value, true);
    element._FBPTriggerWire('--toggle');
    assert.equal(element.value, false);
    done();
  });

  it('should be set value by checked', done => {
    element.checked = true;
    assert.equal(element.value, true);
    element.checked = false;
    assert.equal(element.value, false);
    done();
  });

  it('should be possible to set value when checkbox is disabled ', done => {
    element.disabled = true;
    element.toggle();
    assert.equal(element.value, true);
    assert.equal(checkField.value, true);
    done();
  });

  it('should be not possible to set value when click when the checkbox is disabled ', done => {
    element.disable();
    element.value = false;
    checkField.click();
    assert.equal(element.value, false);
    assert.equal(checkField.value, false);
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
      assert.equal(checkField.value, true);
      done();
    });
    checkField.shadowRoot.getElementById('input').click();
  });
});
