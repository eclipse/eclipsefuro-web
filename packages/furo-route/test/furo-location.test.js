import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-location', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-location url-space-regex="^" @-location-changed="--lo"></furo-location>
          <furo-document-title title="ttt" ƒ-activate="--lo"></furo-document-title>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-location', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-location');
    done();
  });

  it('urlSpaceRegex should be able to setted via attribute', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.urlSpaceRegex, '^');
    done();
  });

  it(' should get href from location', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.notEqual(element._getHrefFromLocation(), '');
    done();
  });



});
