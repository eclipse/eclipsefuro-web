import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks
import '@furo/data/src/furo-data-object.js';
import './helper/produce-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-tree', () => {
  let tree;
  let entity;
  let dataprocuder;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object
            type="tree.TreeEntity"
            ƒ-inject-raw="--data"
            @-object-ready="--entityObj"
          ></furo-data-object>
          <furo-tree ƒ-bind-data="--entityObj(*.data)"></furo-tree>
          <produce-data @-data="--data"></produce-data>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, entity, tree, dataprocuder] = testbind.parentNode.children;
    await host.updateComplete;
    await tree.updateComplete;
    await entity.updateComplete;
    await dataprocuder.updateComplete;
    await dataprocuder.produce();
  });

  it('should be a furo-tree', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(tree.nodeName.toLowerCase(), 'furo-tree');
    done();
  });

  it('should be a furo-data-object', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(entity.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should be a produce-data', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataprocuder.nodeName.toLowerCase(), 'produce-data');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(tree));

  it('tree should be exandable', done => {
    tree.addEventListener('nodes-expanded', () => {
      done();
    });
    tree.expandAll();
  });

  it('tree should be collapsable', done => {
    tree.collapseAll();

    tree.addEventListener('nodes-collapsed', () => {
      done();
    });
  });

  it('should select a tree node by id', done => {
    tree.qp = 1;
    tree.addEventListener('node-selected', f => {
      assert.equal(f.detail.id._value, '234');
      done();
    });
    tree.selectById('234');
  });

  it('should be traversable with the keyboard', done => {
    tree.addEventListener('node-selected', f => {
      assert.equal(f.detail.id._value, '1');
      done();
    });

    tree.triggerNavigation('ArrowRight');
    assert.equal(tree._focusedField.id._value, '2');
    tree.triggerNavigation('ArrowRight');
    assert.equal(tree._focusedField.id._value, '3');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '4');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '4w');
    tree.triggerNavigation('ArrowUp');
    assert.equal(tree._focusedField.id._value, '4');
    tree.triggerNavigation('ArrowUp');
    assert.equal(tree._focusedField.id._value, '3');
    tree.triggerNavigation('End');
    tree.triggerNavigation('Home');
    // no effect
    tree.triggerNavigation('Space');
    tree.triggerNavigation('Enter');
  });

  it('should expand the selected node', done => {
    tree.collapseFocusedRecursive();
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('Home');

    tree.expandFocusedRecursive();
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '4');
    tree.triggerNavigation('Home');

    tree.collapseFocused();
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('Home');

    tree.expandFocused();
    assert.equal(tree._focusedField.id._value, '1');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    tree.triggerNavigation('ArrowDown');
    assert.equal(tree._focusedField.id._value, '4');
    tree.triggerNavigation('Home');

    tree.addEventListener('node-selected', f => {
      assert.equal(f.detail.id._value, '1');
      done();
    });

    tree.selectFocused();
  });

  it('should navigate on searched results', done => {
    setTimeout(() => {
      tree.expandFocusedRecursive();
      assert.equal(tree._focusedField.id._value, '1');

      tree._updateSearchmatchAttributesOnItems = () => {
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowDown');
        assert.equal(tree._focusedField.id._value, '5');

        done();
      };
      tree.search('xxx');
    }, 80);
  });

  it('should navigate normal on cleared search', done => {
    setTimeout(() => {
      tree.expandFocusedRecursive();
      assert.equal(tree._focusedField.id._value, '1');

      tree.search('xxx');

      tree._updateSearchmatchAttributesOnItems = () => {
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowDown');
        tree.triggerNavigation('ArrowUp');
        tree.triggerNavigation('ArrowDown');
        assert.equal(tree._focusedField.id._value, '455');

        done();
      };

      tree.search('');
    }, 80);
  });
});
