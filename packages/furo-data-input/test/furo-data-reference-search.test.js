import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-reference-search', () => {
  let host;
  let referenceSearch;
  let entityObject;
  let collectionAgent;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-reference-search
            condensed
            label="Search on enter only"
            hint="hint"
            min-term-length="2"
            ƒ-bind-data="--entityReady(*.owner)"
            @-search="--term"
            ƒ-collection-in="--refCol"
          >
          </furo-data-reference-search>

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

  it('should be a furo-data-reference-search', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(referenceSearch.nodeName.toLowerCase(), 'furo-data-reference-search');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(collectionAgent.nodeName.toLowerCase(), 'furo-collection-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(referenceSearch));

  it('should override min-term-length  ', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.minTermLength, 2);
      done();
    }, 0);
  });

  it('should set label  ', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.label, 'Search on enter only');
      done();
    }, 0);
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(referenceSearch.binder.fieldNode._meta.label, 'person.type.sex.label**');
      done();
    }, 60);
  });

  it('should clear bounded data if element is cleared', done => {
    referenceSearch.addEventListener(
      'value-cleared',
      () => {
        assert.equal(entityObject.data.owner.display_name._value, null);
        assert.equal(entityObject.data.owner.id._value, null);
        done();
      },
      { once: true },
    );

    entityObject.addEventListener('object-ready', () => {
      setTimeout(() => {
        referenceSearch._clear();
      }, 60);
    });
  });

  it('should fire search when search term is entered and the length of the term is bigger then min-term-length', done => {
    collectionAgent.addEventListener('response', () => {
      done();
    });
    referenceSearch._searchTerm = 'term';
    referenceSearch._fireSearchEvent();
  });

  it('should inject search result ', done => {
    collectionAgent.addEventListener('response', () => {
      assert.equal(referenceSearch._collection.length > 0, true);
      done();
    });
    setTimeout(() => {
      referenceSearch._searchTerm = 'term';
      referenceSearch._fireSearchEvent();
    }, 60);
  });

  it('should fire search by input changed', done => {
    setTimeout(() => {
      const customEvent = new Event('searchInput', { composed: true, bubbles: true });
      customEvent.detail = 'term';
      referenceSearch.shadowRoot.getElementById('input').dispatchEvent(customEvent);
    }, 10);

    collectionAgent.addEventListener('response', () => {
      setTimeout(() => {
        assert.equal(referenceSearch._collection.length > 0, true);
        done();
      }, 12);
    });
  });

  it('should select element by focus', done => {
    collectionAgent.addEventListener('response', () => {
      setTimeout(() => {
        assert.equal(referenceSearch._listIsOpen, undefined);
        const customEvent = new Event('focus', { composed: true, bubbles: true });
        referenceSearch.shadowRoot.getElementById('input').dispatchEvent(customEvent);
        assert.equal(referenceSearch._listIsOpen, true);
        done();
      }, 10);
    });
    referenceSearch._searchTerm = 'term';
    referenceSearch._fireSearchEvent();
  });

  it('should select element by focus', done => {
    setTimeout(() => {
      const customEvent = new Event('searchInput', { composed: true, bubbles: true });
      customEvent.detail = 'term';
      referenceSearch.shadowRoot.getElementById('input').dispatchEvent(customEvent);
    }, 10);

    collectionAgent.addEventListener('response', () => {
      setTimeout(() => {
        assert.equal(referenceSearch._listIsOpen, undefined);
        const customEvent = new Event('focus', { composed: true, bubbles: true });
        referenceSearch.shadowRoot.getElementById('input').dispatchEvent(customEvent);
        assert.equal(referenceSearch._listIsOpen, true);
        done();
      }, 10);
    });
  });

  it('should show no result hint by empty response', done => {
    referenceSearch.collectionIn({});
    assert.equal(referenceSearch._hint, 'no result found');
    done();
  });
});
