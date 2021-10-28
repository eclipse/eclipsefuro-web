import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-google-type-timeofday.js';
import { Env } from '@furo/framework';

describe('display-google-type-timeofday', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-type-timeofday
            ƒ-bind-data="--dao(*.google_timeofday)"
          ></display-google-type-timeofday>
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

  it('should be a display-google-type-timeofday element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-type-timeofday');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.hours._value, null);
      assert.equal(display._field.minutes._value, null);
      assert.equal(display._field.seconds._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ google_timeofday: { hours: 13, minutes: 23, seconds: 45 } });
    setTimeout(() => {
      assert.equal(display._displayValue, '13:23:45');

      done();
    }, 110);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
