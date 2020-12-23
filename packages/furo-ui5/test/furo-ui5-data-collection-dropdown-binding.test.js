import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-collection-dropdown-binding', () => {
  let host;
  let dropdown;
  let input;
  let dao;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-collection-dropdown
            ƒ-bind-data="--entity(*.sex)"
            value-field="id"
            display-field="display_name"
          ></furo-ui5-data-collection-dropdown>
          <furo-ui5-data-text-input ƒ-bind-data="--entity(*.sex)"></furo-ui5-data-text-input>
          <furo-data-object type="person.Person" @-object-ready="--entity"></furo-data-object>
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

  it('should be a furo-ui5-data-collection-dropdown element (binding)', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(dropdown.nodeName.toLowerCase(), 'furo-ui5-data-collection-dropdown');
    done();
  });

  it('should activate the correct item', done => {
    dropdown.autoSelectFirst = true;
    setTimeout(() => {
      assert.equal(dropdown._dropdownList.length, 3, 'check number of elements');

      setTimeout(() => {
        assert.equal(dropdown._syncedOptions[0].selected, true, 'check selected item');
        assert.equal(dropdown._selectedIndex, 0, 'check selected index');
        done();
      }, 0);
    }, 16);
  });
});
