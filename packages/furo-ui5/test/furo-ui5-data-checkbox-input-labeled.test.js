import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-checkbox-input-labeled', () => {
  let host;
  let input;
  let dao;
  const testRecordMeta = {
    data: {
      furo_data_checkbox_input: true,
    },
    meta: {
      fields: {
        'data.furo_data_checkbox_input': {
          meta: {
            label: 'label override via response meta',
            readonly: false,
            hint: 'Please enter a description',
          },
          constraints: {
            required: {
              is: 'true',
              message: 'Please fill in!',
            },
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-checkbox-input-labeled
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
          ></furo-ui5-data-checkbox-input-labeled>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-checkbox-input-labeled element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-checkbox-input-labeled');
    done();
  });

  it('should have a label component inside', done => {
    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'checkbox_input**', 'check label text');

      done();
    }, 16);
  });

  it('label text should be overrideable via meta ', done => {
    dao.injectRaw(testRecordMeta);

    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'label override via response meta', 'check label text ');

      done();
    }, 16);
  });

  it('should support attribute disabled ', done => {
    input.setAttribute('disabled', '');
    setTimeout(() => {
      const checkbox = input.shadowRoot.querySelector('furo-ui5-data-checkbox-input');
      assert.equal(checkbox.disabled, true, 'check attribute disabled ');
      done();
    }, 0);
  });
});
