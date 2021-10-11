import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-segmented-button-bind', () => {
  let host;
  let segmentedButton;
  let input;
  let dao;
  let daoRepeater;

  const testData = {
    entities: [
      {
        data: {
          display_name: 'John Doe, +41783332244',
          first_name: 'John',
          id: '1',
          name: 'Doe',
          phone_nr: '+41783332244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Tari Sakota, +41791532244',
          first_name: 'Tari',
          id: '2',
          name: 'Sakota',
          phone_nr: '+41791532244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/2/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Yoko Tasimoto, +41781442244',
          first_name: 'Yoko',
          id: '3',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/3/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Lola Tasimoto, +41781442244',
          first_name: 'Lola',
          id: '4',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/4/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
    ],
    links: [
      {
        href: '/mockdata/persons/list.json',
        method: 'GET',
        rel: 'list',
        type: 'person.PersonCollection',
        service: 'PersonService',
      },
    ],
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-segmented-button
            value-field-path="data.id"
            id-field-path="data.id"
            display-field-path="data.display_name"
            ƒ-bind-data="--entity(*.owner.id)"
          >
            <ui5-segmented-button-item data-id="A">Option A</ui5-segmented-button-item>
            <ui5-segmented-button-item data-id="B"
              >Option B with a very long text</ui5-segmented-button-item
            >
            <ui5-segmented-button-item data-id="C">Option C</ui5-segmented-button-item>
          </furo-ui5-data-segmented-button>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-data-text-input>
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
            ƒ-inject-raw="--response"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, segmentedButton, input, dao, daoRepeater] = testbind.parentNode.children;
    await host.updateComplete;
    await segmentedButton.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await daoRepeater.updateComplete;
  });

  it('should be a furo-ui5-data-segmented-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(segmentedButton.nodeName.toLowerCase(), 'furo-ui5-data-segmented-button');
    done();
  });

  it('should have options from markup', done => {
    setTimeout(() => {
      assert.equal(segmentedButton.querySelectorAll('ui5-segmented-button-item').length, 3);
      done();
    }, 16);
  });

  it('should update toggle buttons after bindOptions', done => {
    segmentedButton.bindOptions(daoRepeater.data.entities);
    daoRepeater.injectRaw(testData);

    setTimeout(() => {
      assert.equal(segmentedButton.querySelectorAll('ui5-segmented-button-item').length, 4);
      done();
    }, 16);
  });

  it('should send event after select a toggle', done => {
    segmentedButton.addEventListener('item-selected', e => {
      assert.equal(e.detail.data.id._value, '2');
      done();
    });

    daoRepeater.addEventListener('data-injected', () => {
      setTimeout(() => {
        segmentedButton.children[1].click();
      }, 16);
    });

    segmentedButton.bindOptions(daoRepeater.data.entities);
    daoRepeater.injectRaw(testData);
  });
});
