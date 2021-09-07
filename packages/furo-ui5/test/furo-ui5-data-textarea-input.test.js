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
  let inputFat;
  let daoFat;

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
      fat_string: {
        value: 'fat string from record',
        labels: ['cozy'],
        attributes: {
          'value-state': 'Error',
          'value-state-message': 'Your fat string is valid',
          icon: 'thumb-up',
        },
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
          <furo-ui5-data-textarea-input
            ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
          ></furo-ui5-data-textarea-input>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
          <furo-ui5-data-textarea-input
            ƒ-bind-data="--entityU(*.data.fat_string)"
          ></furo-ui5-data-textarea-input>
          <furo-data-object
            type="universaltest.UniversaltestEntity"
            @-object-ready="--entityU"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao, inputFat, daoFat] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await inputFat.updateComplete;
    await daoFat.updateComplete;
  });

  it('should be a furo-ui5-data-textarea-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-textarea-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attributes of the fieldNode set', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.growing, false, 'check growing');
      assert.equal(input._state.placeholder, '', 'check placeholder');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      assert.equal(input._state.valueStateMessage.length, 1, 'check valueStateMessage');
      assert.equal(input._state.name, '', 'check name');
      done();
    }, 0);
  });

  it('should update the fieldNode', done => {
    input.value = 'new text set';
    input.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: 'new text set',
      }),
    );

    setTimeout(() => {
      assert.equal(input._state.value, 'new text set', 'check internal text');
      assert.equal(dao.data.data.furo_data_textarea_input._value, 'new text set', 'check dao');
      done();
    }, 16);
  });

  it('should update value after inject response', done => {
    if (dao.injectRaw(testRecordMeta)) {
      setTimeout(() => {
        assert.equal(
          dao.data.data.furo_data_textarea_input._value,
          'hallo , this is textarea input',
          'check dao',
        );
        assert.equal(input.value, 'hallo , this is textarea input', 'check input value');
        done();
      }, 16);
    }
  });

  it('should apply valueState to the bound field ', done => {
    daoFat.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(inputFat._state.disabled, false, 'check disabled');
        assert.equal(inputFat._state.readonly, false, 'check readonly');
        assert.equal(inputFat._state.required, false, 'check required');
        assert.equal(inputFat._state.value, 'fat string from record', 'check value');
        assert.equal(inputFat._state.valueState, 'Error', 'check valueState');
        assert.equal(
          inputFat._valueStateElement.innerText,
          'Your fat string is valid',
          'check valueStateMessage content',
        );
        done();
      }, 30);
    });

    daoFat.injectRaw(testRecordMeta);
  });
});
