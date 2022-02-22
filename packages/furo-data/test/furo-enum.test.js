import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo data enum', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-data-object></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-data-object', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  xit('should use enum type from enum.type.spec', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;

    assert.equal(EntityRoot.enumexample._spec.type, 'enums.Corpus');

    done();
  });
});
