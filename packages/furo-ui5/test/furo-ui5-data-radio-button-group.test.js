import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-radio-button-group', () => {
  let host;
  let buttonGrp;
  let radioGroup;
  let dao;
  let daoCollection;

  function keydown(TargetElement, key) {
    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.code = key; // Deprecated, prefer .key instead.
    customEvent.key = key;
    TargetElement.dispatchEvent(customEvent);
  }

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
          <furo-ui5-data-radio-button-group
            ƒ-bind-data="--entity(*.sex)"
          ></furo-ui5-data-radio-button-group>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.sex)"></furo-ui5-data-text-input>
          <furo-data-object type="person.Person" @-object-ready="--entity"></furo-data-object>
          <furo-data-object type="person.PersonCollection"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, buttonGrp, radioGroup, dao, daoCollection] = testbind.parentNode.children;
    await host.updateComplete;
    await buttonGrp.updateComplete;
    await radioGroup.updateComplete;
    await dao.updateComplete;
    await daoCollection.updateComplete;
  });

  it('should be a furo-ui5-data-radio-button-group element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(buttonGrp.nodeName.toLowerCase(), 'furo-ui5-data-radio-button-group');
    done();
  });

  it('should have the correct count of radio buttons', done => {
    setTimeout(() => {
      const buttons = buttonGrp.querySelectorAll('ui5-radio-button');
      assert.equal(buttons.length, 3);
      done();
    }, 16);
  });

  it('should have a field binding', done => {
    setTimeout(() => {
      assert.equal(buttonGrp.activeFieldBinding, true);
      done();
    }, 16);
  });

  it('should have an options binding', done => {
    buttonGrp.addEventListener('options-updated', () => {
      const buttons = buttonGrp.querySelectorAll('ui5-radio-button');
      assert.equal(buttons.length, 4);
      done();
    });

    daoCollection.addEventListener('data-injected', () => {
      buttonGrp.bindOptions(daoCollection.data.entities);
    });

    buttonGrp._privilegedAttributes['value-field-path'] = 'data.id';
    buttonGrp._privilegedAttributes['id-field-path'] = 'data.id';
    buttonGrp._privilegedAttributes['display-field-path'] = 'data.display_name';
    daoCollection.injectRaw(testData);
  });
});
