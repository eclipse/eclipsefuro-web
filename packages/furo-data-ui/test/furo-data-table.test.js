import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '@furo/data';

describe('furo-data-table', () => {
  let host;
  let linker;
  let dataTable;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-deep-link service="ProjectService" @-hts-out="--hts"> </furo-deep-link>

          <furo-collection-agent
            service="ProjectService"
            ƒ-hts-in="--hts"
            list-on-hts-in
            @-response="--colResponded"
          >
          </furo-collection-agent>
          <furo-data-object
            type="project.ProjectCollection"
            ƒ-inject-raw="--colResponded"
            @-object-ready="--data"
          ></furo-data-object>
          <furo-data-table
            ƒ-bind-data="--data"
            type="project.Project"
            fields="display_name,id,members,start,end"
            sortable-fields="start"
          ></furo-data-table>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, linker, , , dataTable] = testbind.parentNode.children;
    await host.updateComplete;
    await linker.updateComplete;
    await dataTable.updateComplete;
  });

  it('should be a furo-data-table', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(linker.nodeName.toLowerCase(), 'furo-deep-link');
    assert.equal(dataTable.nodeName.toLowerCase(), 'furo-data-table');
    done();
  });

  it('should have the correct type information', done => {
    assert.equal(dataTable._type, 'project.Project');
    assert.equal(dataTable.cols.length, 5);
    done();
  });

  it('should show a table header', done => {
    assert.equal(
      dataTable.shadowRoot
        .querySelector('table')
        .querySelector('thead')
        .querySelector('tr').childElementCount,
      6,
    );
    assert.equal(
      dataTable.shadowRoot
        .querySelector('table')
        .querySelector('thead')
        .querySelector('tr')
        .querySelectorAll('th')[2].innerText,
      'Id',
    );
    assert.notEqual(
      dataTable.shadowRoot.querySelector('table').querySelector('thead').offsetHeight,
      0,
    );

    done();
  });

  it('empty or invalid type should fire spec-error', done => {
    dataTable.addEventListener('spec-error', e => {
      assert.equal(e.detail, 'invalid.Invalid');
      done();
    });
    dataTable.type = 'invalid.Invalid';
  });

  it('should focus first row', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        assert.equal(dataTable._selectedIndex, 0);

        done();
      });
    });
    linker.trigger();
  });

  it('should focus first row with first()', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.last();
        dataTable.first();
        assert.equal(dataTable._selectedIndex, 0);

        done();
      });
    });
    linker.trigger();
  });

  it('should focus prev row', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.last();
        dataTable.prev();
        assert.equal(dataTable._selectedIndex, 2);

        done();
      });
    });
    linker.trigger();
  });

  it('should navigate if triggerNavigation is sent (ArrowDown)', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.triggerNavigation('ArrowDown');
        assert.equal(dataTable._selectedIndex, 1);
        done();
      });
    });
    linker.trigger();
  });

  it('should navigate if triggerNavigation is sent (ArrowUp)', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.triggerNavigation('ArrowDown');
        dataTable.triggerNavigation('ArrowUp');
        assert.equal(dataTable._selectedIndex, 0);
        done();
      });
    });
    linker.trigger();
  });

  it('should navigate if triggerNavigation is sent (End)', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.triggerNavigation('End');
        assert.equal(dataTable._selectedIndex, 3);
        done();
      });
    });
    linker.trigger();
  });

  it('should focus last row', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.last();
        assert.equal(dataTable._selectedIndex, 3);

        done();
      });
    });
    linker.trigger();
  });

  it('should navigate if triggerNavigation is sent (Home)', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.triggerNavigation('End');
        dataTable.triggerNavigation('Home');
        assert.equal(dataTable._selectedIndex, 0);
        done();
      });
    });
    linker.trigger();
  });

  it('should select a specific row', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.next();
        assert.equal(dataTable._selectedIndex, 1);

        done();
      });
    });
    linker.trigger();
  });

  it('should select all table rows', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        const cb = dataTable.shadowRoot.querySelector('th').querySelector('furo-checkbox');
        cb.check();
      });
    });
    dataTable.addEventListener('checkstate-changed', r => {
      assert.equal(r.detail.length, 4);
      done();
    });
    linker.trigger();
  });

  it('should deselect all table rows', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        const cb = dataTable.shadowRoot.querySelector('th').querySelector('furo-checkbox');
        cb.check();

        dataTable.addEventListener('checkstate-changed', r => {
          assert.equal(r.detail.length, 0);
          done();
        });
        cb.uncheck();
      });
    });

    linker.trigger();
  });

  it('enter should select the table row', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        dataTable.next();
        dataTable.select();
      });
    });
    dataTable.addEventListener('tablerow-selected', r => {
      assert.equal(r.detail.data.description, 'Build Documentation');
      done();
    });
    linker.trigger();
  });

  it('should have 4 entity items', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();
        assert.equal(dataTable._collection.rawEntity.entities.length, 4);

        done();
      });
    });
    linker.trigger();
  });

  it('checking a table row should send all checked rows as an array', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();

        setTimeout(() => {
          const cb = dataTable.shadowRoot
            .querySelector('tbody')
            .querySelector('tr')
            .querySelector('td')
            .querySelector('furo-checkbox');
          cb.shadowRoot.querySelector('input').click();
        }, 10);
      });
    });
    dataTable.addEventListener('checkstate-changed', r => {
      assert.equal(r.detail[0].data.description, 'Furo Foundation');
      done();
    });
    linker.trigger();
  });

  it('table row should have columns', done => {
    dataTable.addEventListener('data-loaded', () => {
      dataTable._collection.addEventListener('data-injected', () => {
        dataTable.focus();

        assert.equal(
          dataTable.shadowRoot.querySelector('table').querySelector('tbody').children.length,
          5,
        );
        done();
      });
    });
    linker.trigger();
  });
});
