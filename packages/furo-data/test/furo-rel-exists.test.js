import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-rel-exists', () => {
  let element;
  let host;
  const linkArray = [
    {
      rel: 'self',
      method: 'GET',
      href: './mockdata/tasks/1/get.json',
      type: 'task.Task',
    },
    {
      rel: 'update',
      method: 'PATCH',
      href: './mockdata/tasks/1/get.json',
      type: 'task.Task',
    },
  ];

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-rel-exists rel="update"></furo-rel-exists>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-rel-exists', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-rel-exists');
    done();
  });
  it('should fire rel-dont-exist if the type doesnt match', done => {
    element.setAttribute('type', 'some');
    element.addEventListener('rel-dont-exist', () => {
      done();
    });
    element.inject(linkArray);
  });

  it('should fire rel-exist if the type  match', done => {
    element.setAttribute('type', 'task.Task');
    element.addEventListener('furo-rel-exists', e => {
      assert.equal(e.detail.type, 'task.Task');
      done();
    });
    element.inject(linkArray);
  });

  it('should retun rel-dont-exist for non existent links', done => {
    element.setAttribute('rel', 'turbo');
    element.addEventListener('rel-dont-exist', () => {
      done();
    });
    element.inject(linkArray);
  });

  it('should fire exist after injecting', done => {
    element.addEventListener('furo-rel-exists', e => {
      assert.equal(e.type, 'furo-rel-exists');
      done();
    });
    element.inject(linkArray);
  });

  it('should return a hateoas link', done => {
    element.addEventListener('furo-rel-exists', e => {
      assert.equal(e.detail.type, 'task.Task');
      done();
    });
    element.inject(linkArray);
  });

  it('should read the attribute rel', () => {
    assert.equal(element.rel, 'update');
  });

  it('should update changes to the attribute rel', () => {
    element.setAttribute('rel', 'save');
    assert.equal(element.rel, 'save');
  });
});
