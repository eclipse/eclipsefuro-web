import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-type-money.js';
import { Env } from '@furo/framework';

describe('display-furo-type-money', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-type-money ƒ-bind-data="--dao(*.furo_type_money)"></display-furo-type-money>
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

  it('should be a display-furo-type-money element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-type-money');
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

  it('should show display_name when it exists', done => {
    Env.locale = 'de';
    dao.injectRaw({
      furo_type_money: { display_name: '10 Euro', units: 12, nanos: 44, currency_code: 'CHF' },
    });
    setTimeout(() => {
      assert.equal(display._displayValue, '10 Euro');

      done();
    }, 100);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
