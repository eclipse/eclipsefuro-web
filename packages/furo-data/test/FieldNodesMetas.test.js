import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import { UniversalFieldNodeBinder } from '../src/lib/UniversalFieldNodeBinder.js';

describe('FieldNodesMetas', () => {
  let pseudocomponent;
  let dataobj;
  let host;

  const fetchData = file => {
    fetch(file)
      .then(res => res.json())
      .then(response => {
        dataobj.injectRaw(response);
      });
  };

  beforeEach(async () => {
    pseudocomponent = {};
    pseudocomponent.binder = new UniversalFieldNodeBinder(pseudocomponent);

    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object type="universaltest.UniversaltestEntity"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataobj] = testbind.parentNode.children;
    await host.updateComplete;
  });

  it('should update deep constraints, when sent from server', done => {
    dataobj.addEventListener(
      'data-injected',
      () => {
        pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
        assert.equal(
          pseudocomponent.binder.virtualNode.labels.readonly,
          false,
          'readonly not set',
        );
        dataobj.addEventListener('data-injected', () => {
          assert.equal(
            pseudocomponent.binder.virtualNode.attributes.label,
            'fat string label setted via response meta',
          );

          assert.equal(
            JSON.stringify(pseudocomponent.binder.fieldNode.value._constraints),
            '{"max":{"is":"4","message":"MAX 4"}}',
          );
          assert.equal(
            pseudocomponent.binder.virtualNode.labels.readonly,
            true,
            'readonly is set',
          );
          done();
        });

        fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal-with-meta.json');
      },
      { once: true },
    );
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update the metas, when sent from server', done => {
    dataobj.addEventListener(
      'data-injected',
      () => {
        pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
        assert.equal(
          pseudocomponent.binder.virtualNode.labels.readonly,
          false,
          'readonly not set',
        );
        dataobj.addEventListener('data-injected', () => {
          assert.equal(
            pseudocomponent.binder.virtualNode.attributes.label,
            'fat string label setted via response meta',
          );
          assert.equal(
            pseudocomponent.binder.virtualNode.labels.readonly,
            true,
            'readonly is set',
          );
          done();
        });

        fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal-with-meta.json');
      },
      { once: true },
    );
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });
});
