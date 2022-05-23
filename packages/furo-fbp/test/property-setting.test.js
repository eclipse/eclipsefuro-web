import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/flow-bind.js'; // for testing with wires and hooks

describe('property-setting', () => {
  let element;
  let host;
  let receiver;
  let sender;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <div id="hull">
            <div
              id="sender"
              @-new-data="--data-received, --sub, --rawEvent(*), --rawSub(*.other.yyyyy.0), ((some.yyyyy))"
              @-method-test="--method"
            >
              sender
            </div>
            <div
              id="receiver"
              set-prop="--data-received"
              set-subprop="--sub(*.b)"
              set-raw="--rawEvent(*.other)"
              set-rawsub="--rawSub(*.a.2)"
              ƒ-method-test="--method(*.sub)"
            >
              receiver
            </div>
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

  it('should set the property prop of receiver to e.detail', done => {
    const customEvent = new Event('new-data', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = { a: 1, b: 4 };
    sender.dispatchEvent(customEvent);

    assert.equal(receiver.prop.b, 4);
    done();
  });

  it('should set the property subprop of receiver to e.detail.b', done => {
    const customEvent = new Event('new-data', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = { a: 1, b: 4 };
    sender.dispatchEvent(customEvent);
    assert.equal(receiver.subprop, 4);
    done();
  });

  it('should set the property raw of receiver from raw event', done => {
    const customEvent = new Event('new-data', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = { a: 1, b: 4 };
    customEvent.other = { xxxxx: 1, yyyyy: 4 };
    sender.dispatchEvent(customEvent);
    assert.equal(receiver.raw.yyyyy, 4);
    done();
  });

  it('should send e.other and set e.other.yyyyy to receiver', done => {
    receiver.methodTest = e => {
      assert.equal(e, '----');
      done();
    };

    const customEvent = new Event('method-test', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = { sub: '----' };
    sender.dispatchEvent(customEvent);
  });
});
