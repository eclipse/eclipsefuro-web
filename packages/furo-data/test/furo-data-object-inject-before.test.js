import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-data-object-inject-before', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-data-object-inject-before', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should update meta on server meta data', done => {
    element.setAttribute('type', 'tree.Tree');

    fetch('/mockdata/trees/test_injectB.json')
      .then(res => res.json())
      .then(response => {
        element.injectRaw(response).then(start => {
          assert.equal(start.root.children.repeats.length, 3);

          fetch('/mockdata/trees/test_inject.json')
            .then(res => res.json())
            .then(response2 => {
              const p = element.injectRaw(response2);

              p.then(initialData => {
                assert.equal(initialData.root.children.repeats.length, 2);
                const node = initialData.root.children.repeats[0].children.repeats[0];
                assert.equal(initialData.root.children.repeats[0].display_name._value, 'A');
                assert.equal(node.display_name._value, 'Produktansicht');

                fetch('/mockdata/trees/test_injectB.json')
                  .then(res => res.json())
                  .then(response3 => {
                    const before = element.injectRaw(response3);

                    before.then(ObjectDataRoot => {
                      assert.equal(ObjectDataRoot.root.children.repeats.length, 3);
                      const repnode = ObjectDataRoot.root.children.repeats[0].children.repeats[0];
                      assert.equal(
                        ObjectDataRoot.root.children.repeats[0].display_name._value,
                        'Before',
                      );
                      assert.equal(repnode, undefined);

                      done();
                    });
                  });
              });
            });
        });
      });
  });
});
