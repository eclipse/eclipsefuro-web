import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '../src/flow-bind.js'; // for testing with wires and hooks

describe('hooks-fn', () => {
  let host;
  let btn;
  let dd;
  let xx;
  let bubblebtn;
  let parent;
  let bubble;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <button id="btn" on-click="--clk"></button>
          <div id="dd" fn-done="--clk" on-dummy="--clk">x</div>
          <div
            id="xx"
            fn-dummy="--clk"
            fn-dummy-camel="--clk"
            fn-subprop="--subProperty(*.b)"
            on-firesub="^^subbubble(*.detail.ccc), ^subnonbubble(*.detail.eee), -^subhost(*.detail.ccc.xx)"
          >
            dummy
          </div>

          <button id="bubblebtn" on-click="--bubble"></button>

          <div
            id="bubble"
            fn-hit="--bubble"
            on-hitted="((propp)),--raw(*), --subProperty(subproperty), --data(id), ^prop(prop),^fire, ^^testEvent,^^fireBubbleData(id), -^fire-on-host-with-data, -^fire-on-host-with-data(id),:STOP,:PREVENTDEFAULT"
            fn-sefl="oo"
          >
            dummy
          </div>

          <script></script>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    parent = testbind.parentNode;
    [, btn, dd, xx, bubblebtn, bubble] = testbind.parentNode.children;
    await host.updateComplete;
  });

  it('should be a hooks', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(btn.id, 'btn');
    assert.equal(xx.id, 'xx');
    assert.equal(dd.id, 'dd');
    assert.equal(bubblebtn.id, 'bubblebtn');
    assert.equal(bubble.id, 'bubble');
    done();
  });

  it('should filter subprops of details on refire the event with ^^subnonbubble(*.eee)', done => {
    xx.addEventListener('subnonbubble', e => {
      assert.equal(e.detail, 3);
      done();
    });

    const customEvent = new Event('firesub', { composed: true, bubbles: true });
    customEvent.detail = { eee: 3, ccc: 4 };
    xx.dispatchEvent(customEvent);
  });

  it('should filter subprops of details on refire the event with ^^subbubble(*.ccc)', done => {
    xx.parentNode.addEventListener('subbubble', e => {
      assert.equal(e.detail, 4);
      done();
    });

    const customEvent = new Event('firesub', { composed: true, bubbles: true });
    customEvent.detail = { eee: 3, ccc: 4 };
    xx.dispatchEvent(customEvent);
  });

  it('should filter subprops of details on refire the event with -^subhost(*.ccc)', done => {
    host.addEventListener('subhost', e => {
      assert.equal(e.detail.a, 2);
      done();
    });

    const customEvent = new Event('firesub', { composed: true, bubbles: true });
    customEvent.detail = { eee: 3, ccc: { xx: { a: 2 } } };
    xx.dispatchEvent(customEvent);
  });

  it('should send sub properties of a wire', done => {
    xx.subprop = data => {
      assert.equal(data, 4);
      done();
    };
    host.subproperty = { a: 3, b: 4 };

    // eslint-disable-next-line func-names
    bubble.hit = function () {
      const customEvent = new Event('hitted', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = 3333;
      this.dispatchEvent(customEvent);
    };

    bubblebtn.click();
  });

  it('click should bubble event', done => {
    // element hat den event
    parent.addEventListener('testEvent', e => {
      assert.equal(host.propp, 3333);
      assert.equal(e.detail, 3333);
      done();
    });

    // eslint-disable-next-line func-names
    bubble.hit = function () {
      const customEvent = new Event('hitted', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = 3333;
      this.dispatchEvent(customEvent);
    };

    bubblebtn.click();
  });

  it('using a nonexistent wire should register it and return length of 1', done => {
    // text after clk should have changed
    const r = host._FBPAddWireHook(
      '--nonexist',
      d => {
        assert.equal(dd.innerText, 'x');
        assert.equal(d, 33);
        done();
      },
      true
    );
    assert.equal(r, 1);
    host._FBPTriggerWire('--nonexist', 33);
  });

  it('hook should call callback BEFORE wire receivers are informed', done => {
    // text after clk should have changed
    host._FBPAddWireHook(
      '--clk',
      d => {
        assert.equal(dd.innerText, 'x');
        assert.equal(d, 0);
        done();
      },
      true
    );

    assert.equal(dd.innerText, 'x');
    dd.done = () => {
      dd.innerText = 'done was called';
    };
    btn.click();
  });

  it('hook should call callback after wire receivers are informed', done => {
    // text after clk should have changed
    host._FBPAddWireHook('--clk', d => {
      assert.equal(dd.innerText, 'done was called');
      assert.equal(d, 0);
      done();
    });

    assert.equal(dd.innerText, 'x');
    dd.done = () => {
      dd.innerText = 'done was called';
    };
    btn.click();
  });

  it('click should call done on div', done => {
    assert.equal(dd.innerText, 'x');
    dd.done = () => {
      done();
    };
    btn.click();
  });

  it('triggering an nonexistent wire should have no effect', () => {
    // text after clk should have changed
    host._FBPTriggerWire('--nonexist', { a: 1 });
    assert.equal(dd.innerText, 'x');
  });
});
