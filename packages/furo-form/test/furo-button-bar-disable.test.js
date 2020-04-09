import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data';

describe('furo-button-bar-disable', () => {
  let element;
  let dao;
  let agent;
  let qp;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-button-bar ƒ-bind-entity="--objReady">
            <furo-button label="disable if pristine" disable-pristine @-click=""></furo-button>
            <furo-button label="disable if not valid" disable-not-valid @-click=""></furo-button>
          </furo-button-bar>

          <furo-deep-link service="TaskService" @-hts-out="--hts"> </furo-deep-link>
          <furo-entity-agent
            service="TaskService"
            ƒ-hts-in="--hts"
            @-response="--response"
          ></furo-entity-agent>
          <furo-data-object
            type="task.TaskEntity"
            ƒ-inject-raw="--response"
            @-object-ready="--objReady"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, qp, agent, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-button-bar', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-button-bar');
    done();
  });

  it('agent should be a furo-entity-agent', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(agent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  it('dao should be a furo-data-object', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dao.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('qp should be a furo-deep-link', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(qp.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should set the correct disabled states', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      let cntDisabled = 0;
      console.log(dao);
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('disabled') !== null) {
          cntDisabled += 1;
        }
      });
      assert.equal(cntDisabled, 1);
      done();
    });
    qp.qpIn({ tsk: 2 });
  });

  it('should detect a field change', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      let cntDisabled = 0;

      dao.data.data.description._value = 'modified value';
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('disabled') !== null) {
          cntDisabled += 1;
        }
      });
      assert.equal(cntDisabled, 0);
      done();
    });
    qp.qpIn({ tsk: 2 });
  });
});
