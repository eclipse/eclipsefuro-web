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
  let segmentedButton2;
  let input;
  let dao;
  let dao2;

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
            ƒ-bind-data="--entity(*.owner)"
          ></furo-ui5-data-segmented-button>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-data-text-input>
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
          <furo-ui5-data-segmented-button
            ƒ-bind-data="--personDO(*.sex)"
          ></furo-ui5-data-segmented-button>
          <furo-data-object type="person.Person" @-object-ready="--personDO"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, segmentedButton, input, dao, segmentedButton2, dao2] = testbind.parentNode.children;
    await host.updateComplete;
    await segmentedButton.updateComplete;
    await segmentedButton2.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await dao2.updateComplete;
  });

  it('should be a furo-ui5-data-segmented-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(segmentedButton.nodeName.toLowerCase(), 'furo-ui5-data-segmented-button');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have options from API SPEC', done => {
    setTimeout(() => {
      assert.equal(segmentedButton2._dropdownList.length, 3);
      done();
    }, 16);
  });

  it('should have the basic attribute values', done => {
    setTimeout(() => {
      assert.equal(segmentedButton2.buttons.length, 3, 'option count');
      assert.equal(segmentedButton2.subField, 'data', 'subField');
      assert.equal(segmentedButton2.displayField, 'display_name', 'displayField');
      assert.equal(segmentedButton2.displaySubField, 'display_name', 'displaySubField');
      assert.equal(segmentedButton2.valueField, 'id', 'valueField');
      assert.equal(segmentedButton2.valueSubField, 'id', 'valueSubField');
      assert.equal(segmentedButton2.binder.targetValueField, '_value', 'targetValueField');
      done();
    }, 16);
  });

  it('should activate the correct item', done => {
    segmentedButton.injectList(testDataArray);

    setTimeout(() => {
      assert.equal(segmentedButton._dropdownList.length, 3);
      const innerElement = segmentedButton.querySelectorAll('ui5-togglebutton');
      innerElement[2].focus();
      innerElement[2].click();
      assert.equal(segmentedButton._dropdownList[2].selected, true);
      done();
    }, 16);
  });

  it('should activate the correct item from the bound field', done => {
    segmentedButton.addEventListener('options-injected', () => {
      if (segmentedButton._dropdownList.length === 4) {
        input.setValue('2');
        setTimeout(() => {
          console.log(segmentedButton._dropdownList);
          assert.equal(segmentedButton._dropdownList[1].selected, true);
          done();
        }, 16);
      }
    });
    segmentedButton.injectEntities(testData.entities);
  });

  it('should have options from a collection response', done => {
    segmentedButton.injectEntities(testData.entities);
    assert.equal(segmentedButton._dropdownList.length, 4);
    done();
  });

  it('should have options from a array of objects', done => {
    segmentedButton.injectList(testDataArray);
    assert.equal(segmentedButton._dropdownList.length, 3);
    done();
  });
});
