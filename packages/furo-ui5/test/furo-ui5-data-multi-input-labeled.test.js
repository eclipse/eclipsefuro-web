import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-multi-input-labeled', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      id: '1',
      display_name: 'Rework documentation',
      description: 'Apply new documentation structure',
      estimated_time: 5,
      owner: {
        display_name: 'John Doe, +41783332244',
        id: '1',
        rel: 'List',
        href: '/mockdata/persons/1/get.json',
        method: 'GET',
        type: 'person.Person',
      },
      subtasks: [],
    },
    links: [
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ],
    meta: {
      fields: {
        'data.description': {
          meta: {
            label: 'Description set from response',
            readonly: false,
            hint: 'Please enter a description',
          },
          constraints: {
            required: {
              is: 'true',
              message: 'Please fill in!',
            },
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-multi-input-labeled
            ƒ-bind-data="--entity(*.data.repstring)"
          ></furo-ui5-data-multi-input-labeled>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-multi-input-labeled element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-multi-input-labeled');
    done();
  });

  it('should have a label component inside', done => {
    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'Description**', 'check label text');

      done();
    }, 16);
  });

  it('should update meta information', done => {
    setTimeout(() => {
      if (dao.injectRaw(testRecordMeta)) {
        setTimeout(() => {
          const inputElement = input.shadowRoot.querySelector('furo-ui5-data-multi-input');
          assert.equal(input.label, 'Description**', 'check label text');
          done();
        }, 32);
      }
    }, 16);
  });

  it('should support attribute disabled ', done => {
    input.setAttribute('disabled', '');
    setTimeout(() => {
      const component = input.shadowRoot.getElementById('Input');
      assert.equal(component.getAttribute('disabled'), '', 'check attribute disabled ');
      done();
    }, 0);
  });
});
