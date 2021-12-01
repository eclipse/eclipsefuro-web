import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-deep-link', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-deep-link></furo-deep-link>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-deep-link', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  it('should trigger()  ', done => {
    element.setService('ProjectService');

    element.addEventListener('hts-out', e => {
      const { detail } = e;
      assert.equal(detail[0].rel, 'list');
      done();
    });

    element.trigger();
  });

  it('should qpIn()   ', done => {
    element.setService('ProjectService');
    element.addEventListener('hts-out', e => {
      const { detail } = e;
      assert.equal(detail[0].rel, 'list');
      assert.equal(detail[3].href, '/mockdata/projects/12/update.json');
      done();
    });

    element.qpIn({ prj: 12, tfag: 233 });
  });

  it('should accept and trigger qp via ƒ-qp-in', done => {
    element.setService('ProjectService');
    element.addEventListener('hts-out', e => {
      const { detail } = e;
      assert.equal(detail[1].rel, 'create');
      done();
    });
    element.qpIn({ prj: 12, tfag: 233 });
  });

  it('should load service via ƒ-set-service', done => {
    element.setService('ProjectService');
    assert.equal(element._service.name, 'ProjectService');
    done();
  });

  it('should load specs via attribute service', done => {
    element.setAttribute('service', 'ProjectService');
    assert.equal(element._service.name, 'ProjectService');
    done();
  });
});
