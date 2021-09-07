import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';

import '@furo/ui5-typerenderer/src/registry.js';
import '../src/furo-catalog.js';

describe('furo-ui5-data-table-focus-tests', () => {
  const mockdata = {
    entities: [
      {
        data: {
          id: '1',
          cost_limit: {
            currency_code: 'CHF',
            display_name: "CHF 150'000.00",
            nanos: 0,
            units: 150000,
          },
          description: 'Furo Foundation',
          display_name: "Furo Foundation, CHF 150'000.00",
          end: {
            day: 31,
            display_name: '31.12.2020',
            month: 12,
            year: 2020,
          },
          members: [
            {
              display_name: 'John Doe',
              first_name: 'John',
              name: 'Doe',
              phone_nr: '+41789996655',
              skills: ['GO', 'Java', 'Kotlin', 'JS'],
            },
            {
              display_name: 'Tari Sakota',
              first_name: 'Tari',
              id: '2',
              name: 'Sakota',
              phone_nr: '+41791532244',
              skills: [],
            },
          ],
          start: {
            day: 1,
            display_name: '01.07.2019',
            month: 7,
            year: 2019,
          },
        },
        links: [
          {
            href: '/mockdata/projects/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.Project',
            service: 'ProjectService',
          },
        ],
      },
      {
        data: {
          id: '2',
          cost_limit: {
            currency_code: 'CHF',
            display_name: "CHF 15'000.00",
            nanos: 0,
            units: 15000,
          },
          description: 'Build Documentation',
          display_name: "Build documentation CHF 15'000.00",
          end: {
            day: 31,
            display_name: '31.10.2020',
            month: 10,
            year: 2020,
          },
          members: [
            {
              display_name: 'John Doe',
              first_name: 'John',
              name: 'Doe',
              phone_nr: '+41789996655',
              skills: ['GO', 'Java', 'Kotlin', 'JS'],
            },
          ],
          start: {
            day: 1,
            display_name: '01.09.2019',
            month: 9,
            year: 2019,
          },
        },
        links: [
          {
            href: '/mockdata/projects/2/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.Project',
            service: 'ProjectService',
          },
        ],
      },
      {
        data: {
          id: '3',
          cost_limit: {
            currency_code: 'CHF',
            display_name: "CHF 9'000.90",
            nanos: 900000,
            units: 9000,
          },
          description: 'Evaluate new build system',
          display_name: "Simple WebApp Project, CHF 9'000.90",
          end: {
            day: 31,
            display_name: '31.12.2020',
            month: 12,
            year: 2020,
          },
          members: [
            {
              display_name: 'John Doe',
              first_name: 'John',
              name: 'Doe',
              phone_nr: '+41789996655',
              skills: ['GO', 'Java', 'Kotlin', 'JS'],
            },
          ],
          start: {
            day: 1,
            display_name: '01.07.2019',
            month: 7,
            year: 2019,
          },
        },
        links: [
          {
            href: '/mockdata/projects/3/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.Project',
            service: 'ProjectService',
          },
        ],
      },
      {
        data: {
          id: '4',
          cost_limit: {
            currency_code: 'CHF',
            display_name: "CHF 5'000.00",
            nanos: 0,
            units: 5000,
          },
          description: 'Update components',
          display_name: "Update components, CHF 5'000.00",
          end: {
            day: 31,
            display_name: '31.11.2020',
            month: 11,
            year: 2020,
          },
          members: [
            {
              display_name: 'John Doe',
              first_name: 'John',
              name: 'Doe',
              phone_nr: '+41789996655',
              skills: ['GO', 'Java', 'Kotlin', 'JS'],
            },
          ],
          start: {
            day: 1,
            display_name: '01.07.2019',
            month: 7,
            year: 2019,
          },
        },
        links: [
          {
            href: '/mockdata/projects/4/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.Project',
            service: 'ProjectService',
          },
        ],
      },
    ],
  };
  let host;
  let table;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-table
            no-data-text="No data available. Click on load test data"
            ƒ-bind-data="--dao(*.entities)"
            headers="id,display name,cost limit,start:-:|min200,end--:|fix100"
            columns="data.id, data.display_name, data.cost_limit, data.start, data.end"
          ></furo-ui5-data-table>

          <furo-data-object
            type="project.ProjectCollection"
            @-object-ready="--dao"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, table, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await table.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-table element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(table.nodeName.toLowerCase(), 'furo-ui5-data-table');
    done();
  });

  it('should focus the first row via focusFirst method', done => {
    // initial data inject
    dao.injectRaw(mockdata);

    setTimeout(() => {
      table.focusFirst();
      const tr = table.shadowRoot
        .querySelectorAll('furo-ui5-table-row')[0]
        .shadowRoot.querySelector('tr');
      console.log(table.shadowRoot.querySelectorAll('furo-ui5-table-row')[0].shadowRoot);
      assert.equal(
        table.shadowRoot.querySelectorAll('furo-ui5-table-row')[0].shadowRoot.activeElement,
        tr,
      );
      done();
    }, 210);
  });

});
