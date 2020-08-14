import { fixture, html } from '@open-wc/testing'
import 'axe-core/axe.min.js'
import { axeReport } from 'pwa-helpers/axe-report.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js'
import '@furo/fbp/src/testhelper/test-bind.js' // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js'

import '../src/furo-catalog.js'

describe('furo-ui5-data-text-input-scalar', () => {
  let host
  let input
  let dao

  const testRecordMeta =
    {
      'data': {
        'description': 'Description from record',
        'display_name': 'display_name',
        'id': '1',
        'furo_data_checkbox_input': true,
        'furo_data_text_input': 'hallo test with loads of text to show the overflow. hallo test with loads of text to show the overflow.',
        'furo_data_number_input': 12.55,
        'furo_data_time_input': '17:34',
        'furo_data_color_input': '#e318ed',
        'furo_data_textarea_input': 'hallo , this is textarea input',
        'furo_data_date_input': '2019-02-22',
        'furo_data_date_input_google': {
          'day': 31,
          'display_name': '31.12.2020',
          'month': 12,
          'year': 2020,
        },
        'furo_data_range_input': 31,
        'furo_data_bool_icon': false,
        'type_property': [
          {
            'code': 'c0a7f550-0fbe-4046-8fa9-60c86327b6b1',
            'data': {
              '@type': 'type.googleapis.com/furo.StringProperty',
              'data': '01032020',
            },
            'flags': ['is-overwritable', 'my-prop'],
            'display_name': 'Vertragsbeginn',
            'id': '246d79a0-0a15-43c5-b18f-ac8a4a449df1',
            'meta': {
              'fields': {
                'data': {
                  'constraints': {
                    'required': {
                      'is': 'true',
                      'message': 'Bitte ausfüllen!',
                    },
                  },
                  'meta': {
                    'label': 'Vertragsbeginn custom label',
                    'readonly': true,
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/google.type.Date',
              'day': 8,
              'month': 11,
              'year': 2022,
              'display_name': '8.11.2022',
            },
            'display_name': 'a date',
            'id': 'a',
            'code': 'date',
            'meta': {
              'fields': {
                'data': {
                  'meta': {
                    'label': 'datelabel',
                    'hint': 'datehint is data',
                    'readonly': true,
                  },
                  'constraints': {
                    'min': {
                      'is': '2019-09-09',
                      'message': 'to small',
                    },
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/furo.NumberProperty',
              'data': 34.23,
              'display_name': '34.23',
            },
            'display_name': 'Display',
            'id': 'bb',
            'code': 'option',
            'meta': {
              'fields': {
                'data.data': {
                  'meta': {
                    'label': 'Float',
                    'hint': 'Type in int',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/google.protobuf.StringValue',
              'value': 'text google.protobuf.StringValue',
              'display_name': '342',
            },
            'display_name': 'Display',
            'id': 'op33t',
            'code': 'option',
            'meta': {
              'fields': {
                'data.value': {
                  'meta': {
                    'label': 'Google string',
                    'hint': 'Type in int',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/furo.StringOptionProperty',
              'id': 'bb',
              'display_name': 'Display',
            },
            'display_name': 'Display',
            'id': '444',
            'code': 'option',
            'meta': {
              'fields': {
                'data': {
                  'meta': {
                    'label': 'Please select',
                    'hint': 'datehint is data',
                    'repeated': false,
                    'options': {
                      'list': [
                        {
                          'id': '',
                          'display_name': 'Please select',
                        },
                        {
                          'id': 'aa',
                          'display_name': 'The display a',
                        },
                        {
                          'id': 'bb',
                          'display_name': 'The display b',
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/furo.StringProperty',
              'data': '32 32 23',
              'display_name': 'a date',
            },
            'id': 'bv3',
            'code': 'date',
            'meta': {
              'fields': {
                'data.data': {
                  'meta': {
                    'label': 'repeated fields',
                    'hint': 'this is data',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'xx/google.protobuf.BoolValue',
              'value': true,
            },
            'display_name': 'Display',
            'id': 'xxxxxx',
            'meta': {
              'fields': {
                'data.value': {
                  'meta': {
                    'label': 'is online',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'furo.fat.String',
              'value': 'text furo.fat.String',
              'display_name': 'furo.fat.String',
            },
            'display_name': 'Display',
            'id': 'op33t',
            'code': 'option',
            'meta': {
              'fields': {
                'data.value': {
                  'meta': {
                    'label': 'fat string',
                    'hint': 'Type in fat string',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'furo.fat.Int32',
              'value': 22,
              'display_name': 'furo.fat.Int32',
            },
            'display_name': 'Display',
            'id': 'op33t',
            'code': 'option',
            'meta': {
              'fields': {
                'data.value': {
                  'meta': {
                    'label': 'fat int',
                    'hint': 'Type in fat int',
                  },
                },
              },
            },
          },
          {
            'data': {
              '@type': 'furo.fat.Bool',
              'value': true,
              'display_name': 'furo.fat.Bool',
            },
            'display_name': 'Display',
            'id': 'op33t',
            'code': 'option',
            'meta': {
              'fields': {
                'data.value': {
                  'meta': {
                    'label': 'fat Bool',
                    'hint': 'Type in fat Bool',
                  },
                },
              },
            },
          },
        ],
        'single_type_property': {
          'data': {
            '@type': 'xx/google.type.Date',
            'day': 8,
            'month': 11,
            'year': 2022,
            'display_name': '8.11.2022',
          },
          'display_name': 'a date',
          'id': 'date',
          'code': 'date',
          'meta': {
            'fields': {
              'data': {
                'meta': {
                  'label': 'Additional fields',
                  'hint': 'this is data',
                  'readonly': true,
                },
                'constraints': {
                  'min': {
                    'is': '2019-09-09',
                    'message': 'to small',
                  },
                },
              },
            },
          },
        },
        'repstring': [
          'AAA',
          'BBBB',
          'CCCC',
        ],
        'furo_data_money_input': {
          'currency_code': 'CHF',
          'units': 3333,
          'nanos': 75100000,
        },
      },
      'links': [
        {
          'href': '/mockdata/experiments/1/get-less-props.json',
          'method': 'GET',
          'rel': 'self',
          'type': 'experiment.ExperimentEntity',
          'service': 'ExperimentService',
        }
      ],
      'meta': {
        'fields': {
          'data.description': {
            'meta': {
              'label': 'My description',
              'readonly': false,
              'hint': 'Please enter a description'
            },
            "constraints": {
              "required": {
                "is": "true",
                "message": "Please fill in!"
              }
            },
          },
        },
      },
    }


  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.data.description)"></furo-ui5-data-text-input>
          <furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"></furo-data-object>
        </template>
      </test-bind>
    `)
    await testbind.updateComplete
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children
    await host.updateComplete
    await input.updateComplete
    await dao.updateComplete
  })

  it('should be a furo-ui5-data-text-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-text-input')
    done()
  })

  // axeReport a11y tests
  xit('a11y', () => axeReport(input))

  it('should have the basic attributes of the fieldNode set', done => {

    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled')
      assert.equal(input._state.highlight, false, 'check highlight')
      assert.equal(input._state.placeholder, 'Description**', 'check placeholder')
      assert.equal(input._state.readonly, false, 'check readonly')
      assert.equal(input._state.required, false, 'check required')
      assert.equal(input._state.type, 'Text', 'check type')
      assert.equal(input._state.value, 'Default Description', 'check value')
      assert.equal(input._state.valueState, 'None', 'check valueState')
      assert.equal(input._state.name, '', 'check name')
      assert.equal(input._state.showSuggestions, false, 'check showSuggestions')
      assert.equal(input._state.maxlength, undefined, 'check maxlength')
      assert.equal(input._state.ariaLabel, '', 'check ariaLabel')
      done()
    }, 16)

  })

  it('should update the value of the bound fieldNode', done => {
    dao.data.data.description.addEventListener('field-value-changed', () => {
      assert.equal(input._state.value, 'New description set')
      assert.equal(dao.data.data.description._value, 'New description set')
      done()
    })
    input.setValue('New description set')
  })

  it('an update of a scalar value on the data object should be synchronized with the input field', done => {
    dao.data.data.description._value = 'Set data in the inner input element'
    assert.equal(input._state.value, 'Set data in the inner input element')
    done()
  })

  it('should set ui5 icon to the component', done => {

    input.ui5Icon = 'filter'
    const icon = input.querySelector('ui5-icon')
    assert.equal(icon.name, 'filter')
    assert.equal(icon.slot, 'icon')
    done()

  })

  it('should apply meta and constraints to the bound field', done => {

    dao.addEventListener('data-injected', ()=>{
      assert.equal(input._state.disabled, false, 'check disabled')
      assert.equal(input._state.highlight, false, 'check highlight')
      assert.equal(input._state.placeholder, 'My description', 'check placeholder')
      assert.equal(input._state.readonly, false, 'check readonly')
      assert.equal(input._state.required, true, 'check required')
      assert.equal(input._state.type, 'Text', 'check type')
      assert.equal(input._state.value, 'Description from record', 'check value')
      assert.equal(input._state.valueState, 'None', 'check valueState')
      assert.equal(input._state.name, '', 'check name')
      assert.equal(input._state.showSuggestions, false, 'check showSuggestions')
      assert.equal(input._state.maxlength, undefined, 'check maxlength')
      assert.equal(input._state.ariaLabel, '', 'check ariaLabel')
      assert.equal(input.__hint, 'Please enter a description', 'check hint')
      assert.equal(input.pristine, true, 'Please enter a description', 'check pristine')
      assert.equal(input.binder.fieldFormat, 'scalar', 'check fieldFormat')

      done();
    });

    dao.injectRaw(testRecordMeta);

  })


})

