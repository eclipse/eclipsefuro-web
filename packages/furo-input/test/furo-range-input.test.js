import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-range-input', () => {
  let element;
  let host;
  let inputField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-range-input min="1" max="2" step="0.1"></furo-range-input>
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

  it('should be a furo-range-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-range-input');
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

  it('should not accept string  value with setValue, and use the middle', done => {
    element.setValue('Test');
    assert.equal(element.value, 'Test');
    assert.equal(inputField.value, 1.5);
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

  it('should accept numeric value with setValue and round to step', done => {
    element.setValue(1.888);
    assert.equal(element.value, 1.888);
    assert.equal(inputField.value, 1.9);
    done();
  });
  it('should stick to max value with setValue too big', done => {
    element.setValue(333);
    // outside
    assert.equal(element.value, 333);
    // inside
    assert.equal(inputField.value, 2);
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
      composedPath: () => [{ value: 1337, validity: { valid: true} }],
    });
  });

  it('instantiating furo-range-input with default properties works', () => {
    assert.equal(element.tagName.toLowerCase(), 'furo-range-input');
  });
});
