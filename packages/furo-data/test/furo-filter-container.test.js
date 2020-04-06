import {fixture, html} from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import "@furo/fbp/src/testhelper/test-bind.js"; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/testhelper/initEnv.js"


describe('furo-filter-container', () => {

  let filterContainer;
  let input;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
    <test-bind>
    <template>
      <furo-filter-container>
            <furo-filter-and>
                <furo-filter-field field="description" is="in" ƒ-.value="--valueChanged"></furo-filter-field>
                <furo-filter-field field="start" is="gte" ƒ-.value="--valueChanged"></furo-filter-field>
                <furo-filter-or>
                    <furo-filter-field field="end" is="lte" ƒ-.value="--valueChanged"></furo-filter-field>
                    <furo-filter-field field="cost_limit" is="eq" ƒ-.value="--valueChanged"></furo-filter-field>
                </furo-filter-or>
            </furo-filter-and>
        </furo-filter-container>
        <furo-text-input id="input" @-value-changed="--valueChanged"></furo-text-input>
     </template>
    </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [,filterContainer,input] = testbind.parentNode.children;
    await host.updateComplete;
    await filterContainer.updateComplete;
  });

  it('should be a furo-filter-container', (done) => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(filterContainer.nodeName.toLowerCase(), "furo-filter-container");
    assert.equal(input.nodeName.toLowerCase(), "furo-text-input");
    done()
  });


  it('should be trigger filter-changed event with filter detail when filter fields are changed', (done) => {
    filterContainer.addEventListener("filter-changed", (e)=>{

      assert.equal(JSON.stringify(e.detail), '[["description","in","test",[["start","gte","test",[["end","lte","test"],["cost_limit","eq","test"]]]]]]');
      done();
    }, {once:true});

    const customEvent = new Event('value-changed', {composed: true, bubbles: true});
    customEvent.detail = "test";
    input.dispatchEvent(customEvent);
  });


});
