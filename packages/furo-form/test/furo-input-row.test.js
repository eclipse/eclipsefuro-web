import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-input-row', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-input-row>
            <input type="text" aria-label="first" />
            <input type="text" flex aria-label="second" />
          </furo-input-row>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-input-row', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-input-row');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should have a slot and flex contet', done => {
    const e = element.querySelectorAll('*');
    expect(e[0].scrollWidth).to.be.lt(e[1].scrollWidth);

    done();
  });

  it('should accept a empty label', done => {
    element.setAttribute('label', '');
    assert.equal(element.label, '');
    done();
  });

  it('should accept a new label', done => {
    element.setAttribute('label', 'hi');
    assert.equal(element.label, 'hi');
    done();
  });
  it('should display the default label', done => {
    assert.equal(element.label, 'set the label!');
    done();
  });
});
