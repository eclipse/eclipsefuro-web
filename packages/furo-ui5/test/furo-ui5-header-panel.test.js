import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '../src/furo-catalog.js';

describe('furo-ui5-header-panel', () => {
  let host;
  let panel;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-header-panel ƒ-bind-nav-node="--Navnode"></furo-ui5-header-panel>
          <furo-data-object
            type="tree.Navigationnode"
            @-object-ready="--Navnode"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, panel, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await panel.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-header-panel element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(panel.nodeName.toLowerCase(), 'furo-ui5-header-panel');
    done();
  });

  it('should collapse on toggleCollapse', done => {
    assert.equal(panel.collapsed, false, 'should start open');

    panel.toggleCollapse();

    assert.equal(panel.collapsed, true, 'should be closed');
    done();
  });

  it('should update the title with binding on header text', done => {
    const enitity = dao.getData();
    panel.bindHeaderText(enitity.display_name);
    enitity.display_name._value = 'Title';
    assert.equal(panel.headerText, 'Title');
    done();
  });

  it('should update the icon with binding on icon ', done => {
    const enitity = dao.getData();
    panel.bindIcon(enitity.icon);
    enitity.icon._value = 'Title';
    assert.equal(panel.icon, 'Title');
    done();
  });

  it('should update the secondaryText with binding on bindSecondaryText ', done => {
    const enitity = dao.getData();
    panel.bindSecondaryText(enitity.secondary_text);
    enitity.secondary_text._value = 'subtitle';
    assert.equal(panel.secondaryText, 'subtitle');
    done();
  });
});
