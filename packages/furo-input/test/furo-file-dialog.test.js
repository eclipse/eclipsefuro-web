import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-file-dialog', () => {
  let element;
  let host;
  let inputField;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-file-dialog accept=".txt"></furo-file-dialog>
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

  it('should be a furo-file-dialog', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-file-dialog');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));

  it('should be able to upload multiple files', done => {
    element.multiple = true;
    setTimeout(() => {
      assert.equal(inputField.getAttribute('multiple'), 'true');
      done();
    }, 5);
  });

  it('should be possible to set capture', done => {
    element.capture = 'user';
    setTimeout(() => {
      assert.equal(inputField.getAttribute('capture'), 'user');
      done();
    }, 5);
  });

  it('instantiating furo-file-dialog with default properties works', () => {
    assert.equal(element.tagName.toLowerCase(), 'furo-file-dialog');
  });
});
