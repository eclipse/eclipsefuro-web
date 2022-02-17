import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/flow-bind.js'; // for testing with wires and hooks

describe('flow-bind', () => {
  let element;

  let btn;
  let div;

  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <flow-bind>
            <template>
              <button on-click="--clk"></button>
              <div fn-done="--clk">x</div>
            </template>
          </flow-bind>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    [, , btn, div] = element.parentNode.children;
    testbind;
  });

  it('should be a flow-bind', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'flow-bind');
    assert.equal(btn.nodeName.toLowerCase(), 'button');
    assert.equal(div.nodeName.toLowerCase(), 'div');
    done();
  });

  it('click should call done on div', done => {
    assert.equal(div.innerText, 'x');
    div.done = () => {
      done();
    };
    btn.click();
  });
});
