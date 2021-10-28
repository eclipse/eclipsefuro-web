import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-fat-int64.js';

describe('display-furo-fat-int64', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-fat-int64 ƒ-bind-data="--dao(*.fat_int64)"></display-furo-fat-int64>
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

  it('should be a display-furo-fat-int64 element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-fat-int64');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.value._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    dao.injectRaw({ fat_int64: { value: 33 } });

    setTimeout(() => {
      assert.equal(display._field.value._value, 33, 'check if the fat.int64 value is assigned');
      assert.equal(display._displayValue, '33', 'check if the fat.int64 value is formatted');
      done();
    }, 0);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
