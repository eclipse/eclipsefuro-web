import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks

describe('furo-location-updater-qps', () => {
  let element;
  let furoLocation;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-location-updater></furo-location-updater>
          <furo-location></furo-location>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, furoLocation] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await furoLocation.updateComplete;
  });

  it('should be a furo-location-updater', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-location-updater');
    done();
  });

  it('should dispatch a location-changed event on changed QP', done => {
    furoLocation.addEventListener(
      'location-changed',
      e => {
        assert.equal(e.type, 'location-changed');
        done();
      },
      { once: true }
    );
    element.setQp({ j: 8 });
  });

  it('should add additional qps', done => {
    element.setQp({ a: 4444 });
    element.setQp({ b: 457 });
    // attention: the j comes from test before
    assert.equal(
      window.location.search.slice(1).endsWith('j=8&a=4444&b=457'),
      true
    );

    done();
  });

  it('should clear other qps', done => {
    element.setQp({ a: 4444 });
    element.setQp({ b: 457 });
    // attention: the j comes from test before
    assert.equal(
      window.location.search.slice(1).endsWith('j=8&a=4444&b=457'),
      true
    );
    element.setAttribute('clear-qp', 'a,c,j');
    element.setQp({ c: 333 });
    assert.equal(window.location.search.slice(1).endsWith('b=457&c=333'), true);
    done();
  });
});
