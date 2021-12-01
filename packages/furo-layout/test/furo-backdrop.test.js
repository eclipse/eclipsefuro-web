import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks

describe('furo-backdrop', () => {
  let backdropDisplay;
  let backdrop;
  let content;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-backdrop-display>
            <furo-backdrop ƒ-show="--clk">
              <div>content</div>
            </furo-backdrop>
            <div @-click="--clk">content</div>
          </furo-backdrop-display>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, backdropDisplay] = testbind.parentNode.children;
    await host.updateComplete;
    await backdropDisplay.updateComplete;
    backdrop = backdropDisplay.children[0];
    content = backdropDisplay.children[1];
    await backdrop.updateComplete;
  });

  it('should closes the backdrop on close request on initiator', done => {
    backdrop.addEventListener('closed', () => {
      done();
    });
    backdrop.addEventListener('opened', () => {
      backdrop.close();
    });
    content.click();
  });

  it('should closes the backdrop on click on the backgrount', done => {
    backdrop.addEventListener('closed', () => {
      done();
    });
    backdrop.addEventListener('opened', () => {
      backdropDisplay.shadowRoot.getElementById('backdrop').click();
    });
    content.click();
  });
  it('should closes the backdrop on close request on display', done => {
    backdrop.addEventListener('closed', () => {
      done();
    });
    backdrop.addEventListener('opened', () => {
      backdropDisplay.close();
    });
    content.click();
  });

  it('should activate the backdrop on content click', done => {
    backdrop.addEventListener('opened', () => {
      done();
    });
    content.click();
  });

  it('should be a furo-backdrop-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(backdropDisplay.nodeName.toLowerCase(), 'furo-backdrop-display');
    done();
  });

  it('should be a furo-backdrop ', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(backdrop.nodeName.toLowerCase(), 'furo-backdrop');
    done();
  });
});
