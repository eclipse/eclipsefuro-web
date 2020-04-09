import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-file-input', () => {
  let dataInput;
  let host;
  let entityObject;
  let deeplink;
  let entityAgent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-file-input
            ƒ-bind-data="--entity(*.data.furo_data_file_input)"
          ></furo-data-file-input>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataInput, entityObject, deeplink, entityAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataInput.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
  });

  it('should be a furo-data-file-input', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataInput.nodeName.toLowerCase(), 'furo-data-file-input');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataInput));

  it('should be able to upload multiple files', done => {
    dataInput.multiple = true;
    setTimeout(() => {
      assert.equal(dataInput._theInputElement.getAttribute('multiple'), 'true');
      done();
    }, 5);
  });

  it('should set attribute accept', done => {
    dataInput.accept = '.md';
    setTimeout(() => {
      assert.equal(dataInput._theInputElement.getAttribute('accept'), '.md');
      done();
    }, 5);
  });

  it('should set attribute capture', done => {
    dataInput.capture = 'user';
    setTimeout(() => {
      assert.equal(dataInput._theInputElement.getAttribute('capture'), 'user');
      done();
    }, 5);
  });

  it('should bind field', done => {
    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-changed',
        () => {
          assert.equal(dataInput.field._name, 'furo_data_file_input');
          done();
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should update dataobject with new values', done => {
    const fileList = {
      files: [
        new File(['foo'], 'foo.txt', {
          type: 'text/plain',
        }),
      ],
    };

    deeplink.qpIn({ exp: 1 });

    dataInput.addEventListener('value-changed', f => {
      assert.equal(f.detail[0], 'data:text/plain;base64,Zm9v');
      assert.equal(
        entityObject.data._value.data.furo_data_file_input[0],
        'data:text/plain;base64,Zm9v',
      );
      done();
    });

    dataInput._FBPTriggerWire('--valueChanged', fileList);
  });
});
