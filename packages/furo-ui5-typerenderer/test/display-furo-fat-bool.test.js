import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-fat-bool.js';

describe('display-furo-fat-bool', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-fat-bool ƒ-bind-data="--dao(*.fat_bool)"></display-furo-fat-bool>
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

  it('should be a display-furo-fat-bool element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-fat-bool');
    done();
  });

  it('should bind data', done => {
    assert.equal(display._field.value._value, null);
    done();
  });

  it('should show template according to the value of the data', done => {
    dao.injectRaw({ fat_bool: { value: true } });

    setTimeout(() => {
      assert.equal(display._field.value._value, true, 'check if bool true');
      assert.equal(
        display.shadowRoot.querySelector('ui5-icon').getAttribute('name'),
        'accept',
        'check if template is right',
      );
      done();
    }, 0);
  });

  it('should show accoring to data value', done => {
    dao.injectRaw({ fat_bool: { value: false } });

    setTimeout(() => {
      assert.equal(display._field.value._value, false);
      assert.equal(
        display.shadowRoot.querySelector('ui5-icon').getAttribute('name'),
        'border',
        'check if template is right',
      );
      done();
    }, 0);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
