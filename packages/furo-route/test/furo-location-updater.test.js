import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-location-updater', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-location-updater></furo-location-updater>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-location-updater', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-location-updater');
    done();
  });


  it('should dispatch a __locationchanged event on changed QP', done => {
    element.addEventListener('__furoLocationChanged', e => {
      assert.equal(e.type, '__furoLocationChanged');
      done();
    });

    element.setQp({ a: 4 });
  });

  it('should dispatch a __locationchanged event on changed Hash', done => {
    element.addEventListener('__furoLocationChanged', e => {
      assert.equal(e.type, '__furoLocationChanged');
      done();
    });

    element.setHash({ a: 4 });
  });


  it('should add additional hashes on changed Hash', done => {
    element.setHash({ a: 4444 });
    element.setHash({ b: 3333 });

    assert.equal(window.location.hash.slice(1), 'a=4444&b=3333');

    done();
  });

  it('should add additional qps', done => {
    element.setQp({ a: 4444 });
    element.setQp({ b: 457 });

    assert.equal(window.location.search.slice(1), 'a=4444&b=457');

    done();
  });


  it('should clear other qps', done => {
    element.setQp({ a: 4444 });
    element.setQp({ b: 457 });
    assert.equal(window.location.search.slice(1), 'a=4444&b=457');
    element.setAttribute("clear-qp","a,c")
    element.setQp({ c: 333 });
    assert.equal(window.location.search.slice(1), 'b=457&c=333');
    done();
  });


  it('should clear other hash', done => {
    element.setHash({ a: 4444 });
    element.setHash({ b: 457 });
    assert.equal(window.location.hash.slice(1), 'a=4444&b=457');
    element.setAttribute("clear-hash","a,c")
    element.setHash({ c: 333 });
    assert.equal(window.location.hash.slice(1), 'b=457&c=333');
    done();
  });


});
