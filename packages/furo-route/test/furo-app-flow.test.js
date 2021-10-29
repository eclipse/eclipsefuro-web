import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-app-flow', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-app-flow></furo-app-flow>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-app-flow', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-app-flow');
    done();
  });



  it('should fire an app-flow and ignore array', done => {
    element.event = 'test';
    element.addEventListener('app-flow', e => {
      expect(e.detail.data.a).to.equal(undefined);
      done();
    });
    element.emit([1]);
  });

  it('should fire an app-flow and ignore skalar', done => {
    element.event = 'test';
    element.addEventListener('app-flow', e => {
      expect(e.detail.data.a).to.equal(undefined);
      done();
    });
    element.emit(1);
  });
  it('should fire an app-flow event with data', done => {
    element.event = 'test';
    element.addEventListener('app-flow', e => {
      expect(e.detail.data.a).to.equal(123);
      done();
    });
    element.emit({ a: 123 });
  });
  it('should fire an app-flow event without data', done => {
    element.event = 'test';
    element.addEventListener('app-flow', () => {
      done();
    });
    element.emit();
  });
});
