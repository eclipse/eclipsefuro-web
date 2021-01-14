import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui5-data-reference-search', () => {
  let host;
  let referenceSearch;
  let entityObject;
  let collectionAgent;

  const testCollection = {
    entities: [
      {
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
      },
      {
        data: {
          id: '2',
          display_name: 'Do more tests',
          description: 'Increase test coverage',
          estimated_time: 15,
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
            href: '/mockdata/tasks/2/get.json',
            method: 'GET',
            rel: 'self',
            type: 'task.TaskEntity',
            service: 'TaskService',
          },
        ],
      },
      {
        data: {
          id: '3',
          display_name: 'item 3 ',
          description: 'Increase test coverage',
          estimated_time: 15,
          owner: {
            display_name: 'John Doe, +41783332244',
            id: '1',
            rel: 'List',
            href: '/mockdata/persons/3/get.json',
            method: 'GET',
            type: 'person.Person',
          },
          subtasks: [],
        },
        links: [
          {
            href: '/mockdata/tasks/3/get.json',
            method: 'GET',
            rel: 'self',
            type: 'task.TaskEntity',
            service: 'TaskService',
          },
        ],
      },
      {
        data: {
          id: '4',
          display_name: 'item 4',
          description: 'Increase test coverage',
          estimated_time: 15,
          owner: {
            display_name: 'John Doe, +41783332244',
            id: '1',
            rel: 'List',
            href: '/mockdata/persons/4/get.json',
            method: 'GET',
            type: 'person.Person',
          },
          subtasks: [],
        },
        links: [
          {
            href: '/mockdata/tasks/4/get.json',
            method: 'GET',
            rel: 'self',
            type: 'task.TaskEntity',
            service: 'TaskService',
          },
        ],
      },
    ],
    links: [
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
      {
        href: '/mockdata/tasks/list.json?page=2',
        method: 'GET',
        rel: 'next',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
      {
        href: '/mockdata/tasks/list.json?page=2',
        method: 'GET',
        rel: 'last',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ],
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-reference-search
            ƒ-bind-data="--entityReady(*.owner)"
            @-search="--term"
            placeholder="this is a placeholder"
            ƒ-collection-in="--refCol"
          >
          </furo-ui5-data-reference-search>

          <furo-data-object type="task.Task" @-object-ready="--entityReady"> </furo-data-object>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--entityReady(*.owner.link._value)"
            ƒ-search="--term"
            @-response="--refCol"
          >
          </furo-collection-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, referenceSearch, entityObject, collectionAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await referenceSearch.updateComplete;
    await entityObject.updateComplete;
    await collectionAgent.updateComplete;
  });

  it('should be a furo-ui5-data-reference-search', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(referenceSearch.nodeName.toLowerCase(), 'furo-ui5-data-reference-search');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(collectionAgent.nodeName.toLowerCase(), 'furo-collection-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(referenceSearch));

  it('should set placeholder  ', done => {
    setTimeout(() => {
      assert.equal(
        referenceSearch.shadowRoot.getElementById('input')._state.placeholder,
        'this is a placeholder',
        'placeholder check',
      );
      done();
    }, 0);
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.binder.fieldNode._meta.label, 'person.label**', 'binding check');
      done();
    }, 15);
  });

  it('should inject collections', done => {
    referenceSearch.collectionIn(testCollection);
    setTimeout(() => {
      assert.equal(referenceSearch._collection.length, 4, 'collection injection check');
      done();
    }, 10);
    entityObject.addEventListener('object-ready', () => {});
  });

  it('should show collections according to maxItemsToDisplay', done => {
    referenceSearch.maxItemsToDisplay = 2;
    referenceSearch.collectionIn(testCollection);

    setTimeout(() => {
      assert.equal(referenceSearch._collection.length, 2, 'maxItemsToDisplay check');
      done();
    }, 10);
  });

  it('should trigger search event ', done => {
    referenceSearch.addEventListener('search', () => {
      done();
    });
    referenceSearch._searchTerm = 'xxx';
    referenceSearch._fireSearchEvent();
  });

  it('should show no result hint by empty response', done => {
    referenceSearch.collectionIn({});
    assert.equal(referenceSearch.noResultHint, 'no result found');
    done();
  });

  it('should show list', done => {
    referenceSearch.maxItemsToDisplay = 2;
    referenceSearch.collectionIn(testCollection);
    referenceSearch._showList();
    setTimeout(() => {
      assert.equal(referenceSearch._listIsOpen, true, '_showList check');
      done();
    }, 10);
  });
});
