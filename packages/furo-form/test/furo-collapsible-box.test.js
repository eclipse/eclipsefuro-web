import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-collapsible-box', () => {
  let element;
  let host;
  let label;
  let icon;

  function keydown(TargetElement, key) {
    const customEvent = new Event('keydown', { composed: true, bubbles: true });
    customEvent.code = key; // Deprecated, prefer .key instead.
    customEvent.key = key;
    TargetElement.dispatchEvent(customEvent);
  }

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-collapsible-box label="label">
            <div>content</div>
            <div slot="context">CTX</div>
          </furo-collapsible-box>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;

    /**
     * 0: furo-horizontal-flex.head
     * 1: iron-icon
     * 2: label
     * 3: slot
     * 4: div.content
     * 5: slot
     */
    [, icon, label] = element.shadowRoot.querySelectorAll('*');
  });

  it('should be a furo-collapsible-box', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-collapsible-box');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should close on blur', done => {
    element.setAttribute('open-on-focus', '');
    element.setAttribute('close-on-blur', '');
    assert.equal(element._open, false);
    element.focus();
    assert.equal(element._open, true);
    element._FBPTriggerWire('--blured');
    assert.equal(element._open, false);
    done();
  });

  it('should accept keyboard navigation', done => {
    assert.equal(element.icon, 'expand-less');
    element.focus();
    keydown(icon, 'Enter');
    assert.equal(element.icon, 'expand-more');
    keydown(icon, 'ArrowLeft');
    assert.equal(element.icon, 'expand-less');
    keydown(icon, 'ArrowRight');
    assert.equal(element.icon, 'expand-more');

    done();
  });

  it('should be focusable', done => {
    element.focus();
    assert.equal(document.activeElement, element);
    done();
  });

  it('should fire toggled', done => {
    // open
    icon.click();
    element.addEventListener('toggled', e => {
      assert.equal(e.detail, false);
      done();
    });
    icon.click();
  });

  it('should close on click', done => {
    icon.click();

    element.addEventListener('closed', () => {
      assert.equal(element.icon, 'expand-less');
      done();
    });

    assert.equal(element.icon, 'expand-more');
    icon.click();
  });

  it('should start with icon expand-less', done => {
    element.addEventListener('opened', () => {
      assert.equal(element.icon, 'expand-more');
      done();
    });

    assert.equal(element.icon, 'expand-less');
    assert.equal(icon.getAttribute('icon'), 'expand-less');
    icon.click();
  });

  it('should display the content when clicked on icon', done => {
    icon.click();
    assert.equal(element._open, true);

    done();
  });

  it('should display the content when clicked on label', done => {
    label.click();
    assert.equal(element._open, true);
    done();
  });

  it('should start with closed content area', done => {
    assert.equal(element._open, false);
    done();
  });
});
