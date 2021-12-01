import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-custom-method', () => {
  let customMethod;
  let dataObject;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-custom-method ƒ-bind-request-data="--doReady(*.data)"></furo-custom-method>
          <furo-data-object @-object-ready="--doReady"></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, customMethod, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await customMethod.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-custom-method', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(customMethod.nodeName.toLowerCase(), 'furo-custom-method');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should request a custom method', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    customMethod.trigger();
  });

  it('should request a custom method with body', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.triggerWithBody(dataObject.data._value.data);
    });
  });

  it('trigger should request a custom method with body if dataObject is set', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.trigger();
    });
  });

  it('should cancel a pending request if a new request is started', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', () => {
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.triggerWithBody(dataObject.data._value.data);
    });
  });

  it('should Immediately cancel a pending request', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', () => {
      // no response expected - request should be aborted
      assert.equal('requestNotAborted', true);
    });

    customMethod.addEventListener('request-aborted', () => {
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.triggerWithBody(dataObject.data._value.data);
      customMethod.abortPendingRequest();
    });
  });

  it('should fire event if hts is not available', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');

    customMethod.addEventListener('missing-hts-release', () => {
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'suspend',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });

  it('Accept header should be set ', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'createtemplate');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('hts-updated', () => {
      const request = customMethod._makeRequest({
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      });
      assert.equal(
        request.headers.get('Accept'),
        'application/experiment.Experiment+json, application/json;q=0.9',
      );
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
  });

  it('should accept QueryParams Object via updateQp method', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'createtemplate');

    customMethod.updateQp({ compact: true });
    customMethod.updateQp({ variant: '5' });

    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    customMethod._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('compact=true') > 0, true);
      assert.equal(req.url.indexOf('variant=5') > 0, true);
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });

  it('should accept QueryParams Object via updateQp method', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'createtemplate');

    customMethod.updateQp({ compact: true });
    customMethod.updateQp({ variant: '5' });

    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    customMethod._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('compact=true') > 0, true);
      assert.equal(req.url.indexOf('variant=5') > 0, true);
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });

  it('should accept clear params via clearQp method', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'createtemplate');

    customMethod.updateQp({ compact: true });
    customMethod.updateQp({ variant: '5' });
    customMethod.clearQp();

    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    customMethod._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('compact=true') > 0, false);
      assert.equal(req.url.indexOf('variant=5') > 0, false);
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });

  it('should rebuild request url with via updateQp setted qp and the previously existed qp together in url ', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'createtemplate');

    customMethod.updateQp({ compact: true });
    customMethod.updateQp({ variant: '5' });

    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    customMethod._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('compact=true') > 0, true);
      assert.equal(req.url.indexOf('variant=5') > 0, true);
      assert.equal(req.url.indexOf('previousqp=xyz') > 0, true);
      done();
    });

    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything?previousqp=xyz',
        method: 'Post',
        rel: 'createtemplate',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });
});
