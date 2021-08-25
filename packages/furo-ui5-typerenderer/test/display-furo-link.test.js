import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-link.js';

describe('display-furo-link', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-link ƒ-bind-data="--dao(*.owner.link)"></display-furo-link>
          <furo-data-object type="task.Task" @-object-ready="--dao"></furo-data-object>
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

  it('should be a display-furo-link element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-link');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._value.rel, 'list');
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    setTimeout(() => {
      assert.equal(display._field._value.rel, 'list');
      assert.equal(display._field._value.href, '/mockdata/persons/list.json');
      done();
    }, 0);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
