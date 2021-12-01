import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('FieldNodesDefaults', () => {
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

  it('element should be a furo-data-object', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should set indeterminate default value', done => {
    element.setAttribute('type', 'experiment.Experiment');

    const handler = () => {
      assert.equal(element.data.description._value, null);
      assert.equal(element.data.furo_data_checkbox_input._value, null);

      assert.equal(element.data.furo_data_date_input_google._value.year, 0);
      assert.equal(element.data.furo_data_date_input_google._value.month, 0);

      done();
    };
    element.addEventListener('data-injected', handler, { once: true });

    element.injectRaw({});
  });

  it('should provide a reset function', done => {
    element.setAttribute('type', 'experiment.Experiment');
    element.addEventListener('data-injected', () => {
      element.data.description.reset();
      element.data.furo_data_date_input_google.reset();
      assert.equal(element.data.description._value, null);

      assert.equal(element.data.furo_data_date_input_google._value.year, 0, "number");
      assert.equal(element.data.furo_data_date_input_google._value.month, 0);

      done();
    }, { once: true });



    element.injectRaw({});
  });
});
