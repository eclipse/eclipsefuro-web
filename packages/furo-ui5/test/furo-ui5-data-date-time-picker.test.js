import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-date-time-picker', () => {
  let host;
  let datepicker;
  let datepicker2;
  let dao;

  const testRecordMeta = {
    data: {
      google_timestamp: '2017-10-15T01:30:15.01Z',
    },
    meta: {
      fields: {
        'data.google_timestamp': {
          meta: {
            label: 'google timestamp label via meta',
            readonly: false,
          },
          constraints: {
            max: { is: '2020-09-30', message: 'MAX 2020-09-30' },
            min: { is: '2020-07-30', message: 'MIN 2020-07-30' },
            pattern: {
              is: 'dd.MM.yyyy hh:mm aa',
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
          <furo-ui5-data-date-time-picker
            ƒ-bind-data="--entity(*.data.google_timestamp)"
          ></furo-ui5-data-date-time-picker>
          <furo-ui5-data-date-time-picker
            ƒ-bind-data="--entity(*.data.google_timestamp)"
          ></furo-ui5-data-date-time-picker>
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

  it('should be a furo-ui5-data-date-time-picker element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(datepicker.nodeName.toLowerCase(), 'furo-ui5-data-date-time-picker');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(datepicker));

  // TODO: min max is implemented wrong
  xit('should set min- and max-date via spec', done => {
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(
        datepicker.formatValue(new Date(2020, 6, 30)),
        datepicker.minDate,

        'check if set minDate from spec',
      );
      assert.equal(
        datepicker.formatValue(new Date(2020, 8, 30)),
        datepicker.maxDate,

        'check if set maxDate from spec',
      );
      done();
    }, 10);
  });

  it('should have the basic attributes of the fieldNode ', done => {
    setTimeout(() => {
      assert.equal(datepicker._state.disabled, false, 'check disabled');
      assert.equal(datepicker._state.readonly, false, 'check readonly');
      assert.equal(datepicker._state.hideWeekNumbers, false, 'check hideWeekNumbers');
      assert.equal(datepicker._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });

  it('should display date according to the defined pattern', done => {
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(datepicker.formatPattern, 'dd.MM.yyyy hh:mm aa', 'pattern applied');
      assert.equal(datepicker._state.value, '15.10.2017 03:30 AM', 'check value');
      done();
    }, 10);
  });
});
