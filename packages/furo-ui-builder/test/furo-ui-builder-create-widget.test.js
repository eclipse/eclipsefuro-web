import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/task/task-task-create-widget.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks
import '@furo/data';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui-builder-create-widget', () => {

  let host;
  let widget;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <task-task-create-widget ƒ-bind-data="--daoReady"></task-task-create-widget>
      <furo-data-object type="task.Task" @-object-ready="--daoReady"></furo-data-object>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, widget, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await widget.updateComplete;
    await dao.updateComplete;

  });

  it('should have the necessary components', () => {
    expect(widget.shadowRoot.querySelector('furo-card')).to.not.be.null;
    expect(widget.shadowRoot.querySelector('furo-form-layouter')).to.not.be.null;

    expect(widget.shadowRoot.querySelector('furo-data-text-input').getAttribute('condensed')).to.not.be.null;
    assert.equal(widget.shadowRoot.querySelector('furo-data-text-input').getAttribute('ƒ-bind-data'), '--data(*.description)');
  });

  it('should set the correct data binding', (done)=>{
    setTimeout(()=>{
      expect(widget.field.description).to.not.be.null;
      assert.equal(widget.field.description._name, 'description');
      done();
    },18);
  });

});
