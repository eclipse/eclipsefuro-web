import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-segemented-button', () => {
  let host;
  let segementedButton;
  let input;
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
          <furo-ui5-data-segemented-button
            ƒ-bind-data="--entity(*.owner)"
          ></furo-ui5-data-segemented-button>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-data-text-input>
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, segementedButton, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await segementedButton.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-segemented-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(segementedButton.nodeName.toLowerCase(), 'furo-ui5-data-segemented-button');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have options from API SPEC', done => {
    setTimeout(() => {
      assert.equal(segementedButton._dropdownList.length, 3);
      done();
    }, 16);
  });

  it('should have the basic attribute values', done => {
    setTimeout(() => {
      assert.equal(segementedButton.buttons.length, 3, 'option count');
      assert.equal(segementedButton._subField, 'data', '_subField');
      assert.equal(segementedButton._displayField, 'display_name', '_displayField');
      assert.equal(segementedButton._displaySubField, 'display_name', '_displaySubField');
      assert.equal(segementedButton._valueField, 'id', '_valueField');
      assert.equal(segementedButton._valueSubField, 'id', '_valueSubField');
      assert.equal(segementedButton.binder.targetValueField, '_value', 'targetValueField');
      done();
    }, 16);
  });

  it('should activate the correct item', done => {
    setTimeout(() => {
      assert.equal(segementedButton._dropdownList.length, 3);
      input.setValue('male');
      assert.equal(segementedButton._dropdownList[2].selected, true);
      done();
    }, 16);
  });

  it('should activate the correct item from the bound field', done => {
    segementedButton.addEventListener('options-injected', () => {
      if (segementedButton._dropdownList.length === 4) {
        input.setValue('2');
        setTimeout(() => {
          assert.equal(segementedButton._dropdownList[1].selected, true);
          done();
        }, 16);
      }
    });
    segementedButton.injectEntities(testData.entities);
  });

  it('should have options from a collection response', done => {
    segementedButton.injectEntities(testData.entities);
    assert.equal(segementedButton._dropdownList.length, 4);
    done();
  });

  it('should have options from a array of objects', done => {
    segementedButton.injectList(testDataArray);
    assert.equal(segementedButton._dropdownList.length, 3);
    done();
  });
});
