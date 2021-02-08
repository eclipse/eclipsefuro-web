import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
 import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '../src/furo-catalog.js';

describe('furo-ui5-card', () => {
  let host;
  let card;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-card ƒ-bind-nav-node="--Navnode"></furo-ui5-card>
          <furo-data-object
            type="furo.navigation.Navigationnode" @-object-ready="--Navnode"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, card,dao] = testbind.parentNode.children;
    await host.updateComplete;
    await card.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-card element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(card.nodeName.toLowerCase(), 'furo-ui5-card');
    done();
  });

  it('should update the title with binding on header text', (done) => {
    const enitity = dao.getData();
    card.bindHeading(enitity.display_name)
    enitity.display_name._value = "Title"
    assert.equal( card.heading, "Title")
    done();
  });

  it('should update the icon with binding on icon ', (done) => {
    const enitity = dao.getData();
    card.bindIcon(enitity.icon)
    enitity.icon._value = "Title"
    assert.equal( card.icon, "Title")
    done();
  });
  it('should update the bindSubheading with binding on bindSubheading ', (done) => {
    const enitity = dao.getData();
    card.bindSubheading(enitity.secondary_text)
    enitity.secondary_text._value = "subtitle"
    assert.equal( card.subheading, "subtitle")
    done();
  });

});
