import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-color-input', () => {
  let element;
  let host;
  let inputField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-color-input value="#FEA233"></furo-color-input>
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

  it('should be a furo-color-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-color-input');
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

  it('should not accept string  value with setValue', done => {
    element.setValue('#FEA123');
    assert.equal(element.value, '#FEA123');
    assert.equal(inputField.value, '#fea123');
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

  it('should accept string value with setValue', done => {
    element.setValue('#FFFFFF');
    setTimeout(() => {
      assert.equal(element.value, '#FFFFFF');
      assert.equal(inputField.value, '#ffffff');
      done();
    }, 5);
  });

  it('should be focusable', done => {
    element.focus();
    assert.equal(element, document.activeElement);
    done();
  });
  it('should emit value-changed on changes', done => {
    element.addEventListener('value-changed', () => {
      assert.equal(element.value, '#FFFFFF');
      done();
    });
    element._FBPTriggerWire('--inputInput', {
      composedPath: () => [{ value: '#FFFFFF', validity: { valid: true } }],
    });
  });
});
