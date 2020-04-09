import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-key-filter', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-key-filter keys="ArrowUp"></furo-key-filter>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    await host.updateComplete;
    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should be a furo-key-filter', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-key-filter');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should filter', done => {
    element.addEventListener('matched', d => {
      assert.equal(d.detail.key, 'ArrowUp');
      done();
    });

    element.filter({ key: 'Enter' });
    element.filter({ key: 'Enter' });
    element.filter({ key: 'ArrowUp' });
  });
});
