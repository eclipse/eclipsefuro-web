import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo data oneof', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object></furo-data-object>
        </template>
      </test-bind>
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

  it('should use oneof type from oneof.type.spec', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;

    assert.equal(EntityRoot.display_name._spec.__proto.oneof, 'aaa', 'in aaa group');
    assert.equal(EntityRoot.furo_data_checkbox_input._spec.__proto.oneof, 'aaa', 'in aaa group');
    assert.equal(EntityRoot.description._spec.__proto.oneof, 'bbb', 'in bbb group');
    assert.equal(EntityRoot.furo_data_text_input._spec.__proto.oneof, 'bbb', 'in bbb group');
    done();
  });

  it('should clear the siblings when setting one of the oneof fields in a group', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;
    assert.equal(EntityRoot.display_name._value, '');
    assert.equal(EntityRoot.furo_data_checkbox_input._value, null);

    EntityRoot.furo_data_checkbox_input._value = true;
    EntityRoot.display_name._value = 'Some Text';
    assert.equal(EntityRoot.furo_data_checkbox_input._value, null);

    EntityRoot.furo_data_checkbox_input._value = false;
    assert.equal(EntityRoot.furo_data_checkbox_input._value, false);
    assert.equal(EntityRoot.display_name._value, null);

    done();
  });

  it('should handle complex types for oneof', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;

    EntityRoot.other_mask._value = { paths: [2] };
    assert.equal(EntityRoot.other_mask._value.paths.length, 1);
    assert.equal(element.json.other_mask.paths.length, 1);
    assert.equal(element.json.update_mask, null);

    assert.equal(EntityRoot.update_mask._value, null);

    const jsonval = EntityRoot.getJson();

    // eslint-disable-next-line no-prototype-builtins
    assert.equal(JSON.parse(JSON.stringify(jsonval)).hasOwnProperty('update_mask'), true);
    assert.equal(jsonval.update_mask, null);
    done();
  });

  it('should be possible to set a complex in a group and then another', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;

    EntityRoot.other_mask._value = { paths: [2] };
    assert.equal(EntityRoot.other_mask._value.paths.length, 1);
    assert.equal(element.json.update_mask, null);
    assert.equal(EntityRoot.update_mask._value, null);

    // set the other field
    EntityRoot.update_mask._value = { paths: [2] };
    assert.equal(EntityRoot.update_mask._value.paths.length, 1);
    assert.equal(element.json.other_mask, null);
    assert.equal(EntityRoot.other_mask._value, null);
    done();
  });

  it('should notify the clearing of a oneof field', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;
    EntityRoot.update_mask.addEventListener('oneof-field-cleared', () => {
      done();
    });
    EntityRoot.other_mask._value = { paths: [2] };
  });
  it('should notify the change of a oneof field', done => {
    element.setAttribute('type', 'experiment.Oneof');
    const EntityRoot = element.data;
    EntityRoot.other_mask.addEventListener('oneof-field-changed', () => {
      done();
    });
    EntityRoot.other_mask._value = { paths: [2] };
  });
});
