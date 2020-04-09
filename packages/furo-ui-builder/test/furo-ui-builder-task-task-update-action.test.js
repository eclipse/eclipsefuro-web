import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/taskservice/task-task-update-panel.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks
import '@furo/data';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui-builder-task-task-update-action', () => {

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
        assert.equal(titleElement.shadowRoot.querySelector('h1').innerHTML, '<!---->Rework documentation<!---->');
      },24);
      done();
    });
    linker.qpIn({"tsk": 1});
  });

  it('should set the correct button states', (done) => {
    const action = panel.shadowRoot.querySelector('task-task-update-action');
    const buttons = action.shadowRoot.querySelectorAll('furo-button');

    panel._FBPAddWireHook('--response', (response) =>{
      expect(action).to.not.be.undefined;

      assert.equal(buttons.length, 2);

      expect(buttons[1].getAttribute('hidden')).to.not.be.null;
      expect(buttons[1].getAttribute('disabled')).to.be.null;

      expect(buttons[0].getAttribute('hidden')).to.not.be.null;
      expect(buttons[0].getAttribute('disabled')).to.not.be.null;

      done();
    });
    linker.qpIn({"tsk": 1});
  });



});
