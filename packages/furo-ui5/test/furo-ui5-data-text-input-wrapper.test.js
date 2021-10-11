import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-text-input-wrapper', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      id: '1',
      scalar_string: 'this is a scalar string',
      wrapper_string: 'this is a google wrapper string',
      fat_string: {
        value: 'fat string from record',
        labels: ['cozy'],
        attributes: {
          'value-state': 'Success',
          'value-state-message': 'Your fat string is valid',
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
            default: 'new',
            hint: 'hint',
            readonly: false,
          },
          constraints: {
            'value.max': { is: '40', message: 'MAX 40' },
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
            'value.max': { is: '40', message: 'MAX 40' },
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-text-input
            ƒ-bind-data="--entity(*.data.wrapper_string)"
          ></furo-ui5-data-text-input>
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

  it('should be a furo-ui5-data-text-input element (wrapper)', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-text-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attributes of the fieldNode set (wrapper)', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.highlight, false, 'check highlight');
      assert.equal(input._state.placeholder, '', 'check placeholder');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.required, false, 'check required');
      assert.equal(input._state.type, 'Text', 'check type');
      assert.equal(input._state.value, '', 'check value');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      assert.equal(input._state.name, '', 'check name');
      assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
      assert.equal(input._state.maxlength, undefined, 'check maxlength');
      done();
    }, 16);
  });

  it('should update the value of the bound fieldNode (wrapper)', done => {
    dao.data.data.wrapper_string.addEventListener('field-value-changed', () => {
      assert.equal(input._state.value, 'New String value changed');
      assert.equal(dao.data.data.wrapper_string._value, 'New String value changed');
      done();
    });

    input.value = 'New String value changed';
    input.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: 'New String value changed',
      }),
    );
  });

  it('an update of a fat value on the data object should be synchronized with the input field (wrapper)', done => {
    dao.data.data.wrapper_string._value = 'Set data in the inner input element';
    setTimeout(() => {
      assert.equal(input._state.value, 'Set data in the inner input element');
      done();
    });
  });

  it('should apply meta and constraints to the bound field (wrapper)', done => {
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input._state.disabled, false, 'check disabled');
        assert.equal(input._state.highlight, false, 'check highlight');
        assert.equal(input._state.placeholder, '', 'check placeholder');
        assert.equal(input._state.readonly, false, 'check readonly');
        assert.equal(input._state.required, false, 'check required');
        assert.equal(input._state.type, 'Text', 'check type');
        assert.equal(input._state.value, 'this is a google wrapper string', 'check value');
        assert.equal(input._state.valueState, 'None', 'check valueState');
        assert.equal(input._state.name, '', 'check name');
        assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
        assert.equal(input.isWrapper(), true, 'check fieldFormat');
        done();
      }, 10);
    });

    dao.injectRaw(testRecordMeta);
  });
});
