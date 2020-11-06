import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-select-input', () => {
  let element;
  let host;
  let inputField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-select-input></furo-select-input>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    inputField = element.shadowRoot.querySelector('select');
  });

  it('should be a furo-select-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-select-input');
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
    element.setValue('Test');
    assert.equal(element.value, 'Test');
    assert.equal(inputField.value, '');
    done();
  });

  it('should be disablealble with method disable', done => {
    element.disable();
    setTimeout(() => {
      assert.equal(inputField.getAttribute('disabled'), '');

      done();
    }, 5);
  });

  it('should be enablealble with method enable', done => {
    element.readonly = true;
    element.enable();
    setTimeout(() => {
      assert.equal(inputField.getAttribute('disabled'), null);

      done();
    }, 5);
  });

  it('should accept numeric value with setValue', done => {
    element.setOptions([
      { id: 23, label: 'AAA', selected: true },
      { id: 66, label: 'DDA', selected: false },
      { id: 667, label: 'DDB', selected: true },
      { id: 668, label: 'DDC', selected: false },
    ]);
    element.setValue(66);
    assert.equal(element.value, '66');
    assert.equal(inputField.value, 66);
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
      composedPath: () => [{ value: 1337, validity: {valid: true} }],
    });
  });

  it('instantiating furo-select-input with default properties works', () => {
    assert.equal(element.tagName.toLowerCase(), 'furo-select-input');
  });

  it('should support multiple and size attributes', done => {
    element.multiple = true;
    element.size = 5;

    setTimeout(() => {
      assert.equal(element.shadowRoot.querySelector('select').multiple, true);
      assert.equal(element.shadowRoot.querySelector('select').size, 5);
      done();
    }, 10);
  });

  it('should support multiple selection', done => {
    element.multiple = true;
    element.setOptions([
      { id: 23, label: 'AAA', selected: true },
      { id: 66, label: 'DDA', selected: false },
      { id: 667, label: 'DDB', selected: true },
      { id: 668, label: 'DDC', selected: false },
    ]);

    setTimeout(() => {
      const arrValue = [];
      element.selectOptions.forEach(o => {
        if (o.selected) {
          arrValue.push(o.id);
        }
      });
      done();
    }, 20);
  });
});
