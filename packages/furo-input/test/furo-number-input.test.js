import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-number-input', () => {
  let element;
  let host;
  let inputField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-number-input min="1" max="2" step="0.1"></furo-number-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    inputField = element.shadowRoot.querySelector('input');
  });

  it('should be a furo-number-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-number-input');
    assert.equal(inputField.nodeName.toLowerCase(), 'input');
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

  it('should have a min on the inputField', done => {
    assert.equal(inputField.getAttribute('min'), 1);
    done();
  });
  it('should have a max on the inputField', done => {
    assert.equal(inputField.getAttribute('max'), 2);
    done();
  });

  it('should have a step on the inputField', done => {
    assert.equal(inputField.getAttribute('step'), 0.1);
    done();
  });

  it('should not accept string  value with setValue', done => {
    element.setValue('Test');
    assert.equal(element.value, 'Test');
    assert.equal(inputField.value, '');
    done();
  });

  it('should be disablealble with method disable', done => {
    element.disable();
    setTimeout(() => {
      assert.equal(inputField.getAttribute('disabled'), '');
      assert.equal(element.disabled, true);
      done();
    }, 5);
  });

  it('should be enablealble with method enable', done => {
    element.disabled = true;
    element.enable();
    setTimeout(() => {
      assert.equal(inputField.getAttribute('disabled'), null);
      assert.equal(element.disabled, false);
      done();
    }, 5);
  });

  it('should accept numeric value with setValue', done => {
    element.setValue(123);
    assert.equal(element.value, 123);
    assert.equal(inputField.value, 123);
    done();
  });

  it('should be focusable', done => {
    element.focus();
    assert.equal(element, document.activeElement);
    done();
  });
  it('should emit value-changed on every keystroke', done => {
    element.addEventListener('value-changed', () => {
      assert.equal(element.value, 1337);
      done();
    });
    element._FBPTriggerWire('--inputInput', {
      composedPath: () => [{ value: 1337, validity: { valid: true } }],
    });
  });

  it('should emit event `input-invalid` with validity object by invalid input', done => {
    element.addEventListener('input-invalid', e => {
      assert.equal(JSON.stringify(e.detail), JSON.stringify({ valid: false }));
      done();
    });
    element._FBPTriggerWire('--inputInput', {
      composedPath: () => [{ value: 'd', validity: { valid: false } }],
    });
  });

  it('instantiating furo-number-input with default properties works', () => {
    assert.equal(element.tagName.toLowerCase(), 'furo-number-input');
  });
});
