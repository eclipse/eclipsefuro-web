import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-date-picker', () => {
  let host;
  let datepicker;
  let datepicker2;
  let dao;

  const testRecordMeta = {
    data: {
      furo_data_date_input: '2019-02-22',
      furo_data_date_input_google: {
        day: 31,
        display_name: '31.12.2020',
        month: 12,
        year: 2020,
      },
    },
    meta: {
      fields: {
        'data.furo_data_date_input': {
          meta: {
            label: 'date input label via meta',
            readonly: false,
          },
        },
        'data.furo_data_date_input_google': {
          meta: {
            label: 'google date input label via meta',
            readonly: false,
          },
          constraints: {
            max: { is: '2020-09-30', message: 'MAX 2020-09-30' },
            min: { is: '2020-07-30', message: 'MIN 2020-07-30' },
            pattern: {
              is: 'dd.MM.yy',
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
          <furo-ui5-data-date-picker
            ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
          ></furo-ui5-data-date-picker>
          <furo-ui5-data-date-picker
            ƒ-bind-data="--entity(*.data.furo_data_date_input)"
          ></furo-ui5-data-date-picker>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, datepicker, datepicker2, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await datepicker.updateComplete;
    await datepicker2.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-date-picker element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(datepicker.nodeName.toLowerCase(), 'furo-ui5-data-date-picker');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(datepicker));

  it('should set min- and max-date via spec', done => {
    setTimeout(() => {
      assert.equal(datepicker._state.minDate, '1800-01-01', 'check if set minDate from spec');
      assert.equal(datepicker._state.maxDate, '2099-12-31', 'check if set maxDate from spec');
      done();
    }, 0);
  });

  it('should have the basic attributes of the fieldNode set (google.type.Date)', done => {
    setTimeout(() => {
      assert.equal(datepicker._state.disabled, false, 'check disabled');
      assert.equal(datepicker._state.placeholder, 'google-date-input**', 'check placeholder');
      assert.equal(datepicker._state.readonly, false, 'check readonly');
      assert.equal(datepicker._state.hideWeekNumbers, false, 'check hideWeekNumbers');
      assert.equal(datepicker._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });

  it('should have the basic attributes of the fieldNode set (Scalar type string)', done => {
    setTimeout(() => {
      assert.equal(datepicker2._state.disabled, false, 'check disabled');
      assert.equal(datepicker2._state.placeholder, 'date-input**', 'check placeholder');
      assert.equal(datepicker2._state.readonly, false, 'check readonly');
      assert.equal(datepicker2._state.hideWeekNumbers, false, 'check hideWeekNumbers');
      assert.equal(datepicker2._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });

  it('should update the value of the bound fieldNode (google.type.Date)', done => {
    setTimeout(() => {
      datepicker.formatPattern = 'dd.MM.yy';
      datepicker.setValue({ day: 9, month: 8, year: 2020 });
      assert.equal(datepicker._state.value, '09.08.20');
      assert.equal(dao.data.data.furo_data_date_input_google.year._value, 2020);
      assert.equal(dao.data.data.furo_data_date_input_google.month._value, 8);
      assert.equal(dao.data.data.furo_data_date_input_google.day._value, 9);
      done();
    }, 0);
  });

  it('should update the value of the bound fieldNode (string type)', done => {
    setTimeout(() => {
      datepicker2.formatPattern = 'dd.MM.yyyy';
      datepicker2.setValue('2012-12-13');
      assert.equal(datepicker2._state.value, '2012-12-13');
      assert.equal(dao.data.data.furo_data_date_input._value, '2012-12-13');
      done();
    }, 0);
  });

  it('should apply meta and constraints to the bound field (google.type.Date)', done => {
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(datepicker._state.disabled, false, 'check disabled');
      assert.equal(
        datepicker._state.placeholder,
        'google date input label via meta',
        'check placeholder',
      );
      assert.equal(datepicker._state.readonly, false, 'check readonly');
      assert.equal(datepicker._state.value, '31.12.20', 'check value');
      assert.equal(datepicker._state.valueState, 'None', 'check valueState');
      assert.equal(
        datepicker._state.minDate,
        '2020-07-30',
        'check if set minDate from response meta',
      );
      assert.equal(
        datepicker._state.maxDate,
        '2020-09-30',
        'check if set maxDate from response meta',
      );
      assert.equal(datepicker._state.formatPattern, 'dd.MM.yy', 'check formatPattern');
      done();
    }, 0);
  });

  it('should apply meta and constraints to the bound field (type string)', done => {
    dao.injectRaw(testRecordMeta);
    datepicker2.formatPattern = 'dd.MM.yyyy';
    setTimeout(() => {
      assert.equal(datepicker2._state.disabled, false, 'check disabled');
      assert.equal(
        datepicker2._state.placeholder,
        'date input label via meta',
        'check placeholder',
      );
      assert.equal(datepicker2._state.readonly, false, 'check readonly');
      assert.equal(datepicker2._state.value, '22.02.2019', 'check value');
      assert.equal(datepicker2._state.valueState, 'None', 'check valueState');
      assert.equal(
        datepicker2._state.maxDate,
        '2099-12-31',
        'check if set MaxDate from response meta',
      );
      assert.equal(
        datepicker2._state.minDate,
        '1800-01-01',
        'check if set minDate from response meta',
      );
      assert.equal(datepicker2._state.formatPattern, 'dd.MM.yyyy', 'check formatPattern');
      done();
    }, 10);
  });
});
