import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-hp-35', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-hp-35></furo-hp-35>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-hp-35', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-hp-35');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should be possible to enter some numbers', done => {
    element.enter(3);
    element.enter(4);
    assert.equal(element.x, 4);
    assert.equal(element.y, 3);
    done();
  });

  it('should swap the top of the stack', done => {
    element.enter(3);
    element.enter(4);
    assert.equal(element.x, 4);
    assert.equal(element.y, 3);
    element.swap();
    assert.equal(element.x, 3);
    assert.equal(element.y, 4);

    done();
  });

  /**
   * rot **( n1 n2 n3 -- n2 n3 n1 )**
   *
   *    Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.
   *
   *    1 2 3 rot
   *    gives you:
   *
   *    2 3* 1 <- Top
   */
  it('should rotate the stack', done => {
    element.enter(1);
    element.enter(2);
    element.enter(3);
    assert.equal(element.stack[0], 1);
    assert.equal(element.stack[1], 2);
    assert.equal(element.stack[2], 3);

    element.rot();
    assert.equal(element.stack[0], 2);
    assert.equal(element.stack[1], 3);
    assert.equal(element.stack[2], 1);
    done();
  });
  it('should roll the stack (same as rot)', done => {
    element.enter(1);
    element.enter(2);
    element.enter(3);
    assert.equal(element.stack[0], 1);
    assert.equal(element.stack[1], 2);
    assert.equal(element.stack[2], 3);

    // roll gives the third el
    const n = element.roll();
    assert.equal(n, 1);

    assert.equal(element.stack[0], 2);
    assert.equal(element.stack[1], 3);
    assert.equal(element.stack[2], 1);
    done();
  });

  it('should add', done => {
    element.enter(111);
    assert.equal(element.add(), 111);
    element.enter(222);
    element.add();
    assert.equal(element.x, 333);
    element.add(111);
    assert.equal(element.x, 444);
    done();
  });

  it('should substract', done => {
    element.enter(111);
    assert.equal(element.substract(), -111);
    element.enter(11);
    element.substract(11);
    assert.equal(element.x, 0);
    done();
  });

  it('should Perform square root operation', done => {
    assert.equal(element.sqrt(), false);
    element.enter(16);
    element.sqrt();
    assert.equal(element.x, 4);
    element.sqrt(9);
    assert.equal(element.x, 3);
    done();
  });

  it('should Perform  log operation', done => {
    assert.equal(element.ln(), '-Infinity');
    assert.equal(element.ln(1), 0);
    element.enter(0.5);
    element.ln();
    assert.equal(element.x, -0.6931471805599453);
    element.ln(9);
    assert.equal(element.x, 2.1972245773362196);
    done();
  });

  it('should Perform  cos operation', done => {
    element.clear();
    element.enter(1);
    element.cos();
    assert.equal(element.x, 0.9998476951563913);
    element.clear();
    element.enter(0);
    element.cos(0);
    assert.equal(element.x, 1);

    element.radMode = true;
    element.clear();
    element.enter(1);
    element.cos();
    assert.equal(element.x, 0.5403023058681398);
    element.clear();
    element.enter(0);
    element.cos(0);
    assert.equal(element.x, 1);

    element.clear();
    assert.equal(element.cos(), 1);
    done();
  });

  it('should Perform sin operation', done => {
    element.clear();
    element.enter(1);
    element.sin();
    assert.equal(element.x, 0.01745240643728351);
    element.clear();
    element.enter(0);
    element.sin();
    assert.equal(element.x, 0);

    element.radMode = true;
    element.clear();
    element.enter(1);
    element.sin();
    assert.equal(element.x, 0.8414709848078965);
    element.clear();
    element.enter(0);
    element.sin();
    assert.equal(element.x, 0, 'sin 0');
    assert.equal(element.sin(1), 0.8414709848078965);

    element.clear();
    assert.equal(element.sin(), 0);
    done();
  });

  it('should Perform tan operation', done => {
    element.clear();
    element.enter(1);
    element.tan();
    assert.equal(element.x, 0.017455064928217585);
    element.clear();
    element.enter(0);
    element.tan();
    assert.equal(element.x, 0);

    element.radMode = true;
    element.clear();
    element.enter(1);
    element.tan();
    assert.equal(element.x, 1.5574077246549023);
    element.clear();
    element.enter(0);
    element.tan();
    assert.equal(element.x, 0, 'tan 0');
    assert.equal(element.tan(1), 1.5574077246549023);

    element.clear();
    assert.equal(element.tan(), 0);
    done();
  });

  it('should calculate absolute values', done => {
    element.enter(-9);
    assert.equal(element.x, -9);
    element.abs();
    assert.equal(element.x, 9);
    assert.equal(element.abs(-3), 3);

    element.clear();
    // eslint-disable-next-line no-restricted-globals
    assert.equal(element.abs(), 0);

    done();
  });

  it('should calculate reciprocal values', done => {
    element.enter(-9);
    assert.equal(element.x, -9);
    element.reciprocal();
    assert.equal(element.x, -0.1111111111111111);
    assert.equal(element.reciprocal(3), 0.3333333333333333);

    element.clear();
    // eslint-disable-next-line no-restricted-globals
    assert.equal(isNaN(element.reciprocal()), isNaN());
    done();
  });

  it('should calculate exponential', done => {
    element.enter(2);
    assert.equal(element.x, 2);
    element.exp();
    assert.equal(element.x, 7.38905609893065);
    assert.equal(element.exp(2), 7.38905609893065);

    element.clear();
    // eslint-disable-next-line no-restricted-globals
    assert.equal(element.exp(), 1);
    done();
  });

  it('should calculate xroot', done => {
    element.enter(3);
    element.enter(2);
    assert.equal(element.x, 2);
    element.xroot();
    assert.equal(element.x, 1.7320508075688772);
    element.enter(3);
    assert.equal(element.xroot(2), 1.7320508075688772);

    element.clear();
    assert.equal(element.xroot(), false);
    done();
  });

  it('should multiply', done => {
    element.enter(3);
    element.enter(3);
    element.enter(3);
    element.enter(3);
    element.enter(3);
    element.enter(2);
    element.multiply();
    assert.equal(element.x, 6);
    assert.equal(element.multiply(2), 12);

    element.clear();
    assert.equal(element.multiply(), 0);
    done();
  });
  it('should divide', done => {
    element.enter(6);
    element.enter(2);
    element.divide();
    assert.equal(element.x, 3);

    element.enter(16);
    assert.equal(element.divide(2), 8);

    element.clear();
    assert.equal(element.divide(), Infinity);
    done();
  });
  it('should calculate power x^y', done => {
    element.enter(3);
    element.enter(2);
    assert.equal(element.x, 2);
    assert.equal(element.y, 3);
    element.pow();
    assert.equal(element.x, 8);
    element.enter(3);
    assert.equal(element.pow(2), 8);

    element.clear();
    // eslint-disable-next-line no-restricted-globals
    assert.equal(isNaN(element.pow()), isNaN());
    done();
  });
});
