import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-fat-string.js';

describe('display-furo-fat-string', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-fat-string ƒ-bind-data="--dao(*.fat_string)"></display-furo-fat-string>
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

  it('should be a display-furo-fat-string element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-fat-string');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.value._value, '');
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    dao.injectRaw({ fat_string: { value: 'fat string' } });

    setTimeout(() => {
      assert.equal(
        display._field._value.value,
        'fat string',
        'check if the fat.string value is formatted',
      );
      done();
    }, 0);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
