import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';



import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '@furo/data/src/furo-data-object.js';

describe('furo-data-hide-content', () => {
  let element;
  let host;
  let dataObject;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-hide-content ƒ-bind-data="--entity(*.furo_data_checkbox_input)">
            <h1>This is the content</h1>
          </furo-data-hide-content>

          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-data-hide-content', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-hide-content');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should hide the content by method hide()', done => {
    assert.equal(element.getAttribute('hidden'), null);

    element.addEventListener(
      'hided',
      () => {
        assert.equal(element.hidden, true);
        done();
      },
      { once: true },
    );

    element.hide();
  });

  it('do nothing with invalid binding', done => {
    assert.equal(element.bindData({ _spec: {} }), undefined);
    done();
  });

  it('should hide the content by method toggle()', done => {
    assert.equal(element.getAttribute('hidden'), null);
    element.addEventListener(
      'toggled',
      () => {
        assert.equal(element.hidden, true);
        done();
      },
      { once: true },
    );
    element.toggle();
  });

  it('should show the content by method show()', done => {
    element.hide();
    assert.equal(element.getAttribute('hidden'), null);
    element.addEventListener(
      'showed',
      () => {
        assert.equal(element.hidden, false);
        done();
      },
      { once: true },
    );
    element.show();
  });

  it('should show the content by data binding', done => {
    element.hide();
    assert.equal(element.getAttribute('hidden'), null);
    element.addEventListener(
      'showed',
      () => {
        assert.equal(element.hidden, false);
        done();
      },
      { once: true },
    );
    dataObject.data.furo_data_checkbox_input._value = false;
  });

  it('should hide the content by data binding', done => {
    element.show();
    assert.equal(element.getAttribute('hidden'), null);
    element.addEventListener(
      'hided',
      () => {
        assert.equal(element.hidden, true);
        done();
      },
      { once: true },
    );
    dataObject.data.furo_data_checkbox_input._value = true;
  });

  it('should update data-object by toggle', done => {
    element.show();
    assert.equal(element.getAttribute('hidden'), null);

    dataObject.addEventListener(
      'data-changed',
      () => {
        assert.equal(dataObject.data.furo_data_checkbox_input._value, true);
        done();
      },
      { once: true },
    );
    setTimeout(() => {
      element.hide();
    }, 10);
  });
});
