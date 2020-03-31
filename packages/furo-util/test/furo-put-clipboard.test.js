import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-put-clipboard', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-put-clipboard></furo-put-clipboard>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
    navigator.clipboard.writeText = d =>
      new Promise(resolve => {
        resolve(d);
      });
  });

  it('should be a furo-put-clipboard', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-put-clipboard');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should write setted data to clipboard', done => {
    element.addEventListener('content-putted', d => {
      assert.equal(d.detail, 'Data');
      done();
    });
    element.setData('Data');
    // should use "Data" and not "SUCCESS"
    element.trigger('SUCCESS');
  });

  it('should write to clipboard', done => {
    element.addEventListener('content-putted', d => {
      assert.equal(d.detail, 'SUCCESS');
      done();
    });
    element.trigger('SUCCESS');
  });
});
