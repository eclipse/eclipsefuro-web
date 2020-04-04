import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '../src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('hooks', () => {
  let host;
  let btn;
  let dd;
  let xx;
  let bubblebtn;
  let parent;
  let bubble;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <button id="btn" @-click="--clk"></button>
          <div id="dd" ƒ-done="--clk" @-dummy="--clk">x</div>
          <div id="xx" ƒ-dummy="--clk" ƒ-dummy-camel="--clk">dummy</div>

          <button id="bubblebtn" @-click="--bubble"></button>

          <div
            id="bubble"
            ƒ-hit="--bubble"
            @-hitted="((propp)),--raw(*), --data(id), ^prop(prop),^fire, ^^testEvent,^^fireBubbleData(id), -^fire-on-host-with-data, -^fire-on-host-with-data(id),:STOP"
            ƒ-sefl="oo"
          >
            dummy
          </div>

          <script></script>
        </template>
      </test-bind>
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

  it('click should bubble event', done => {
    // element hat den event
    parent.addEventListener('testEvent', e => {
      assert.equal(host.propp, 3333);
      assert.equal(e.detail, 3333);
      done();
    });

    // eslint-disable-next-line func-names
    bubble.hit = function() {
      const customEvent = new Event('hitted', { composed: true, bubbles: true });
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
      true,
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
      true,
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
