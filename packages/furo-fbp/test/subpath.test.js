import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('subpath', () => {
  let element;
  let host;
  let receiver;
  let sender;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <div id="hull">
            <div
              id="sender"
              @-new-data="--fromSender(*.detail.a.b.c), --onReceiver"
              @-sendarray="--sendArray(*.detail.a.b.1.x.0)"
            >
              sender
            </div>
            <div
              id="receiver"
              ƒ-test="--fromSender"
              ƒ-onreceiver="--onReceiver(*.a.b)"
              ƒ-onreceiverarray="--onReceiver(*.a.b.2)"
              ƒ-sendarray="--sendArray"
            >
              receiver
            </div>
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

  it('should send subpath of event', done => {
    receiver.test = e => {
      assert.equal(e, 3);
      done();
    };

    const customEvent = new Event('new-data');
    customEvent.detail = { a: { b: { c: 3 } } };
    sender.dispatchEvent(customEvent);
  });

  it('should pass subpath on e.detail.a.b => (*.a.b)', done => {
    receiver.onreceiver = e => {
      assert.equal(e.c, 3);
      done();
    };

    const customEvent = new Event('new-data');
    customEvent.detail = { a: { b: { c: 3 } } };
    sender.dispatchEvent(customEvent);
  });

  it('should pass subpath  Array on e.detail.a.b => (*.a.b.2)', done => {
    receiver.onreceiverarray = e => {
      assert.equal(e, 10);
      done();
    };

    const customEvent = new Event('new-data');
    customEvent.detail = { a: { b: [8, 9, 10, 11] } };
    sender.dispatchEvent(customEvent);
  });

  it('should send subpath  Array on e.detail.a.b.1.x.0 => (*.a.b.1.x.0)', done => {
    receiver.sendarray = e => {
      assert.equal(e, 9);
      done();
    };

    const customEvent = new Event('sendarray');
    customEvent.detail = { a: { b: [8, { x: [9, 10] }, 10, 11] } };
    sender.dispatchEvent(customEvent);
  });
});
