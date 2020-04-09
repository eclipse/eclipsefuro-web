import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/task/task-task-create-form.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui-builder-task-task-create-form', () => {

  let host;
  let form;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <task-task-create-form></task-task-create-form>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, form] = testbind.parentNode.children;
    await host.updateComplete;
    await form.updateComplete;

  });

  it('should have the necessary components', () => {
    expect(form.shadowRoot.querySelector('furo-form')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-data-text-input')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-form-layouter')).to.not.be.null;

    expect(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('condensed')).to.not.be.null;
    expect(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('double')).to.not.be.null;
    assert.equal(form.shadowRoot.querySelector('furo-data-text-input').getAttribute('ƒ-bind-data'), '--data(*.description)');

  });

});
