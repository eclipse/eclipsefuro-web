import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/input';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-sortby-container', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-sortby-container></furo-sortby-container>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-sortby-container', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-sortby-container');
    done();
  });

  it('should add a ascending sort field', done => {
    element.addEventListener('sortby-condition-updated', e => {
      assert.equal(e.detail, 'key');
      done();
    });
    element.addAscendingField('key');
  });

  it('should add a descending sort field', done => {
    element.addEventListener('sortby-condition-updated', e => {
      assert.equal(e.detail, 'key%20desc');
      done();
    });
    element.addDescendingField('key');
  });

  it('should clear sort fields', done => {
    element.addAscendingField('name');
    element.addDescendingField('key%20desc');

    element.addEventListener('sortby-condition-updated', e => {
      assert.equal(e.detail, '');
      done();
    });
    element.clear();
  });
});
