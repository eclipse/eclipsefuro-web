import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('spreading', () => {
  let element;
  let host;
  let receiver;
  let sender;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <div id="hull">
            <div id="sender" @-new-data="--data-received">sender</div>
            <div id="receiver" ƒ-spread="--data-received">receiver</div>
          </div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    receiver = element.querySelector('#receiver');
    sender = element.querySelector('#sender');
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should assign the correct elements', done => {
    assert.equal(element.id, 'hull');
    assert.equal(receiver.id, 'receiver');
    assert.equal(sender.id, 'sender');
    done();
  });

  it('should spread array to receiver.spread()', done => {
    // methods with multiple arguments can receive wires with an argument array.

    receiver.spread = (a, b) => {
      receiver.c = a * b;
    };
    const customEvent = new Event('new-data');
    customEvent.detail = [4, 6];
    sender.dispatchEvent(customEvent);
    assert.equal(receiver.c, 24);
    done();
  });
});
