import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../generates/ui_components/task/task-task-repeat.js';
import "@furo/fbp/src/testhelper/test-bind"; // for testing with wires and hooks

describe('furo-ui-builder-task-task-repeat', () => {

  let host;
  let comp;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <task-task-repeat></task-task-repeat>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, comp] = testbind.parentNode.children;
    await host.updateComplete;
    await comp.updateComplete;

  });

  it('should have the necessary components', () => {
    expect(comp.shadowRoot.querySelector('furo-form')).to.not.be.null;
    expect(comp.shadowRoot.querySelector('furo-data-repeat')).to.not.be.null;
    expect(comp.shadowRoot.querySelector('furo-button')).to.not.be.null;

  });

  it('should have a focus function', (done) => {
    comp._FBPAddWireHook('--focused', ()=>{

      done();
    });
    comp.focus();
  });

});
