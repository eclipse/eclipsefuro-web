import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '@furo/data';
import './helper/display-string.js';

describe('furo-type-renderer', () => {
  let host;
  let dao;
  let element;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-type-renderer></furo-type-renderer>
          <furo-data-object type="experiment.Experiment"></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await dao.updateComplete;
  });

  it('should resolve the correct type renderer component', done => {
    element.bindData(dao.data.display_name);
    setTimeout(() => {
      assert.equal(element.renderName, 'display-string');
      done();
    }, 16);
  });

  it('should set attributes to the specific type component', done => {
    element.setAttribute('data-test-attr', 'FooBar');
    element.bindData(dao.data.display_name);
    setTimeout(() => {
      assert.equal(element.renderName, 'display-string');
      assert.equal(element.getAttribute('data-test-attr'), 'FooBar');
      done();
    }, 16);
  });

  it('should resolve google.protobuf.Any', done => {
    dao.injectRaw({
      the_any_type: {
        '@type': 'type.googleapis.com/google.type.Money',
        units: 1000,
        nanos: 55000000,
        currency_code: 'EUR',
      },
    });
    element.bindData(dao.data.the_any_type);
    setTimeout(() => {
      assert.equal(element.renderName, 'display-google-type-money');
      done();
    }, 16);
  });

  it('should resolve repeated types', done => {
    element.bindData(dao.data.repstring);
    setTimeout(() => {
      assert.equal(element.renderName, 'display-string');
      done();
    }, 16);
  });
});
