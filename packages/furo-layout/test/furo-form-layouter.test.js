import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/form';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-form-layouter', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-form-layouter></furo-form-layouter>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-form-layouter', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-form-layouter');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should be a furo-form-layouter', () => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-form-layouter');
  });

  it('should have default breakpoints', () => {
    assert.equal(element.breakpointBig, 810);
    assert.equal(element.breakpointSmall, 405);
  });

  it('should be possible to override breakpoints', done => {
    element.setAttribute('breakpoint-big', '900');
    element.setAttribute('breakpoint-small', '450');
    assert.equal(element.breakpointBig, 900);
    assert.equal(element.breakpointSmall, 450);
    done();
  });

  it('should set attributes from the resize observer, narrow', done => {
    element.addEventListener('layout-changed', () => {
      console.log('observer');
      assert.equal(element.narrow, true);
      done();
    });
    element.setAttribute('breakpoint-big', '900');
    element.setAttribute('style', 'width:899px');
  });

  it('should set attributes from the resize observer, narrower', done => {
    element.addEventListener('layout-changed', () => {
      console.log('observer');
      assert.equal(element.narrower, true);
      done();
    });
    element.setAttribute('breakpoint-small', '400');
    element.setAttribute('style', 'width:399px');
  });

  it('should set attributes from the fallback impl for resize observer, narrow', done => {
    delete window.ResizeObserver;
    element.addEventListener('layout-changed', () => {
      assert.equal(element.narrow, true);
      done();
    });
    element.setAttribute('breakpoint-big', '900');
    element.setAttribute('style', 'width:899px');
  });

  xit('should set attributes from the fallback impl for resize observer, narrower', done => {
    delete window.ResizeObserver;
    element.addEventListener('layout-changed', () => {
      assert.equal(element.narrower, true);
      done();
    });
    element.setAttribute('breakpoint-small', '400');
    element.setAttribute('style', 'width:309px');
  });
});
