import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-catalog.js';
import '../src/display-bool.js';

describe('display-bool', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-bool ƒ-bind-data="--dao(*.furo_data_checkbox_input)"></display-bool>
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

  it('should be a display-bool element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-bool');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    dao.injectRaw({ furo_data_checkbox_input: true });

    setTimeout(() => {
      assert.equal(display._field._value, true, 'check if bool true');
      assert.equal(
        display.shadowRoot.querySelector('ui5-icon').getAttribute('name'),
        'accept',
        'check if template is right',
      );
      done();
    }, 0);
  });

  it('should show accoring to data value', done => {
    dao.injectRaw({ furo_data_checkbox_input: 'false' });

    setTimeout(() => {
      assert.equal(display._field._value, 'false');
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
