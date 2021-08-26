import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-type-date.js';
import { Env } from '@furo/framework';

describe('display-furo-type-date', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-type-date ƒ-bind-data="--dao(*.furo_type_date)"></display-furo-type-date>
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

  it('should be a display-furo-type-date element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-type-date');
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

  it('should show date according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ furo_type_date: { year: '2000', day: '12', month: '11' } });
    setTimeout(() => {
      assert.equal(display._displayValue, '12.11.2000');

      done();
    }, 110);
  });

  it('should show display_name when it exists ', done => {
    Env.locale = 'de';
    dao.injectRaw({
      furo_type_date: { year: '2000', day: '12', month: '11', display_name: '10.10.2000' },
    });
    setTimeout(() => {
      assert.equal(display._displayValue, '10.10.2000');

      done();
    }, 110);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
