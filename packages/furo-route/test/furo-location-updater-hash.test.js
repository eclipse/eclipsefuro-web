import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks

describe('furo-location-updater-hash', () => {
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

  it('should dispatch a __locationchanged event on changed Hash', done => {
    furoLocation.addEventListener(
      'location-changed',
      e => {
        assert.equal(e.type, 'location-changed');
        done();
      },
      { once: true }
    );

    element.setHash({ a: 3 });
  });

  it('should add additional hashes on changed Hash', done => {
    element.setHash({ a: 4444 });
    element.setHash({ b: 3333 });
    element.setHash({ xb: 3333 });

    assert.equal(window.location.hash, '#a=4444&b=3333&xb=3333');

    done();
  });

  it('should clear other hash', done => {
    // attention XB comes from test before
    element.setHash({ a: 4444 });
    element.setHash({ b: 457 });
    assert.equal(window.location.hash, '#a=4444&b=457&xb=3333');
    element.setAttribute('clear-hash', 'xb,a,c');
    element.setHash({ c: 333 });
    assert.equal(window.location.hash, '#b=457&c=333');
    done();
  });
});
