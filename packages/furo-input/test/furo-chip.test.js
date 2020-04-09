import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-chip', () => {
  let element;
  let chipInputField;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-chip></furo-chip>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    chipInputField = element.shadowRoot.getElementById('input');
  });

  it('should be a furo-chip', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-chip');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));

  it('should be disablealble with attribute disable', done => {
    element.disabled = true;
    setTimeout(() => {
      assert.equal(chipInputField.getAttribute('disabled'), '');
      done();
    }, 5);
  });

  it('should be selected with attribute selected', done => {
    element.selected = true;
    setTimeout(() => {
      assert.equal(chipInputField.getAttribute('checked'), '');
      done();
    }, 5);
  });

  xit('a11y', () => axeReport(fixture('Basic')));

  it('should be focusable', done => {
    element.focus();
    assert.equal(element, document.activeElement);
    done();
  });

  it('should accept a value with setValue and the input should be checked when value is true or be unchecked when value is false', done => {
    element.setValue(true);
    assert.equal(element.value, true);
    assert.equal(element.selected, true);

    element.setValue(false);
    assert.equal(element.value, false);
    assert.equal(element.selected, false);
    setTimeout(() => {
      assert.equal(chipInputField.checked, false);
      done();
    }, 5);
  });

  it('should be via method `select` selectbar', done => {
    element.select();
    assert.equal(element.value, true);
    assert.equal(element.selected, true);
    setTimeout(() => {
      assert.equal(chipInputField.checked, true);
      done();
    }, 5);
  });

  it('should be via method `uncheck` unselectable', done => {
    element.deselect();
    assert.equal(element.value, false);
    assert.equal(element.selected, false);
    setTimeout(() => {
      assert.equal(chipInputField.checked, false);
      done();
    }, 5);
  });

  it('should be possible to set value when chip is disabled ', done => {
    element.disabled = true;
    element.toggle();
    assert.equal(element.value, true);
    assert.equal(chipInputField.checked, true);
    done();
  });

  it('should emit value-changed when value changed', done => {
    element.addEventListener('value-changed', () => {
      assert.equal(element.value, true);
      done();
    });
    element.setValue(true);
  });

  it('should unfocuse when received wire `--focusOutReceived`', done => {
    element._FBPTriggerWire('--focusOutReceived', {});
    assert.equal(element.focused, false);
    done();
  });

  it('should focuse when received wire `--focusReceived`', done => {
    element._FBPTriggerWire('--focusReceived');
    assert.equal(element.focused, true);
    done();
  });
});
