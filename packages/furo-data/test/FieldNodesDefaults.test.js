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
    element.addEventListener(
      'data-injected',
      () => {
        element.data.description.reset();
        element.data.furo_data_date_input_google.reset();
        assert.equal(element.data.description._value, null);

        assert.equal(
          element.data.furo_data_date_input_google._value.year,
          0,
          'number'
        );
        assert.equal(element.data.furo_data_date_input_google._value.month, 0);

        done();
      },
      { once: true }
    );

    element.injectRaw({});
  });

  it('should handle base64 value', done => {
    element.setAttribute('type', 'experiment.Experiment');

    element.data.description._value = '❤';
    assert.equal(element.data.description._value, '❤');
    assert.equal(element.data.description._base64, 'IuKdpCI=');
    element.data.description._base64 = 'IvCfl68i';
    assert.equal(element.data.description._value, '🗯');

    assert.equal(
      element.data._base64,
      'eyJpZCI6IiIsImRpc3BsYXlfbmFtZSI6IiIsImRlc2NyaXB0aW9uIjoi8J+XryIsImZ1cm9fZGF0YV9jaGVja2JveF9pbnB1dCI6bnVsbCwiZnVyb19kYXRhX3RleHRfaW5wdXQiOiIiLCJmdXJvX2RhdGFfdGV4dGFyZWFfaW5wdXQiOiIiLCJmdXJvX2RhdGFfdGltZV9pbnB1dCI6IiIsImZ1cm9fZGF0YV9yYW5nZV9pbnB1dCI6bnVsbCwiZnVyb19kYXRhX251bWJlcl9pbnB1dCI6bnVsbCwiZnVyb19kYXRhX2NvbG9yX2lucHV0IjoiIiwiZnVyb19kYXRhX3Bhc3N3b3JkX2lucHV0IjoiIiwiZnVyb19kYXRhX3NlYXJjaF9pbnB1dCI6IiIsImZ1cm9fZGF0YV9kYXRlX2lucHV0IjoiIiwiZnVyb19kYXRhX2Jvb2xfaWNvbiI6bnVsbCwidGhlX2FueV90eXBlIjpudWxsLCJ0eXBlX3dpdGhfb3B0aW9ucyI6IiIsInR5cGVfcHJvcGVydHkiOltdLCJmdXJvX2RhdGFfZGF0ZV9pbnB1dF9nb29nbGUiOnsieWVhciI6bnVsbCwibW9udGgiOm51bGwsImRheSI6bnVsbH0sInNpbmdsZV90eXBlX3Byb3BlcnR5Ijp7ImlkIjoiIiwiZGlzcGxheV9uYW1lIjoiIiwiZGF0YSI6bnVsbCwibWV0YSI6eyJmaWVsZHMiOm51bGx9LCJmbGFncyI6W10sImlzX292ZXJ3cml0dGVuIjpudWxsfSwicmVwc3RyaW5nIjpbXSwiZnVyb19kYXRhX21vbmV5X2lucHV0Ijp7ImN1cnJlbmN5X2NvZGUiOiIiLCJ1bml0cyI6bnVsbCwibmFub3MiOm51bGx9LCJmdXJvX2RhdGFfZmlsZV9pbnB1dCI6W10sInVwZGF0ZV9tYXNrIjpudWxsLCJnb29nbGVfdGltZXN0YW1wIjpudWxsLCJkb3VibGUiOm51bGwsImludDY0IjpudWxsLCJmdXJvX3R5cGVfZGF0ZSI6eyJ5ZWFyIjpudWxsLCJtb250aCI6bnVsbCwiZGF5IjpudWxsLCJkaXNwbGF5X25hbWUiOiIifSwiZ29vZ2xlX3RpbWVvZmRheSI6eyJob3VycyI6bnVsbCwibWludXRlcyI6bnVsbCwic2Vjb25kcyI6bnVsbCwibmFub3MiOm51bGx9LCJmdXJvX3R5cGVfbW9uZXkiOnsiY3VycmVuY3lfY29kZSI6IiIsInVuaXRzIjpudWxsLCJuYW5vcyI6bnVsbCwiZGlzcGxheV9uYW1lIjoiIn19'
    );

    element.data._base64 =
      'eyJpZCI6IiIsImRpc3BsYXlfbmFtZSI6IiIsImRlc2NyaXB0aW9uIjoi4pyF4pyFIiwiZnVyb19kYXRhX2NoZWNrYm94X2lucHV0IjpudWxsLCJmdXJvX2RhdGFfdGV4dF9pbnB1dCI6IiIsImZ1cm9fZGF0YV90ZXh0YXJlYV9pbnB1dCI6IiIsImZ1cm9fZGF0YV90aW1lX2lucHV0IjoiIiwiZnVyb19kYXRhX3JhbmdlX2lucHV0IjpudWxsLCJmdXJvX2RhdGFfbnVtYmVyX2lucHV0IjpudWxsLCJmdXJvX2RhdGFfY29sb3JfaW5wdXQiOiIiLCJmdXJvX2RhdGFfcGFzc3dvcmRfaW5wdXQiOiIiLCJmdXJvX2RhdGFfc2VhcmNoX2lucHV0IjoiIiwiZnVyb19kYXRhX2RhdGVfaW5wdXQiOiIiLCJmdXJvX2RhdGFfYm9vbF9pY29uIjpudWxsLCJ0aGVfYW55X3R5cGUiOm51bGwsInR5cGVfd2l0aF9vcHRpb25zIjoiIiwidHlwZV9wcm9wZXJ0eSI6W10sImZ1cm9fZGF0YV9kYXRlX2lucHV0X2dvb2dsZSI6eyJ5ZWFyIjpudWxsLCJtb250aCI6bnVsbCwiZGF5IjpudWxsfSwic2luZ2xlX3R5cGVfcHJvcGVydHkiOnsiaWQiOiIiLCJkaXNwbGF5X25hbWUiOiIiLCJkYXRhIjpudWxsLCJtZXRhIjp7ImZpZWxkcyI6bnVsbH0sImZsYWdzIjpbXSwiaXNfb3ZlcndyaXR0ZW4iOm51bGx9LCJyZXBzdHJpbmciOltdLCJmdXJvX2RhdGFfbW9uZXlfaW5wdXQiOnsiY3VycmVuY3lfY29kZSI6IiIsInVuaXRzIjpudWxsLCJuYW5vcyI6bnVsbH0sImZ1cm9fZGF0YV9maWxlX2lucHV0IjpbXSwidXBkYXRlX21hc2siOm51bGwsImdvb2dsZV90aW1lc3RhbXAiOm51bGwsImRvdWJsZSI6bnVsbCwiaW50NjQiOm51bGwsImZ1cm9fdHlwZV9kYXRlIjp7InllYXIiOm51bGwsIm1vbnRoIjpudWxsLCJkYXkiOm51bGwsImRpc3BsYXlfbmFtZSI6IiJ9LCJnb29nbGVfdGltZW9mZGF5Ijp7ImhvdXJzIjpudWxsLCJtaW51dGVzIjpudWxsLCJzZWNvbmRzIjpudWxsLCJuYW5vcyI6bnVsbH0sImZ1cm9fdHlwZV9tb25leSI6eyJjdXJyZW5jeV9jb2RlIjoiIiwidW5pdHMiOm51bGwsIm5hbm9zIjpudWxsLCJkaXNwbGF5X25hbWUiOiIifX0=';

    assert.equal(element.data.description._value, '✅✅');
    done();
  });
});
