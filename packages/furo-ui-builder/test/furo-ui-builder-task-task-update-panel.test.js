import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/taskservice/task-task-update-panel.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks
import '@furo/data';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui-builder-task-task-update-panel', () => {

  let host;
  let panel;
  let linker;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <task-task-update-panel ƒ-hts-in="--hts"></task-task-update-panel>
      <furo-deep-link service="TaskService" @-hts-out="--hts"></furo-deep-link>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, panel, linker] = testbind.parentNode.children;
    await host.updateComplete;
    await panel.updateComplete;
    await linker.updateComplete;

  });

  it('should display a title element', (done)=>{
    const titleElement = panel.shadowRoot.querySelector('furo-panel-head');
    panel._FBPAddWireHook('--response', (response) =>{
      setTimeout(()=>{
        assert.equal(titleElement.shadowRoot.querySelector('h1').innerText, 'Rework documentation');
        done();
      },18);

    });
    linker.qpIn({"tsk": 1});
  });

  it('should render the values of the data model in the embedded form', (done)=>{
    const form = panel.shadowRoot.querySelector('task-task-form');
    panel._FBPAddWireHook('--response', (response) =>{
      setTimeout(()=>{
        expect(form.shadowRoot.querySelector('furo-data-text-input').innerHTML).to.not.be.null;
        expect(form.shadowRoot.querySelector('furo-data-number-input').innerHTML).to.not.be.null;
        expect(form.shadowRoot.querySelector('person-person-reference-search').innerHTML).to.not.be.null;
        expect(form.shadowRoot.querySelector('task-task-repeat').innerHTML).to.not.be.null;

        assert.equal(form.shadowRoot.querySelector('furo-data-text-input').binder.fieldNode._value, "Apply new documentation structure");
        assert.equal(form.shadowRoot.querySelector('furo-data-number-input').binder.fieldNode._value, "5");
        assert.equal(form.shadowRoot.querySelector('person-person-reference-search').field.display_name, "John Doe, +41783332244");
        done();
      },18);

    });
    linker.qpIn({"tsk": 1});
  });

  it('should set the correct button states', (done) => {
    const action = panel.shadowRoot.querySelector('task-task-update-action');
    const buttons = action.shadowRoot.querySelectorAll('furo-button');

    panel._FBPAddWireHook('--response', (response) =>{

      expect(action).to.not.be.undefined;

      assert.equal(buttons.length, 2);

      expect(buttons[0].getAttribute('hidden')).to.be.null;
      expect(buttons[0].getAttribute('disabled')).to.not.be.null;
      expect(buttons[1].getAttribute('hidden')).to.not.be.null;
      expect(buttons[1].getAttribute('disabled')).to.be.null;

      done();
    });
    linker.qpIn({"tsk": 1});
  });



});
