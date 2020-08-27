import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-radiogroup', () => {
  let host;
  let radiogroup;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-radiogroup>
            <furo-ui5-data-radio-button
              name="Group1"
              ƒ-bind-data="--data(*.furo_data_checkbox_input)"
            ></furo-ui5-data-radio-button>
            <furo-ui5-data-radio-button
              name="Group1"
              ƒ-bind-data="--data(*.furo_data_bool_icon)"
            ></furo-ui5-data-radio-button>
          </furo-ui5-radiogroup>
          <furo-data-object type="experiment.Experiment" @-object-ready="--data"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, radiogroup, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await radiogroup.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-radiogroup element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(radiogroup.nodeName.toLowerCase(), 'furo-ui5-radiogroup');
    done();
  });

  it('should allow only one truly value', done => {
    radiogroup.children[0].selected = true;
    setTimeout(() => {
      assert.equal(radiogroup.children[1].selected, false);
      done();
    }, 24);
  });

  it('should toggle the elements', done => {
    radiogroup.children[1].selected = true;
    setTimeout(() => {
      assert.equal(radiogroup.children[0].selected, false);
      done();
    }, 24);
  });
});
