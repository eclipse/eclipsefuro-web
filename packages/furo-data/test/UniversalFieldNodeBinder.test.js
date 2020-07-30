import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import { UniversalFieldNodeBinder } from '../src/lib/UniversalFieldNodeBinder.js';

describe('UniversalFieldNodeBinder.test', () => {
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

  it('should be a UniversalFieldNodeBinder', done => {
    assert.equal(pseudocomponent.binder instanceof UniversalFieldNodeBinder, true);
    done();
  });

  it('should detect if scalar was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.scalar_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'scalar');
    done();
  });

  it('should detect if google wrapper type was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.wrapper_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'wrapper');
    done();
  });

  it('should detect if fat type was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'fat');
    done();
  });

  it('should set the meta and constraints from the spec  if scalar was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.scalar_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'skalar string**');
    assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });

  it('should set the meta and constraints from the spec  if google wrapper type was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.wrapper_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'wrapper string**');
    assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });

  it('should set the meta and constraints from the spec  if fat type was given', done => {
    pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'fat string**');
    assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });

  it('should not touch the spec meta when it was not given the data', done => {
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.scalar_string);
      assert.equal(pseudocomponent.binder.fieldValue, 'this is a scalar string');
      assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a scalar string');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'skalar string**');
      assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
      assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
      assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should not touch the spec meta when it was not given the data for wrapper', done => {
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.wrapper_string);
      assert.equal(pseudocomponent.binder.fieldValue, 'this is a google wrapper string');
      assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a google wrapper string');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'wrapper string**');
      assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
      assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
      assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update the metas, when sent from server', done => {
    dataobj.addEventListener(
      'data-injected',
      () => {
        pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
        assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false, 'readonly not set');
        dataobj.addEventListener('data-injected', () => {

          assert.equal(
            pseudocomponent.binder.virtualNode.attributes.label,
            'fat string label setted via response meta',
          );
          assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), true, 'readonly is set');
          done();
        });

        fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal-with-meta.json');
      },
      { once: true },
    );
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should not touch the spec meta when it was not given the data for fat', done => {
    dataobj.addEventListener(
      'data-injected',
      () => {
        pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
        assert.equal(pseudocomponent.binder.fieldValue, 'this is a furo fat string');
        assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a furo fat string');
        assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'override');
        assert.equal(pseudocomponent.binder.virtualNode.attributes.maxlength, 6);
        assert.equal(pseudocomponent.binder.virtualNode.labels.has('before'), true, 'before');
        assert.equal(pseudocomponent.binder.virtualNode.labels.has('after'), false, 'after');

        assert.equal(pseudocomponent.binder.virtualNode.attributes['value-state'], 'Error');
        assert.equal(pseudocomponent.binder.virtualNode.labels.has('readonly'), false);
        assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
        assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);

        dataobj.addEventListener('data-injected', () => {
          // remove labels which are not in the dataset and restore spec values
          assert.equal(pseudocomponent.binder.virtualNode.attributes.other, 'otherattribute');
          assert.equal('maxlength' in pseudocomponent.binder.virtualNode.attributes, false);
          assert.equal(pseudocomponent.binder.virtualNode.labels.has('before'), false);
          assert.equal(pseudocomponent.binder.virtualNode.labels.has('after'), true);
          assert.equal(pseudocomponent.binder.fieldValue, 'this is a furo fat string');
          assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a furo fat string');
          assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'fat string**');
          done();
        });

        fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal-unset-label.json');
      },
      { once: true },
    );
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should set selected attributes and labels and the value on the target (pseudocomponent)', done => {
    // set another property for the value property
    pseudocomponent.binder.targetValueField = 'val';
    pseudocomponent.binder.labelMappings = { before: 'before' };
    pseudocomponent.binder.attributeMappings = {
      'value-state': 'valueState',
      maxlength: 'maxLength',
    };

    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
      assert.equal(pseudocomponent.val, pseudocomponent.binder._fieldValue);
      assert.equal(pseudocomponent.valueState, 'Error');
      assert.equal(pseudocomponent.maxLength, '6');
      assert.equal(pseudocomponent.before, true);

      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update / remove selected attributes and labels and the value on the target (pseudocomponent)', done => {
    // set another property for the value property
    pseudocomponent.binder.targetValueField = 'val';
    pseudocomponent.binder.labelMappings = { before: 'before' };
    pseudocomponent.binder.attributeMappings = {
      'value-state': 'valueState',
      maxlength: 'maxLength',
    };

    dataobj.addEventListener(
      'data-injected',
      () => {
        pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
        assert.equal(pseudocomponent.val, pseudocomponent.binder._fieldValue);
        assert.equal(pseudocomponent.valueState, 'Error');
        assert.equal(pseudocomponent.maxLength, '6');
        assert.equal(pseudocomponent.before, true);

        dataobj.addEventListener('data-injected', () => {
          // remove labels which are not in the dataset and restore spec values
          assert.equal(pseudocomponent.binder.virtualNode.attributes.other, 6);
          assert.equal('maxlength' in pseudocomponent.binder.virtualNode.attributes, false);
          assert.equal(pseudocomponent.before, true);
          assert.equal(pseudocomponent.after, undefined);
          assert.equal(pseudocomponent.valueState, '');
          assert.equal(pseudocomponent.maxLength, '');

          done();
        });

        fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal-unset-label.json');

        done();
      },
      { once: true },
    );
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update values from outside to fat', done => {
    // set another property for the value property

    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
      assert.equal(pseudocomponent.value, 'this is a furo fat string');

      pseudocomponent.binder.fieldValue = 'm2';
      assert.equal(pseudocomponent.value, 'm2');
      assert.equal(pseudocomponent.binder.fieldNode.value._value, 'm2');
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update values from outside to scalar', done => {
    // set another property for the value property

    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.scalar_string);
      assert.equal(pseudocomponent.value, 'this is a scalar string');

      pseudocomponent.binder.fieldValue = 'm2';
      assert.equal(pseudocomponent.value, 'm2');
      assert.equal(pseudocomponent.binder.fieldNode._value, 'm2');
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update values from outside to wrapper', done => {
    // set another property for the value property

    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.wrapper_string);
      assert.equal(pseudocomponent.value, 'this is a google wrapper string');

      pseudocomponent.binder.fieldValue = 'm2';
      assert.equal(pseudocomponent.value, 'm2');
      assert.equal(pseudocomponent.binder.fieldNode.value._value, 'm2');
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should update fieldnode labels on fat types', done => {
    // set another property for the value property
    pseudocomponent.binder.labelMappings = { neu: 'neu' };
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
      assert.equal(pseudocomponent.value, 'this is a furo fat string');

      pseudocomponent.binder.addLabel('neu');
      assert.equal(pseudocomponent.neu, true);
      assert.equal(pseudocomponent.binder.fieldNode.labels._value[0], 'before');
      assert.equal(pseudocomponent.binder.fieldNode.labels._value[1], 'neu');

      pseudocomponent.binder.deleteLabel('before');
      assert.equal(pseudocomponent.binder.fieldNode.labels._value.length, 1);
      assert.equal(pseudocomponent.binder.fieldNode.labels._value[0], 'neu');
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should not update fieldnode labels on non fat types', done => {
    // set another property for the value property
    pseudocomponent.binder.labelMappings = { neu: 'neu' };
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.wrapper_string);
      assert.equal(pseudocomponent.value, 'this is a google wrapper string');

      pseudocomponent.binder.addLabel('neu');
      assert.equal(pseudocomponent.neu, true);

      pseudocomponent.binder.deleteLabel('neu');
      assert.equal(pseudocomponent.neu, false);
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should set and delete fieldnode attributes on fat types', done => {
    // set another property for the value property
    pseudocomponent.binder.attributeMappings = {
      'value-state': 'valueState',
      maxlength: 'maxLength',
      minlength: 'minLength',
    };
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.fat_string);
      assert.equal(pseudocomponent.value, pseudocomponent.binder._fieldValue, 'values be the same');
      assert.equal(pseudocomponent.valueState, 'Error');
      assert.equal(pseudocomponent.maxLength, '6');
      assert.equal(pseudocomponent.minLength, undefined);

      pseudocomponent.binder.setAttribute('minlength', 'small');

      assert.equal(pseudocomponent.minLength, 'small');
      assert.equal(pseudocomponent.binder.fieldNode.attributes.minlength._value, 'small');
      assert.equal(
        JSON.stringify(pseudocomponent.binder.fieldNode.attributes._value),
        JSON.stringify({
          'value-state': 'Error',
          'min': '6',
          'max': '16',
          maxlength: '6',
          label: 'override',
          placeholder: 'overridePH',
          minlength: 'small',
        }), 'attributes on fieldnode after inject',
      );

      pseudocomponent.binder.removeAttribute('value-state');

      pseudocomponent.binder.removeAttribute('label');
      assert.equal(
        JSON.stringify(pseudocomponent.binder.fieldNode.attributes._value),
        JSON.stringify({
          'min': '6',
          'max': '16',
          'maxlength': '6',
          'placeholder': 'overridePH',
          'minlength': 'small',
        }),
        'attributes on fieldnode on first load');
      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });

  it('should not set and delete fieldnode attributes on NON fat types', done => {
    // set another property for the value property
    pseudocomponent.binder.attributeMappings = {
      'value-state': 'valueState',
      maxlength: 'maxLength',
      minlength: 'minLength',
    };
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.data.scalar_string);
      assert.equal(pseudocomponent.value, pseudocomponent.binder._fieldValue);
      pseudocomponent.binder.setAttribute('minlength', 'small');
      pseudocomponent.binder.setAttribute('value-state', 'Error');
      pseudocomponent.binder.setAttribute('label', 'Error');
      assert.equal(pseudocomponent.label, undefined);
      assert.equal(pseudocomponent.valueState, 'Error');
      assert.equal(pseudocomponent.minLength, 'small');
      pseudocomponent.binder.removeAttribute('value-state');
      pseudocomponent.binder.removeAttribute('label');
      assert.equal(pseudocomponent.valueState, null);
      assert.equal(pseudocomponent.label, undefined);

      done();
    });
    fetchData('/mockdata/tests/universalfieldnodebinder/fat-universal.json');
  });
});
