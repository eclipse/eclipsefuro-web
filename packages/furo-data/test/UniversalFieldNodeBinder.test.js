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

  const fetchData = () => {
    fetch('/mockdata/tests/universalfieldnodebinder/fat-universal.json')
      .then(res => res.json())
      .then(response => {
        dataobj.injectRaw(response.data);
      });
  };

  beforeEach(async () => {
    pseudocomponent = {};
    pseudocomponent.binder = new UniversalFieldNodeBinder(pseudocomponent);

    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object type="universaltest.Universaltest"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataobj] = testbind.parentNode.children;
    await host.updateComplete;


  });

  it('should be a UniversalFieldNodeBinder', (done) => {
    assert.equal(pseudocomponent.binder instanceof UniversalFieldNodeBinder, true);
    done();
  });


  it('should detect if scalar was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.scalar_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'scalar');
    done();
  });

  it('should detect if google wrapper type was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.wrapper_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'wrapper');
    done();
  });

  it('should detect if fat type was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.fat_string);
    assert.equal(pseudocomponent.binder.fieldFormat, 'fat');
    done();
  });


  it('should set the meta and constraints from the spec  if scalar was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.scalar_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'skalar string**');
    assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });

  it('should set the meta and constraints from the spec  if google wrapper type was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.wrapper_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'wrapper string**');
    assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });

  it('should set the meta and constraints from the spec  if fat type was given', (done) => {
    pseudocomponent.binder.bindField(dataobj.data.fat_string);
    assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'fat string**');
    assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
    assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
    assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
    done();
  });


  it('should not touch the spec meta when it was not given the data', (done) => {
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.scalar_string);
      assert.equal(pseudocomponent.binder.fieldValue, 'this is a scalar string');
      assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a scalar string');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'skalar string**');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
      assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
      assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
      done();
    });
    fetchData();
  });

  it('should not touch the spec meta when it was not given the data for wrapper', (done) => {
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.wrapper_string);
      assert.equal(pseudocomponent.binder.fieldValue, 'this is a google wrapper string');
      assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a google wrapper string');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'wrapper string**');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
      assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
      assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
      done();
    });
    fetchData();
  });



  it('should not touch the spec meta when it was not given the data for fat', (done) => {
    dataobj.addEventListener('data-injected', () => {
      pseudocomponent.binder.bindField(dataobj.data.fat_string);
      assert.equal(pseudocomponent.binder.fieldValue, 'this is a furo fat string');
      assert.equal(pseudocomponent.binder.virtualNode.value, 'this is a furo fat string');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.label, 'fat string**');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.maxlength, 6);
      assert.equal(pseudocomponent.binder.virtualNode.attributes['value-state'], 'Error');
      assert.equal(pseudocomponent.binder.virtualNode.attributes.readonly, false);
      assert.equal('hint' in pseudocomponent.binder.virtualNode.attributes, false);
      assert.equal('default' in pseudocomponent.binder.virtualNode.attributes, false);
      done();
    });
    fetchData();
  });



});
