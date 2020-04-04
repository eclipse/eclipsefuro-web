import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-vertical-scroller', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-vertical-scroller></furo-vertical-scroller>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-vertical-scroller', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-vertical-scroller');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));
});
