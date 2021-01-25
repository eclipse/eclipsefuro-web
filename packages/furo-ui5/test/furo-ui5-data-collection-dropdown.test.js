import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-collection-dropdown', () => {
  let host;
  let dropdown;
  let input;
  let dao;

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
          <furo-ui5-data-collection-dropdown
            ƒ-bind-data="--entity(*.owner)"
            value-sub-field="id"
          ></furo-ui5-data-collection-dropdown>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-data-text-input>
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dropdown, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await dropdown.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-collection-dropdown element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(dropdown.nodeName.toLowerCase(), 'furo-ui5-data-collection-dropdown');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attribute values', done => {
    setTimeout(() => {
      assert.equal(dropdown._state.valueState, 'None', 'value-state');
      assert.equal(dropdown._state.disabled, false, 'disabled');
      assert.equal(dropdown._text, '', '_text');
      assert.equal(dropdown.options.length, 0, 'option count');
      assert.equal(dropdown.subField, 'data', 'subField');
      assert.equal(dropdown.displayField, 'display_name', 'displayField');
      assert.equal(dropdown.displaySubField, 'display_name', 'displaySubField');
      assert.equal(dropdown.valueField, 'id', 'valueField');
      assert.equal(dropdown.valueSubField, 'id', 'valueSubField');
      assert.equal(dropdown.binder.targetValueField, '_value', 'targetValueField');
      done();
    }, 16);
  });

  it('should activate the correct item from the bound field', done => {
    dropdown.binder.fieldNode.addEventListener(
      'field-value-changed',
      (e) => {
        console.log("data",dao.data.owner._value)
        if (dao.data.owner._value === '2') {
          setTimeout(() => {
            assert.equal(dropdown._dropdownList[1].selected, true);
            assert.equal(dropdown._state._text, 'Tari Sakota, +41791532244');
            done();
          }, 240);
        }
      }
    ),{once: true};
    dropdown.injectEntities(testData.entities);
    input.setValue('2');
  });

  it('should auto select the first element', done => {
    dropdown.autoSelectFirst = true;
    dropdown.injectEntities(testData.entities);
    dropdown.click();
    setTimeout(() => {
      assert.equal(dropdown._dropdownList[0].selected, true);
      assert.equal(dropdown._state._text, 'John Doe, +41783332244');
      done();
    }, 16);
  });

  it('should have options from a collection response', done => {
    dropdown.injectEntities(testData.entities);
    dropdown.click();
    assert.equal(dropdown._dropdownList.length, 4);
    done();
  });

  it('should have options from a array of objects', done => {
    dropdown.injectEntities(testDataArray);
    dropdown.click();
    assert.equal(dropdown._dropdownList.length, 3);
    done();
  });

  xit('should write the selected item to the dao', done => {
    dropdown.injectEntities(testDataArray);
    const innerElement = dropdown.shadowRoot.querySelector('ui5-label');
    innerElement.shadowRoot.querySelector('label');
    keydown(innerElement, 'ArrowDown');
    keydown(innerElement, 'ArrowDown');
    keydown(innerElement, 'Enter');

    setTimeout(() => {
      assert.equal(dao.data.owner.id, 'male');
      done();
    }, 16);
  });

  it('should show bounded data even when the value of data object is not in the list of dropdown, inject first', done => {
    dropdown.injectEntities(testDataArray);
    dao.injectRaw({ owner: { id: 'notFound', display_name: 'not_found' } });
    assert.equal(dropdown._dropdownList.length, 1);
    done();
  });

  it('should show bounded data even when the value of data object is not in the list of dropdown, inject later', done => {
    dao.injectRaw({ owner: { id: 'notFound', display_name: 'not_found' } });
    dropdown.injectEntities(testDataArray);
    assert.equal(dropdown._dropdownList.length, 1);
    done();
  });
});
