import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-resizer', () => {
  let classbasedResizer;
  let flex;
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-horizontal-flex>
            <div flex>flex</div>
            <furo-resizer remember="tsuite" style="border:1px solid black; width:200px">
              content
            </furo-resizer>

            <furo-resizer class="res">
              class based
            </furo-resizer>
          </furo-horizontal-flex>
          <style>
            .res {
              width: 180px;
            }
          </style>
        </template>
      </test-bind>
    `);

    await testbind.updateComplete;
    host = testbind._host;
    const hflex = testbind.parentNode.children[1];

    [flex, element, classbasedResizer] = hflex.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-resizer', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-resizer');
    done();
  });

  it('should be a furo-resizer', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(classbasedResizer.nodeName.toLowerCase(), 'furo-resizer');
    done();
  });
  it('should be a div', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(flex.nodeName.toLowerCase(), 'div');
    done();
  });




  it('should care about the min width', done => {
    element.setAttribute('minwidth', '180');
    const handle = element.shadowRoot.getElementById('lefthandle');
    element.resetSize();
    const mousedown = new Event('mousedown', { composed: true, bubbles: true });
    mousedown.screenX = 100;
    handle.dispatchEvent(mousedown);

    const mousemove = new Event('mousemove', { composed: true, bubbles: true });
    // move left => make smaller
    mousemove.screenX = 200;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '180px');
    done();
  });

  it('should care about the max width', done => {
    element.setAttribute('maxwidth', '333');
    const handle = element.shadowRoot.getElementById('lefthandle');

    element.resetSize();
    const mousedown = new Event('mousedown', { composed: true, bubbles: true });
    mousedown.screenX = 300;
    handle.dispatchEvent(mousedown);

    const mousemove = new Event('mousemove', { composed: true, bubbles: true });
    // move left => make smaller
    mousemove.screenX = 100;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '333px');
    done();
  });

  it('should start tracking with the left handler', done => {
    const handle = element.shadowRoot.getElementById('lefthandle');
    element.resetSize();

    const mousedown = new Event('mousedown', { composed: true, bubbles: true });
    mousedown.screenX = 150;
    handle.dispatchEvent(mousedown);

    const mousemove = new Event('mousemove', { composed: true, bubbles: true });
    // move left => make bigger
    mousemove.screenX = 120;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '232px');

    // move right => make smaller
    mousemove.screenX = 187;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '165px');
    element._unregister();
    setTimeout(() => {
      done();
    }, 20);
  });

  it('should start tracking with the right handler', done => {
    const handle = element.shadowRoot.getElementById('righthandle');
    // reset the sizes

    element.resetSize();

    assert.equal(element.style.width, '200px');

    const mousedown = new Event('mousedown', { composed: true, bubbles: true });
    mousedown.screenX = 1150;
    handle.dispatchEvent(mousedown);

    const mousemove = new Event('mousemove', { composed: true, bubbles: true });
    mousemove.screenX = 1200;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '252px');

    mousemove.screenX = 1100;
    handle.dispatchEvent(mousemove);
    assert.equal(element.style.width, '152px');
    element._unregister();
    setTimeout(() => {
      done();
    }, 20);
  });

  it('should reset size based on css class', done => {
    const handle = classbasedResizer.shadowRoot.getElementById('righthandle');
    // reset the sizes

    classbasedResizer.resetSize();

    assert.equal(classbasedResizer.style.width, '');

    const mousedown = new Event('mousedown', { composed: true, bubbles: true });
    mousedown.screenX = 1100;
    handle.dispatchEvent(mousedown);

    const mousemove = new Event('mousemove', { composed: true, bubbles: true });
    mousemove.screenX = 1200;
    handle.dispatchEvent(mousemove);
    assert.equal(classbasedResizer.style.width, '280px');

    classbasedResizer.resetSize();
    assert.equal(classbasedResizer.style.width, '');

    setTimeout(() => {
      done();
    }, 20);
  });
});
