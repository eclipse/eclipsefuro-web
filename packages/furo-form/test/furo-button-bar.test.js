import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data';

describe('furo-button-bar', () => {
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
            <furo-button
              rel="update"
              hide-no-rel
              hide-not-valid
              hide-pristine
              primary
              unelevated
              label="save"
              @-click="-^update-req"
            ></furo-button>
            <furo-button
              rel="self"
              hide-no-rel
              hide-not-valid
              hide-pristine
              outline
              label="reload"
              @-click="-^self-req"
            ></furo-button>
            <furo-button label="always visible" @-click=""></furo-button>
            <furo-button label="hide if pristine" hide-pristine @-click=""></furo-button>
            <furo-button label="hide if invalid" hide-not-valid @-click=""></furo-button>
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

  it('should bind a entity', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      assert.equal(element._entity.data.description._value, 'Apply new documentation structure');
      done();
    });
    qp.qpIn({ tsk: 1 });
  });

  it('should do nothing if no attributes are set', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      let count = 0;
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('hidden') !== '') {
          count += 1;
        }
      });
      // should have button 'self' and button 'always visible'
      assert.equal(count, 2);
      done();
    });
    qp.qpIn({ tsk: 1 });
  });

  it('should disable all elements inside', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      element.disableAll();

      let count = 0;
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('disabled') !== null) {
          count += 1;
        }
      });
      assert.equal(count, 5);
      done();
    });
    qp.qpIn({ tsk: 1 });
  });

  it('should enable all elements inside', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      element.disableAll();
      element.enableAll();

      let count = 0;
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('disabled') !== null) {
          count += 1;
        }
      });
      assert.equal(count, 0);
      done();
    });
    qp.qpIn({ tsk: 1 });
  });

  it('should set the correct states', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      let cntDisabled = 0;
      let cntHidden = 0;
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements();
      slotted.forEach(e => {
        if (e.getAttribute('disabled') !== null) {
          cntDisabled += 1;
        }
        if (e.getAttribute('hidden') !== null) {
          cntHidden += 1;
        }
      });
      assert.equal(cntDisabled, 0);
      assert.equal(cntHidden, 3);
      done();
    });
    qp.qpIn({ tsk: 2 });
  });

  it('should hide when object invalid and button has attribute hide-not-valid ', done => {
    agent.loadOnHtsIn = true;

    agent.addEventListener('response', () => {
      dao.data._isValid=false;
      element._updateElements(dao.data);
      const slotted = element.shadowRoot.firstElementChild.children[0].assignedElements()[4];
      assert.equal(slotted.getAttribute('hidden'), '');
      done();
    });

    qp.qpIn({ tsk: 2 });
  });
});
