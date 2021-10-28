import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-google-type-date.js';
import { Env } from '@furo/framework';

describe('display-google-type-date', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-type-date
            ƒ-bind-data="--dao(*.furo_data_date_input_google)"
          ></display-google-type-date>
          <furo-data-object type="experiment.Experiment" @-object-ready="--dao"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a display-google-type-date element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-type-date');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.year._value, null);
      assert.equal(display._field.month._value, null);
      assert.equal(display._field.day._value, null);
      assert.equal(display._displayValue, '');
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ furo_data_date_input_google: { year: '2000', day: '12', month: '11' } });
    setTimeout(() => {
      assert.equal(display._displayValue, '12.11.2000');

      done();
    }, 110);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
