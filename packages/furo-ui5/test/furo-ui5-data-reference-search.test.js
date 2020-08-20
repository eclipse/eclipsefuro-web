import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui5-data-reference-search', () => {
  let host;
  let referenceSearch;
  let entityObject;
  let collectionAgent;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-reference-search
            condensed
            ƒ-bind-data="--entityReady(*.owner)"
            @-search="--term"
            ƒ-collection-in="--refCol"
          >
          </furo-ui5-data-reference-search>

          <furo-data-object type="task.Task" @-object-ready="--entityReady"> </furo-data-object>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--entityReady(*.owner.link._value)"
            ƒ-search="--term"
            @-response="--refCol"
          >
          </furo-collection-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, referenceSearch, entityObject, collectionAgent] = testbind.parentNode.children;
    await host.updateComplete;
    await referenceSearch.updateComplete;
    await entityObject.updateComplete;
    await collectionAgent.updateComplete;
  });

  it('should be a furo-ui5-data-reference-search', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(referenceSearch.nodeName.toLowerCase(), 'furo-ui5-data-reference-search');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(collectionAgent.nodeName.toLowerCase(), 'furo-collection-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(referenceSearch));

  it('should set placeholder  ', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.placeholder, 'person.type.sex.label**');
      done();
    }, 0);
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.binder.fieldNode._meta.label, 'person.type.sex.label**');
      done();
    }, 15);
  });
});
