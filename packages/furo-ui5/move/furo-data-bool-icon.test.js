import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../../furo-data-input';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-deep-link';

describe('furo-data-bool-icon', () => {
  let host;
  let dataBoolIcon;
  let entityObject;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-bool-icon
            ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
          ></furo-data-bool-icon>

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
    [, dataBoolIcon, entityObject, deeplink] = testbind.parentNode.children;
    await host.updateComplete;
    await dataBoolIcon.updateComplete;
    await deeplink.updateComplete;
    await entityObject.updateComplete;
  });

  it('should be a furo-data-bool-icon', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataBoolIcon.nodeName.toLowerCase(), 'furo-data-bool-icon');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(dataBoolIcon));

  it('should receive value with bind', done => {
    console.log('those tests are base on the mockdata/experiment/1/get.json');

    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-changed',
        () => {
          assert.equal(dataBoolIcon._ocSymbol, dataBoolIcon.__symbolfalse);
          done();
        },
        { once: true },
      );
    });
    deeplink.qpIn({ exp: 1 });
  });
});
