import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-segmented-button', () => {
  let host;
  let segmentedButton;
  let dao;

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
  const testDataArray = [
    {
      id: 1,
      display_name: 'Item 1',
    },
    {
      id: 2,
      display_name: 'Item 2',
    },
    {
      id: 3,
      display_name: 'Item 3',
    },
  ];

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-segmented-button
            ƒ-bind-data="--daoPerson(*.sex)"
          ></furo-ui5-data-segmented-button>
          <furo-data-object type="person.Person" @-object-ready="--daoPerson"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, segmentedButton, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await segmentedButton.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-segmented-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(segmentedButton.nodeName.toLowerCase(), 'furo-ui5-data-segmented-button');
    done();
  });

  it('should have options from API SPEC', done => {
    setTimeout(() => {
      assert.equal(segmentedButton.querySelectorAll('ui5-segmented-button-item').length, 3);
      done();
    }, 16);
  });

  it('should have the basic attribute values', done => {
    setTimeout(() => {
      assert.equal(segmentedButton._privilegedAttributes.readonly, null, 'readonly state');
      assert.equal(segmentedButton._privilegedAttributes['id-field-path'], 'id', 'idFieldPath');
      assert.equal(
        segmentedButton._privilegedAttributes['value-field-path'],
        'id',
        'valueFieldPath',
      );
      assert.equal(
        segmentedButton._privilegedAttributes['display-field-path'],
        'display_name',
        'displayFieldPath',
      );

      done();
    }, 116);
  });

  it('should activate the correct item', done => {
    dao.data.sex._value = 'male';

    setTimeout(() => {
      assert.equal(segmentedButton.querySelectorAll("[data-id='male']").length, 1);
      done();
    }, 16);
  });
});
