import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-textarea-input', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      id: '1',
      scalar_string: 'this is a scalar string',
      wrapper_string: {
        value: 'this is a google wrapper string',
      },
      fat_string: {
        value: 'fat string from record',
        labels: ['cozy'],
        attributes: {
          'value-state': 'Error',
          errortext: 'Your fat string is valid',
          icon: 'thumb-up',
        },
      },
      scalar_int32: 14,
      wrapper_int32: {
        value: 14,
      },
      fat_int32: {
        value: 14,
        labels: '',
        attributes: {
          'value-state': 'Information',
        },
      },
      fat_bool: {
        value: true,
        'value-state': 'Information',
      },
      wrapper_bool: {
        value: true,
      },
    },
    links: [],
    meta: {
      fields: {
        'data.wrapper_string': {
          meta: {
            label: 'wrapper string label set via response meta',
            readonly: true,
          },
        },
        'data.fat_string': {
          meta: {
            label: 'fat string label set via response meta',
            default: 'new',
            hint: 'hint',
            readonly: false,
          },
          constraints: {
            max: { is: 40, message: 'MAX 40' },
            required: {
              is: true,
              message: 'Bitte ausfüllen!',
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
          <furo-ui5-data-textarea-input
            ƒ-bind-data="--entity(*.data.scalar_string)"
          ></furo-ui5-data-textarea-input>
          <furo-data-object
            type="universaltest.UniversaltestEntity"
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

  it('should be a furo-ui5-data-textarea-input element (scalar)', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-textarea-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attributes of the fieldNode set (scalar)', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.placeholder, 'skalar string**', 'check placeholder');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.required, false, 'check required');
      assert.equal(input._state.value, '', 'check value');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      done();
    }, 16);
  });

  it('should apply meta and constraints to the bound field (scalar)', done => {
    dao.addEventListener('data-injected', () => {
      assert.equal(input._state.value, 'this is a scalar string', 'check value');
      assert.equal(input._state.readonly, false, 'check readonly');

      done();
    });

    dao.injectRaw(testRecordMeta);
  });

});
