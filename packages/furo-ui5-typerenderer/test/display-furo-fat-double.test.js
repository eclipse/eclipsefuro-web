import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-fat-double.js';
import { Env } from '@furo/framework';

describe('display-furo-fat-double', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-fat-double ƒ-bind-data="--dao(*.fat_double)"></display-furo-fat-double>
          <furo-data-object
            type="universaltest.Universaltest"
            @-object-ready="--dao"
          ></furo-data-object>
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

  it('should be a display-furo-fat-double element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-fat-double');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.value._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ fat_double: { value: 12.21111111, labels: [], attributes: [] } });

    setTimeout(() => {
      console.log(display._field);
      assert.equal(
        display._field.value._value,
        12.21111111,
        'check if the fat.double value is assigned',
      );
      assert.equal(display._displayValue, '12,211', 'check if the fat.double value is formatted');
      done();
    }, 10);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
