import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-select', () => {
  let host;
  let input;
  let dao;
  let daoCollection;

  const testRecordMeta = {
    data: {
      description: 'experiment data for testing',
      display_name: 'display_name',
      id: '2',
      furo_data_checkbox_input: true,
      furo_data_text_input:
        'hallo test with loads of text to show the overflow. hallo test with loads of text to show the overflow.',
      furo_data_number_input: 12.55,
      furo_data_time_input: '17:34',
      furo_data_color_input: '#e318ed',
      furo_data_textarea_input: 'hallo , this is textarea input',
      furo_data_date_input: '2019-02-22',
      furo_data_password_input: 'password',
      furo_data_date_input_google: {
        day: 31,
        month: 12,
        year: 2020,
      },
      google_timestamp: '1970-11-01T02:46:40.000000022Z',
      furo_data_range_input: 31,
      furo_data_bool_icon: false,
      the_any_type: {
        '@type': 'type.googleapis.com/google.type.Money',
        units: 1000,
        nanos: 55000000,
        currency_code: 'EUR',
      },
      type_property: [
        {
          code: 'c0a7f550-0fbe-4046-8fa9-60c86327b6b1',
          data: {
            '@type': 'type.furo.com/furo.StringProperty',
            data: 'String01032020',
          },
          flags: ['is-overwritable', 'my-prop'],
          display_name: 'Contract',
          id: '246d79a0-0a15-43c5-b18f-ac8a4a449df1',
          meta: {
            fields: {
              'data.data': {
                constraints: {
                  required: {
                    is: 'true',
                    message: 'Please register a value!',
                  },
                },
                meta: {
                  label: 'Custom label',
                  readonly: false,
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/google.type.Date',
            day: 8,
            month: 11,
            year: 2022,
            display_name: '8.11.2022',
          },
          display_name: 'A google.type.Date',
          id: 'a',
          code: 'date',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'Google Date',
                  hint: 'Additional information',
                  readonly: true,
                },
                constraints: {
                  min: {
                    is: '2019-09-09',
                    message: 'to small',
                  },
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/furo.NumberProperty',
            data: 34.23,
            display_name: '34.23',
          },
          display_name: 'Display',
          id: 'bb',
          code: 'option',
          meta: {
            fields: {
              'data.data': {
                meta: {
                  label: 'Float',
                  hint: 'Type in int',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/google.protobuf.StringValue',
            value: 'text google.protobuf.StringValue',
          },

          display_name: 'Display',
          id: 'op33t',
          code: 'option',
          meta: {
            fields: {
              'data.value': {
                meta: {
                  label: 'Google string',
                  hint: 'Type in int',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/furo.StringOptionProperty',
            id: 'bb',
            display_name: 'The display b',
          },

          id: '444',
          code: 'option',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'Please select',
                  hint: 'datehint is data',
                  repeated: false,
                  options: {
                    list: [
                      {
                        id: '0',
                        display_name: 'Please select',
                      },
                      {
                        id: 'aa',
                        display_name: 'The display a',
                      },
                      {
                        id: 'bb',
                        display_name: 'The display b',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/furo.StringProperty',
            data: '32 32 23',
            display_name: 'a date',
          },
          id: 'bv3',
          code: 'date',
          meta: {
            fields: {
              'data.data': {
                meta: {
                  label: 'repeated fields',
                  hint: 'this is data',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/furo.IntegerProperty',
            data: '313144',
            display_name: 'Integer Property',
          },
          id: 'int3',
          code: 'integer',
          meta: {
            fields: {
              'data.data': {
                meta: {
                  label: 'furo integer property',
                  hint: 'this is a integer property',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xx/google.protobuf.BoolValue',
            value: true,
          },
          display_name: 'Display',
          id: 'xxxxxx',
          meta: {
            fields: {
              'data.value': {
                meta: {
                  label: 'is online',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'xxx/furo.fat.String',
            value: 'text furo.fat.String',
          },
          display_name: 'Display',
          id: 'op33t',
          code: 'option',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'fat string',
                  hint: 'Type in fat string',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'furo.fat.Int32',
            value: 22,
            display_name: 'furo.fat.Int32',
          },
          display_name: 'Display',
          id: 'op33t',
          code: 'option',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'fat int',
                  hint: 'Type in fat int',
                },
              },
            },
          },
        },
        {
          data: {
            '@type': 'furo.fat.Bool',
            value: true,
            display_name: 'furo.fat.Bool',
          },
          display_name: 'Display',
          id: 'op33t',
          code: 'option',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'fat Bool',
                  hint: 'Type in fat Bool',
                },
              },
            },
          },
        },
      ],
      single_type_property: {
        data: {
          '@type': 'xx/google.type.Date',
          day: 8,
          month: 11,
          year: 2022,
          display_name: '8.11.2022',
        },
        display_name: 'a date',
        id: 'date',
        code: 'date',
        meta: {
          fields: {
            data: {
              meta: {
                label: 'Additional fields',
                hint: 'this is data',
                readonly: true,
              },
              constraints: {
                min: {
                  is: '2019-09-09',
                  message: 'to small',
                },
              },
            },
          },
        },
      },
      repstring: ['AAA', 'BBBB', 'CCCC'],
      furo_data_money_input: {
        display_name: "CHF 3'333.751",
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
      {
        href: 'https://httpbin.org/anything',
        method: 'PATCH',
        rel: 'update',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'POST',
        rel: 'create',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ],
    meta: {
      fields: {
        'data.description': {
          meta: {
            options: {
              list: [
                {
                  '@type': 'type.furo.com/furo.Optionitem',
                  id: '1',
                  display_name: 'Most used description',
                },
                {
                  '@type': 'type.furo.com/furo.Optionitem',
                  id: '2',
                  display_name: 'Most used description 2',
                },
                {
                  '@type': 'type.googleapis.com/furo.Optionitem',
                  id: '3',
                  display_name: 'Most used description 3',
                },
              ],
            },
          },
        },
        'data.furo_data_checkbox_input': {
          meta: {
            label: 'checkbox label via meta',
            readonly: false,
            placeholder: 'Additional checkbox text',
          },
        },
        'data.furo_data_text_input': {
          meta: {
            label: 'text input label via meta',
            readonly: false,
          },
        },
        'data.furo_data_number_input': {
          meta: {
            label: 'number input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_time_input': {
          meta: {
            label: 'time input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_color_input': {
          meta: {
            label: 'color input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_textarea_input': {
          meta: {
            label: 'textarea input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_date_input': {
          meta: {
            label: 'date input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_date_input_google': {
          meta: {
            label: 'google date input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_range_input': {
          meta: {
            label: 'range input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_bool_icon': {
          meta: {
            label: 'bool input label via meta',
            readonly: true,
          },
        },
        'data.furo_data_money_input.currency_code': {
          meta: {
            options: {
              list: [
                {
                  '@type': 'type.furo.com/furo.Optionitem',
                  id: 'CHF',
                  display_name: 'CHF',
                },
                {
                  '@type': 'type.furo.com/furo.Optionitem',
                  id: 'EUR',
                  display_name: 'EUR',
                },
                {
                  '@type': 'type.furo.com/furo.Optionitem',
                  id: 'USD',
                  display_name: 'USD',
                },
              ],
            },
          },
        },
      },
    },
  };

  const options = {
    entities: [
      {
        data: {
          display_name: 'John Doe, +41783332244',
          first_name: 'John',
          id: '1',
          name: 'Doe',
          phone_nr: '+41783332244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Tari Sakota, +41791532244',
          first_name: 'Tari',
          id: '2',
          name: 'Sakota',
          phone_nr: '+41791532244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/2/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Yoko Tasimoto, +41781442244',
          first_name: 'Yoko',
          id: '3',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/3/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Lola Tasimoto, +41781442244',
          first_name: 'Lola',
          id: '4',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/4/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
    ],
    links: [
      {
        href: '/mockdata/persons/list.json',
        method: 'GET',
        rel: 'list',
        type: 'person.PersonCollection',
        service: 'PersonService',
      },
    ],
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-select
            ƒ-bind-data="--dao(*.data.description)"
            ƒ-bind-options="--collection(*.entities)"
          >
            <ui5-option data-id="1">1</ui5-option>
            <ui5-option data-id="2">2</ui5-option>
            <ui5-option data-id="3">3</ui5-option>
            <ui5-option data-id="4">4</ui5-option>
            <div slot="valueStateMessage">
              Information message. If you use ui5-option elements without data-id attribute, the
              selected value is the innerText of the option.
            </div>
          </furo-ui5-data-select>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--dao"
          ></furo-data-object>
          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao, daoCollection] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await daoCollection.updateComplete;
  });

  it('should be a furo-ui5-data-select element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-select');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should bind a field node', done => {
    daoCollection.injectRaw(options);

    setTimeout(() => {
      assert.equal(input.activeFieldBinding, true);
      done();
    }, 0);
  });

  it('should detect a field value change event', done => {
    input._privilegedAttributes['id-field-path'] = 'data.id';
    input._privilegedAttributes['id-field-path'] = 'data.id';
    input._privilegedAttributes['display-field-path'] = 'data.display_name';

    daoCollection.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input.activeFieldBinding, true, 'field binding');
        dao.data.data.description._value = '3';
        setTimeout(() => {
          assert.equal(input.selectedOption.dataset.id, 3, 'selected element');
          done();
        }, 35);
      }, 50);
    });

    daoCollection.injectRaw(options);
  });
});
