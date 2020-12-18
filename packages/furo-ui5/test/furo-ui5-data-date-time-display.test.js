import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-date-time-display', () => {
  let host;
  let dateDisplay;
  let dateDisplay2;
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
          <furo-ui5-data-date-time-display
            ƒ-bind-data="--entity(*.data.google_timestamp)"
          ></furo-ui5-data-date-time-display>
          <furo-ui5-data-date-time-display
            ƒ-bind-data="--entity(*.data.google_timestamp)"
          ></furo-ui5-data-date-time-display>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dateDisplay, dateDisplay2, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await dateDisplay.updateComplete;
    await dateDisplay2.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-date-time-display element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(dateDisplay.nodeName.toLowerCase(), 'furo-ui5-data-date-time-display');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dateDisplay));

  it('should set min- and max-date via spec', done => {
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(dateDisplay.minDate, '2020-07-30', 'check if set minDate from spec');
      assert.equal(dateDisplay.maxDate, '2020-09-30', 'check if set maxDate from spec');
      done();
    }, 10);
  });

  it('should have the basic attributes of the fieldNode ', done => {
    dao.injectRaw(testRecordMeta);

    setTimeout(() => {
      assert.equal(dateDisplay.formatPattern, 'dd.MM.yyyy hh:mm aa', 'check formatPattern');
      done();
    }, 0);
  });

});
