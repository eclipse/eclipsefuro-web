import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/task/task-task-create-form.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks
import '@furo/data';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui-builder-task-task-create-form', () => {

  let host;
  let form;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <task-task-create-form ƒ-bind-data="--daoReady"></task-task-create-form>
      <furo-data-object type="task.Task" @-object-ready="--daoReady"></furo-data-object>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, form, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await form.updateComplete;
    await dao.updateComplete;

  });

  it('should have the necessary components', () => {
    expect(form.shadowRoot.querySelector('furo-form')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-data-text-input')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-form-layouter')).to.not.be.null;

    expect(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('condensed')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('double')).to.not.be.null;
    assert.equal(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('ƒ-bind-data'), '--data(*.description)');

  });

  it('should set the correct data binding', (done)=>{
    setTimeout(()=>{
      expect(form.field.description).to.not.be.null;
      assert.equal(form.field.description._name, 'description');
      done();
    },18);
  })

});
