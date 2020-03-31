import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import {axeReport} from 'pwa-helpers/axe-report.js';
import '@furo/util/src/furo-catalog.js';
import "@furo/fbp/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-pretty-json', () => {

  let element;
  let host;

  beforeEach(async () => {
    let testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-pretty-json></furo-pretty-json>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    element = testbind.parentNode.children[1];
    await element.updateComplete;
  });

  it('should be a furo-pretty-json', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), "furo-pretty-json");
    done()
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));


  it('should accept json', (done) => {
    element.injectData({"a":1, "b": true, "c": 12});
    let content = element.shadowRoot.querySelector('#content').innerHTML;
    assert.equal(content.length, 196);
    done();
  });

  it('should reset innerHTML if injected data is empty', (done) => {
    element.injectData({"a": 2});

    element.injectData(undefined);
    assert.equal(element.shadowRoot.querySelector('#content').innerHTML, '');
    done();
  });


});
