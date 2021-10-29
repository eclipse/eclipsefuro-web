import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-fetch-json', () => {
  let element = {};
  let host;

  beforeEach(async () => {
    const fix = await fixture(html`
      <test-bind>
        <template>
          <furo-fetch-json
            src="/base/mockdata/experiments/1/get.json"
            ƒ-fetch-src="--fetchSrc"
            ƒ-fetch="--fetch"
            @-data="--contentReceived"
            @-parse-error="--error"
          ></furo-fetch-json>
        </template>
      </test-bind>
    `);
    await fix.updateComplete;
    host = fix._host;
    await host.updateComplete;
    [, element] = fix.parentNode.children;
    await element.updateComplete;
  });




  it('should emit an error', done => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-fetch-json');
    /**
     * Register hook on wire --contentReceived to
     * get the json content
     */
    host._FBPAddWireHook('--error', err => {
      assert.equal(err.name, 'SyntaxError');
      done();
    });
    host._FBPTriggerWire('--fetchSrc', '/base/mockdata/____404');
  });

  it('should fetch a source with fetch-src', done => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-fetch-json');
    /**
     * Register hook on wire --contentReceived to
     * get the json content
     */
    host._FBPAddWireHook('--contentReceived', e => {
      assert.equal(e.data.id, 2);
      done();
    });
    host._FBPTriggerWire('--fetchSrc', '/base/mockdata/projects/2/get.json');
  });

  it('should be a furo-fetch-json', done => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-fetch-json');
    /**
     * Register hook on wire --contentReceived to
     * get the json content
     */
    host._FBPAddWireHook('--contentReceived', e => {
      assert.equal(e.data.id, 1);
      done();
    });
    host._FBPTriggerWire('--fetch');
  });
});
