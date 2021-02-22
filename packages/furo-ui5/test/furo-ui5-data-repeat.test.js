import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
import '../src/furo-catalog.js';

describe('furo-ui5-data-repeat', () => {
  let host;
  let dataRepeat;
  let entityObject;
  let deeplink;
  let agent;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-repeat ƒ-bind-data="--entity(*.repstring)" repeated-component="furo-ui5-data-text-input"></furo-ui5-data-repeat>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
            ƒ-init="--emptyClicked"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            load-on-hts-in
            ƒ-bind-request-data="--entity"
            @-response="--response"
          ></furo-entity-agent>

        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataRepeat, entityObject, deeplink, agent] = testbind.parentNode.children;
    await host.updateComplete;
    await dataRepeat.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await agent.updateComplete;

  });

  it('should be a furo-ui5-data-repeat element', done => {
    assert.equal(dataRepeat.nodeName.toLowerCase(), 'furo-ui5-data-repeat');
    done();
  });

  it('should produce repeated components after binding', done => {
    agent.addEventListener('response', () => {
      setTimeout(() => {
        assert.equal(
          dataRepeat.shadowRoot
            .querySelector('*')
            .shadowRoot.querySelector('slot')
            .assignedNodes().length > 0,
          true,
        );
        done();
      }, 100);
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should bind data', done => {
    agent.addEventListener('response', () => {
      setTimeout(() => {
        assert.equal(
          dataRepeat.shadowRoot
            .querySelector('*')
            .shadowRoot.querySelector('slot')
            .assignedNodes()[0]
            .querySelector('*').binder.fieldNode._value,
          'AAA',
        );
        done();
      }, 100);
    });
    deeplink.qpIn({ exp: 1 });
  });

});
