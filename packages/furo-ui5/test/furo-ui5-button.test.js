import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-button', () => {
  let host;
  let btn;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-button></furo-ui5-button>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, btn] = testbind.parentNode.children;
    await host.updateComplete;
    await btn.updateComplete;
  });

  it('should be a furo-ui5-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'furo-ui5-button');
    done();
  });

  it('should have different designs', done => {
    btn.setAttribute('design', 'Negative')
    setTimeout(() => {
      assert.equal(btn.design, 'Negative');
      done();
    }, 16);
  });

  it('should be clickable', done => {
    btn.addEventListener('click', ()=>{
      done();
    })
    btn.click();
  });

  it('should have enable function', done => {
    btn.disable()
    btn.addEventListener('click', ()=>{
      done();
    })
    btn.enable();
    btn.click();
  });


  // axeReport a11y tests
  xit('a11y', () => axeReport(input));
});
