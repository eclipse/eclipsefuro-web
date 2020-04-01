import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-app-flow-router', () => {
  const config = [
    ['*', 'unauthorized', 'auth', '*'],
    ['auth', 'login-successfull', 'profile'],
    ['*', 'logded-out', 'auth'],
    ['*', 'menu-item-view-clicked', 'viewHome'],
    ['*', 'tob', 'viewB'],
    ['viewB', 'exit', 'viewBexit', 'qp=>id'],
    ['*', 'exit', 'viewB'],
    ['*', 'home-clicked', 'viewHome'],
    ['*', 'defined', 'defined', 'r=>mapped'],
    ['*', 'definedB', 'definedB', 'r=>mapped,k=>k'],
  ];
  let flow;
  let router;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-app-flow-router url-space-regex="^/app/" ƒ-trigger="--f"></furo-app-flow-router>
          <furo-app-flow @-app-flow="--f"></furo-app-flow>
        </template>
      </test-bind>
    `);

    await testbind.updateComplete;
    host = testbind._host;
    [, router, flow] = testbind.parentNode.children;
    await host.updateComplete;
    await router.updateComplete;
    await flow.updateComplete;
    router.config = config;

    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, '/app/viewHome');
  });

  it('should be a furo-app-flow-router', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(router.nodeName.toLowerCase(), 'furo-app-flow-router');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(router));

  it('should map defined mappings path', () => {
    flow.event = 'unauthorized';
    flow.emit({ key: 1, o: 3 });
    assert.equal(window.location.search, '?key=1&o=3');

    flow.event = 'defined';
    flow.emit({ key: 1, o: 3, r: 32 });
    assert.equal(window.location.pathname, '/app/defined');
    assert.equal(window.location.search, '?mapped=32');
  });

  it('should not set undefined maps', () => {
    flow.event = 'exit';
    flow.emit({ key: 1, o: 3, p: 7 });
    assert.equal(window.location.search, '');
    assert.equal(window.location.pathname, '/app/viewB');
  });

  it('should map defined mappings path', () => {
    flow.event = 'unauthorized';
    flow.emit({ key: 1, o: 3, p: 7 });
    assert.equal(window.location.search, '?key=1&o=3&p=7');

    flow.event = 'definedB';
    flow.emit({ k: 1, o: 3, r: 32 });
    assert.equal(window.location.pathname, '/app/definedB');
    assert.equal(window.location.search, '?mapped=32&k=1');
  });

  it('should work witout regex', () => {
    router.urlSpaceRegex = '/';
    flow.event = 'exit';
    flow.emit({});
    assert.equal(window.location.pathname, '/viewB');

    flow.emit({});
    assert.equal(window.location.pathname, '/viewBexit');

    flow.emit({});
    assert.equal(window.location.pathname, '/viewB');
  });
  it('should follow named config first', () => {
    flow.event = 'exit';
    flow.emit({});
    assert.equal(window.location.pathname, '/app/viewB');

    flow.emit({});
    assert.equal(window.location.pathname, '/app/viewBexit');

    flow.emit({});
    assert.equal(window.location.pathname, '/app/viewB');
  });

  it('should follow path', () => {
    flow.event = 'unauthorized';
    flow.emit({ key: 1, o: 3 });
    assert.equal(window.location.search, '?key=1&o=3');

    flow.event = 'login-successfull';
    flow.emit(2);
    assert.equal(window.location.pathname, '/app/profile');
    router.back();
    router.forward();
    assert.equal(window.location.pathname, '/app/profile');
  });

  it('should set queryParams', () => {
    flow.event = 'unauthorized';
    flow.emit({ key: 1, o: 3 });
    assert.equal(window.location.search, '?key=1&o=3');
  });
  it('should switch view', () => {
    flow.event = 'unauthorized';

    flow.emit({ key: 13123 });
    assert.equal(window.location.pathname, '/app/auth');
  });
  it('should call the trigger method on an app-flow event ', done => {
    router.trigger = () => {
      done();
    };
    flow.emit({ key: 13123 });
  });

  it('should call the trigger method on an app-flow event ', () => {
    flow.emit({ key: 13123 });
  });
});
