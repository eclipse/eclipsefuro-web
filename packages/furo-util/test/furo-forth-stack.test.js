import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks

describe('furo-forth-stack', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-forth-stack></furo-forth-stack>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-forth-stack', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-forth-stack');
    done();
  });

  it('instantiating the element with default properties works', () => {
    assert.equal(element._size, 0);
  });

  it('Put something in the stack', () => {
    element.put(4334);
    element.put(4334);
    assert.equal(element._size, 2);
  });

  it('drop something from stack', () => {
    element.put(1);
    element.put('x');

    assert.equal(element.drop(), 'x');
    assert.equal(element._size, 1);
  });

  it('duplicate top element', () => {
    element.put('a');
    element.put('x');
    element.dup();

    assert.equal(element.drop(), 'x');
    assert.equal(element.drop(), 'x');
    assert.equal(element.drop(), 'a');
    assert.equal(element._size, 0);
  });

  it('duplicate second last element', () => {
    element.put('a');
    element.put('b');
    element.put('c');
    element.over();

    assert.equal(element.drop(), 'b');
    assert.equal(element.drop(), 'c');
    assert.equal(element.drop(), 'b');
    assert.equal(element.drop(), 'a');
    assert.equal(element._size, 0);
  });

  it('emmit stack empty', done => {
    element.addEventListener('empty', () => {
      assert.equal(element._size, 0);
      done();
    });
    element.put('a');
    element.put('x');
    element.dup();

    assert.equal(element.drop(), 'x');
    assert.equal(element.drop(), 'x');
    assert.equal(element.drop(), 'a');
  });

  it('swapping positions', () => {
    element.put('a');
    element.put('x');
    element.swap();

    assert.equal(element.drop(), 'a');
    assert.equal(element.drop(), 'x');
  });

  it('rotating positions with 2 elements only', () => {
    element.put('a');
    element.put('x');
    element.rot();

    assert.equal(element.drop(), 'a');
    assert.equal(element.drop(), 'x');
  });

  it('rotating positions with more then 3 elements ', () => {
    element.put('a');
    element.put('b');
    element.put('c');
    element.put('d');

    element.rot();

    assert.equal(element.drop(), 'a');
    assert.equal(element.drop(), 'd');
    assert.equal(element.drop(), 'c');
    assert.equal(element.drop(), 'b');
  });

  it('empty stack ', () => {
    element.put('a');
    element.put('x');

    assert.equal(element.drop(), 'x');
    assert.equal(element.drop(), 'a');
    assert.equal(element.drop().message, 'Stack is empty');
  });

  it('stack math', () => {
    element.put(4);
    element.put(2);
    element.put(element.drop() + element.drop());
    assert.equal(element.drop(), 6);

    element.put(4);
    element.dup();
    element.put(2);

    element.put(element.drop() + element.drop());
    element.put(element.drop() * element.drop());
    assert.equal(element.drop(), 24);

    assert.equal(element.drop().message, 'Stack is empty');
  });
});
