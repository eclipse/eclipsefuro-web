import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/flow-bind.js'; // for testing with wires and hooks
import 'sinon/pkg/sinon.js';

describe('fbp-fn-debugging.test', () => {
  let element;
  let host;
  let receiver;
  let sender;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <div id="hull">
            <div id="sender" at-click="--data-received">sender</div>
            <div id="receiver" fn-click="--data-received">receiver</div>
          </div>
        </template>
      </flow-bind>
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

  it('should debug a wire', done => {
    host._FBPDebug('--data-received');

    // "spy" on `console.log()`
    // eslint-disable-next-line no-undef
    const spy = sinon.spy(console, 'log');
    sender.click(9);
    assert(spy.calledWith(0));

    host._FBPTriggerWire('--data-received', 'data');
    assert(spy.calledWith('data'));

    // restore the original function
    spy.restore();
    done();
  });

  it('should debug a wire', done => {
    host._FBPTraceWires();

    // "spy" on `console.log()`
    // eslint-disable-next-line no-undef
    const spy = sinon.spy(console, 'log');
    sender.click(9);
    assert(spy.calledWith(0));

    host._FBPTriggerWire('--data-received', 'data');
    assert(spy.calledWith('data'));

    // restore the original function
    spy.restore();
    done();
  });
});
