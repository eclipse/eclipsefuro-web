import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-ui5-pagination-bar', () => {
  let host;
  let paginationBar;

  const testDataSet = {
    setNextLast: [
      {
        href: '/mockdata/projects/list.json',
        method: 'GET',
        rel: 'list',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=2',
        method: 'GET',
        rel: 'next',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=3',
        method: 'GET',
        rel: 'last',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
    ],
    setSelf: [
      {
        href: '/mockdata/projects/list.json',
        method: 'GET',
        rel: 'list',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=1',
        method: 'GET',
        rel: 'self',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=2',
        method: 'GET',
        rel: 'next',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
    ],
    setPrevNextFirstLast: [
      {
        href: '/mockdata/projects/list.json',
        method: 'GET',
        rel: 'list',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=1',
        method: 'GET',
        rel: 'first',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=3',
        method: 'GET',
        rel: 'last',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=2',
        method: 'GET',
        rel: 'next',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
      {
        href: '/mockdata/projects/list.json?page=1',
        method: 'GET',
        rel: 'prev',
        type: 'project.ProjectCollection',
        service: 'ProjectService',
      },
    ],
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-pagination-bar></furo-ui5-pagination-bar>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, paginationBar] = testbind.parentNode.children;
    await host.updateComplete;
    await paginationBar.updateComplete;
  });

  it('should be a furo-ui5-pagination-bar', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(paginationBar.nodeName.toLowerCase(), 'furo-ui5-pagination-bar');
    done();
  });

  it('without hateoas information, all the buttons should be disabled', done => {
    const btns = paginationBar.shadowRoot.querySelectorAll('ui5-button');
    assert.equal(btns.length, 4);
    assert.equal(btns[0].getAttribute('disabled'), '');
    assert.equal(btns[1].getAttribute('disabled'), '');
    assert.equal(btns[2].getAttribute('disabled'), '');
    assert.equal(btns[3].getAttribute('disabled'), '');
    done();
  });

  it('should show active pagination buttons for DataSet setNextLast', done => {
    paginationBar.addEventListener('hts-injected', data => {
      assert.equal(data.detail.length, 3);
      setTimeout(() => {
        const btns = paginationBar.shadowRoot.querySelectorAll('ui5-button');
        assert.equal(btns[2].getAttribute('disabled'), null);
        assert.equal(btns[3].getAttribute('disabled'), null);
        done();
      }, 16);
    });

    paginationBar.inject(testDataSet.setNextLast);
  });

  it('should show active pagination buttons for DataSet setPrevNextFirstLast', done => {
    paginationBar.addEventListener('hts-injected', data => {
      assert.equal(data.detail.length, 5);
      setTimeout(() => {
        const btns = paginationBar.shadowRoot.querySelectorAll('ui5-button');
        assert.equal(btns[0].getAttribute('disabled'), null);
        assert.equal(btns[1].getAttribute('disabled'), null);
        assert.equal(btns[2].getAttribute('disabled'), null);
        assert.equal(btns[3].getAttribute('disabled'), null);
        done();
      }, 16);
    });

    paginationBar.inject(testDataSet.setPrevNextFirstLast);
  });

  it('should show active pagination buttons for DataSet setSelf', done => {
    paginationBar.addEventListener('hts-injected', data => {
      assert.equal(data.detail.length, 3);
      setTimeout(() => {
        const btns = paginationBar.shadowRoot.querySelectorAll('ui5-button');
        assert.equal(btns[0].getAttribute('disabled'), '');
        assert.equal(btns[1].getAttribute('disabled'), '');
        assert.equal(btns[2].getAttribute('disabled'), null);
        assert.equal(btns[3].getAttribute('disabled'), '');
        done();
      }, 16);
    });

    paginationBar.inject(testDataSet.setSelf);
  });
});
