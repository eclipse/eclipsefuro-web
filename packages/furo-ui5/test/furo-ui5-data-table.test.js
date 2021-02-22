import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '../src/furo-catalog.js';

describe('furo-ui5-data-table', () => {
  let host;
  let table;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-table
            show-no-data
            no-data-text="No data available. Click on load test data"
            ƒ-bind-data="--dao(*.entities)"
            columns="data.id, data.display_name, {data-table-col-tmpl}, data.cost_limit, data.start, data.end, {data-table-col-tmpl-link}"
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

  it('should show empty state message', done => {
    assert.equal(table.noDataText, 'No data available. Click on load test data');
    assert.equal(table.shadowRoot.querySelectorAll('ui5-table-column').length, 7);
    assert.equal(table.shadowRoot.querySelector('div.no-data').innerText, "No data available. Click on load test data");
    done();
  });


});
