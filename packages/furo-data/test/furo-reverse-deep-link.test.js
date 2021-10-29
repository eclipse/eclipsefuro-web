import { fixture, html } from '@open-wc/testing';
import { assert, expect } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-reverse-deep-link', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-reverse-deep-link service="ProjectMembersService"></furo-reverse-deep-link>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-reverse-deep-link', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-reverse-deep-link');
    done();
  });

  it('instantiating the element with default properties works', () => {
    assert.equal(element.tagName.toLowerCase(), 'furo-reverse-deep-link');
    expect(element.convert).to.be.a('function');
    expect(element.service).to.be.a('string');
    element.setAttribute('rel', 'self');
    expect(element.rel).to.be.a('string');
  });

  it('should convert a Collection', done => {
    element._services.ProjectMembersService.services.Unsubscribe.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';
    element._services.ProjectMembersService.services.List.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';

    element.addEventListener('converted', d => {
      expect(d.detail.vtr).to.equal('LIST');
      done();
    });

    element.convert({
      data: [{ data: '' }],
      links: [
        {
          rel: 'list',
          method: 'GET',
          href: '/deeemmmo/api/v1/tasks/LIST.json',
          type: 'application/task.Task+json',
          service: 'ProjectMembersService',
        },
        {
          rel: 'next',
          method: 'GET',
          href: '/deeemmmo/api/v1/tasks/NEXT:release',
          type: 'application/task.Task+json',
          service: 'ProjectMembersService',
        },
      ],
    });
  });

  it('should return false on unspecified service', () => {
    element.service = 'unknown';
    const res = element.convert({
      rel: 'self',
      method: 'GET',
      href: '/demo/api/v1/tasks/31337.json',
      type: 'application/task.Task+json',
      service: 'ProjectMembersService',
    });

    expect(res.message).to.equal('Service is not defined');
  });

  it('should convert a Entity', done => {
    element.rel = 'self';

    element.addEventListener('converted', d => {
      expect(d.detail.vtr).to.equal('31337');
      done();
    });
    element._services.ProjectMembersService.services.Get = { deeplink: { href: '' } };
    element._services.ProjectMembersService.services.Get.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';
    element._services.ProjectMembersService.services.Unsubscribe.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';
    element.convert({
      data: 32,
      links: [
        {
          rel: 'self',
          method: 'GET',
          href: '/demo/api/v1/tasks/31337.json',
          type: 'application/task.Task+json',
          service: 'ProjectMembersService',
        },
        {
          rel: 'unsubscribe',
          method: 'GET',
          href: '/api/v1/tasks/THISONE:unsubscribe',
          type: 'application/task.Task+json',
          service: 'ProjectMembersService',
        },
      ],
    });
  });

  it('should convert a links Array', done => {
    element.rel = 'unsubscribe';

    element.addEventListener('converted', d => {
      expect(d.detail.vtr).to.equal('THISONE');
      done();
    });
    element._services.ProjectMembersService.services.Get = { deeplink: { href: '' } };
    element._services.ProjectMembersService.services.Get.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';
    element._services.ProjectMembersService.services.Unsubscribe.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}:unsubscribe';

    element.convert([
      {
        rel: 'self',
        method: 'GET',
        href: '/demo/api/v1/tasks/31337.json',
        type: 'application/task.Task+json',
        service: 'ProjectMembersService',
      },
      {
        rel: 'unsubscribe',
        method: 'GET',
        href: '/demo/api/v1/tasks/THISONE:unsubscribe',
        type: 'application/task.Task+json',
        service: 'ProjectMembersService',
      },
    ]);
  });

  it('should convert a link Object', done => {
    element.addEventListener('converted', d => {
      expect(d.detail.vtr).to.equal('31337');
      done();
    });

    element._services.ProjectMembersService.services.Get.deeplink.href =
      '/{demo}/api/{version}/tasks/{vtr}.json';
    element.convert({
      rel: 'self',
      method: 'GET',
      href: '/demo/api/v1/tasks/31337.json',
      type: 'application/task.Task+json',
      service: 'ProjectMembersService',
    });
  });
});
