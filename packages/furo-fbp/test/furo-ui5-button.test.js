import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '@furo/ui5/src/furo-ui5-button.js';
import '@furo/fbp/src/flow-bind.js';

describe('furo-ui5-button', () => {
  let host;
  let btn;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-button @-click="--clicked">Something</furo-ui5-button>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, btn] = testbind.parentNode.children;
    await host.updateComplete;
    await btn.updateComplete;
  });

  it('passes the a11y audit', async () => {
    await expect(btn).shadowDom.to.be.accessible();
  });

  it('should be a furo-ui5-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    expect(btn.nodeName).to.equal('FURO-UI5-BUTTON');
    done();
  });

  it('should have different designs', done => {
    btn.setAttribute('design', 'Negative');
    setTimeout(() => {
      expect(btn).attr('design', 'Negative');
      expect(btn.design).to.equal('Negative');
      done();
    }, 16);
  });

  it('should be clickable', done => {
    host._FBPAddWireHook('--clicked', () => {
      done();
    });

    btn.click();
  });

  it('should not be clickable', done => {
    btn.disable();
    expect(btn).attr('disabled', 'true');
    done();
  });

  it('should have enable function', done => {
    btn.disable();
    btn.addEventListener('click', () => {
      done();
    });
    btn.enable();
    btn.click();
  });

  it('should not be hidden', done => {
    btn.hide();
    expect(btn).attribute('hidden', '');
    btn.show();
    expect(btn).not.attribute('hidden', '');
    done();
  });
});
