import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-entity-field', () => {
  let host;
  let entityField;
  let dataObject;
  let entityField2;
  let deeplink;
  let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-entity-field
            ƒ-bind-data="--entity(*.data.furo_data_text_input)"
          ></furo-entity-field>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-entity-field ƒ-bind-data="--entity(*.invalidBinding)"></furo-entity-field>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, entityField, dataObject, entityField2, deeplink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await entityField.updateComplete;

    await entityField2.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('should be a furo-entity-field', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(entityField.nodeName.toLowerCase(), 'furo-entity-field');
    assert.equal(entityField2.nodeName.toLowerCase(), 'furo-entity-field');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  it('should return an error on invalid binding', done => {
    const b = entityField.bindData();
    assert.equal(b.message, 'Invalid binding');
    done();
  });

  it('should log invalid bindings', done => {
    // invalid binding
    assert.equal(entityField2.field, undefined);
    done();
  });

  it('should trigger event', done => {
    entityField.addEventListener(
      'value-changed',
      () => {
        done();
      },
      { once: true },
    );
    deeplink.qpIn({ exp: 1 });
  });

  it('should set value', done => {
    setTimeout(() => {
      entityField.setValue('test');
      assert.equal(entityField.value, 'test');
      done();
    }, 10);
  });
});
