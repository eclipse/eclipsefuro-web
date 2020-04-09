/**
 * Intellij live template for a test
 * Variables
 * ELNAME  fileNameWithoutExtension
 */
import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks

describe('$ELNAME$', () => {

  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <$ELNAME$></$ELNAME$>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a $ELNAME$', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "$ELNAME$");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));



});
