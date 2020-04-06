import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-button', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-button></furo-button>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-button', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-button');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));

  it('should be able to be danger', done => {
    assert.equal(element.danger, false);
    element.setAttribute('danger', '');
    assert.equal(element.danger, true);
    done();
  });

  it('should be disablealble with method disable', done => {
    element.disable();
    setTimeout(() => {
      assert.equal(element.getAttribute('disabled'), '');
      assert.equal(element.disabled, true);
      done();
    }, 5);
  });

  it('should be enablealble with method enable', done => {
    element.readonly = true;
    element.enable();
    setTimeout(() => {
      assert.equal(element.getAttribute('disabled'), null);
      assert.equal(element.disabled, false);
      done();
    }, 5);
  });

  it('should be focusable', done => {
    element.focus();
    assert.equal(element, document.activeElement);
    done();
  });
});
