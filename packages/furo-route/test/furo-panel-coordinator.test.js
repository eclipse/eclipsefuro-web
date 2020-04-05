import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

import './helper/panel-produce-data.js';
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import './registerTypes.js';
import './helper/example-panel.js';
import './helper/example-panel-b.js';
import './helper/edit-example.js';

describe('furo-panel-coordinator', () => {
  let furoPannelCoordinator;
  let page;
  let furoTree;
  let dataObject;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-pages>
            <furo-panel-coordinator
              ƒ-show-page="--nodeSelected"
              @-panels-changed="--panelChanges"
            ></furo-panel-coordinator>
          </furo-pages>

          <panel-produce-data auto @-data="--data"></panel-produce-data>

          <furo-tree
            slot="master"
            ƒ-focus="--escapeOnTabs"
            ƒ-bind-data="--entityObj(*.data)"
            @-node-selected="--nodeSelected"
          >
          </furo-tree>

          <furo-data-object
            type="tree.TreeEntity"
            ƒ-inject-raw="--data"
            @-object-ready="--entityObj"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, page, , furoTree, dataObject] = testbind.parentNode.children;

    [furoPannelCoordinator] = page.children;

    await host.updateComplete;
    await page.updateComplete;
    await furoPannelCoordinator.updateComplete;
    await furoTree.updateComplete;
    await dataObject.updateComplete;
  });

  it('it should check for correct assignments', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(furoPannelCoordinator.nodeName.toLowerCase(), 'furo-panel-coordinator');
    assert.equal(page.nodeName.toLowerCase(), 'furo-pages');
    assert.equal(furoTree.nodeName.toLowerCase(), 'furo-tree');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should notify which panels are open', done => {
    furoPannelCoordinator.addEventListener('panels-changed', () => {
      done();
    });

    furoPannelCoordinator._notifiyOpenPanels();
  });

  it('should show Page when a tree node is selected', done => {
    furoPannelCoordinator.addEventListener('panels-changed', () => {
      done();
    });

    dataObject.addEventListener('data-injected', () => {
      furoTree.selectById(2);
    });
  });

  it('should close all Pages via closeAll', done => {
    furoPannelCoordinator.addEventListener(
      'panels-changed',
      () => {
        furoPannelCoordinator._openPanels.forEach(panel => {
          panel.addEventListener('close-requested', () => {
            done();
          });
        });

        furoPannelCoordinator.closeAll();
      },
      { once: true },
    );

    dataObject.addEventListener('data-injected', () => {
      furoTree.selectById(2);
    });
  });

  it('should remove node by id via _removeNodeById', done => {
    furoPannelCoordinator.addEventListener(
      'panels-changed',
      () => {
        assert.equal(furoPannelCoordinator._openPanels.length, 1);
        furoPannelCoordinator._removeNodeById(2);
        assert.equal(furoPannelCoordinator._openPanels.length, 0);
        done();
      },
      { once: true },
    );

    dataObject.addEventListener('data-injected', () => {
      furoTree.selectById(2);
    });
  });
});
