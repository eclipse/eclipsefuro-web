import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-password-input', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      description: 'Description from record',
      display_name: 'display_name',
      id: '1',
      furo_data_checkbox_input: true,
      furo_data_text_input:
        'hallo test with loads of text to show the overflow. hallo test with loads of text to show the overflow.',
      furo_data_number_input: 12.55,
      furo_data_time_input: '17:34',
      furo_data_color_input: '#e318ed',
      furo_data_textarea_input: 'hallo , this is textarea input',
      furo_data_date_input: '2019-02-22',
      furo_data_date_input_google: {
        day: 31,
        display_name: '31.12.2020',
        month: 12,
        year: 2020,
      },
      furo_data_range_input: 31,
      furo_data_bool_icon: false,
      type_property: [
        {
          code: 'c0a7f550-0fbe-4046-8fa9-60c86327b6b1',
          data: {
            '@type': 'type.googleapis.com/furo.StringProperty',
            data: '01032020',
          },
          flags: ['is-overwritable', 'my-prop'],
          display_name: 'Vertragsbeginn',
          id: '246d79a0-0a15-43c5-b18f-ac8a4a449df1',
          meta: {
            fields: {
              data: {
                constraints: {
                  required: {
                    is: 'true',
                    message: 'Bitte ausfüllen!',
                  },
                },
                meta: {
                  label: 'Vertragsbeginn custom label',
                  readonly: true,
                },
              },
            },
          },
        },
      ],
      repstring: ['AAA', 'BBBB', 'CCCC'],
      furo_data_money_input: {
        currency_code: 'CHF',
        units: 3333,
        nanos: 75100000,
      },
    },
    links: [
      {
        href: '/mockdata/experiments/1/get-less-props.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ],
    meta: {
      fields: {
        'data.description': {
          meta: {
            label: 'My description',
            readonly: false,
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
          <furo-ui5-data-password-input
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-ui5-data-password-input>
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

  it('should be a furo-ui5-data-text-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-password-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attributes of the fieldNode set', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.placeholder, '', 'check placeholder');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.required, false, 'check required');
      assert.equal(input._state.type, 'Password', 'check type');
      assert.equal(input._state.value, 'Default Description', 'check value');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      assert.equal(input._state.name, '', 'check name');
      assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
      assert.equal(input._state.maxlength, undefined, 'check maxlength');
      done();
    }, 16);
  });

  it('should update the value of the bound fieldNode', done => {
    dao.data.data.description.addEventListener('field-value-changed', () => {
      assert.equal(input._state.value, 'New description set');
      assert.equal(dao.data.data.description._value, 'New description set');
      done();
    });

    input.value = 'New description set';
    input.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: 'New description set',
      }),
    );
  });

  it('an update of a scalar value on the data object should be synchronized with the input field', done => {
    dao.data.data.description._value = 'Set data in the inner input element';
    setTimeout(() => {
      assert.equal(input._state.value, 'Set data in the inner input element');
      done();
    }, 0);
  });

  it('should set ui5 icon to the component', done => {
    input.setIcon('filter');
    const icon = input.querySelector('ui5-icon');
    assert.equal(icon.name, 'filter');
    assert.equal(icon.slot, 'icon');
    done();
  });

  it('should apply meta and constraints to the bound field', done => {
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input._state.disabled, false, 'check disabled');
        assert.equal(input._state.highlight, false, 'check highlight');
        assert.equal(input._state.readonly, false, 'check readonly');
        assert.equal(input._state.required, true, 'check required');
        assert.equal(input._state.type, 'Password', 'check type');
        assert.equal(input._state.value, 'Description from record', 'check value');
        assert.equal(input._state.valueState, 'None', 'check valueState');
        assert.equal(input._state.name, '', 'check name');
        assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
        assert.equal(input._state.maxlength, undefined, 'check maxlength');
        assert.equal(input.isFat(), false, 'check fieldFormat');

        done();
      }, 10);
    });

    dao.injectRaw(testRecordMeta);
  });
});
