import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-google-type-money.js';
import { Env } from '@furo/framework';

describe('display-google-type-money', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-type-money
            ƒ-bind-data="--dao(*.furo_data_money_input)"
          ></display-google-type-money>
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

  it('should be a display-google-type-money element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-type-money');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.units._value, null);
      assert.equal(display._field.currency_code._value, '');
      assert.equal(display._field.nanos._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ furo_data_money_input: { units: 12, nanos: 44, currency_code: 'CHF' } });
    setTimeout(() => {
      assert.equal(display._displayValue, '12,44 CHF');

      done();
    }, 110);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
