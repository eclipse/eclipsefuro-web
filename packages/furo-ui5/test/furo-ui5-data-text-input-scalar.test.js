import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '../src/furo-catalog.js';
import '../src/lib/ui5-icons.js';

describe('furo-ui5-data-text-input-scalar', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      description: 'Description from record',
    },
    links: [
      {
        href: '/mockdata/experiments/1/get-less-props.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ],
    meta: {
      fields: {
        'data.description': {
          meta: {
            label: 'My description',
            readonly: false,
            hint: 'Please enter a description',
          },
          constraints: {
            required: {
              is: 'true',
              message: 'Please fill in!',
            },
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-text-input
            icon="filter"
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-ui5-data-text-input>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-text-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-text-input');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(input));

  it('should have the basic attributes of the fieldNode set', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.highlight, false, 'check highlight');
      assert.equal(input._state.placeholder, '', 'check placeholder');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.required, false, 'check required');
      assert.equal(input._state.type, 'Text', 'check type');
      assert.equal(input._state.value, 'Default Description', 'check value');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      assert.equal(input._state.name, '', 'check name');
      assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
      assert.equal(input._state.maxlength, undefined, 'check maxlength');
      done();
    }, 16);
  });

  it('should update the value of the bound fieldNode', done => {
    dao.data.data.description.addEventListener(
      'field-value-changed',
      () => {
        assert.equal(input._state.value, 'New description set');
        assert.equal(dao.data.data.description._value, 'New description set');
        done();
      },
      { once: true },
    );

    input.value = 'New description set';
    input.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: 'New description set',
      }),
    );
  });

  it('an update of a scalar value on the data object should be synchronized with the input field', done => {
    dao.data.data.description._value = 'Set data in the inner input element';
    setTimeout(() => {
      assert.equal(input.value, 'Set data in the inner input element');
      done();
    });
  });

  it('should set ui5 icon to the component', done => {
    const icon = input.querySelector('ui5-icon');
    assert.equal(icon.name, 'filter');
    assert.equal(icon.slot, 'icon');
    done();
  });

  it('should show the value in the input field and apply meta and constraints after data injected', done => {
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input._state.disabled, false, 'check disabled');
        assert.equal(input._state.highlight, false, 'check highlight');
        assert.equal(input._state.placeholder, '', 'check placeholder');
        assert.equal(input._state.readonly, false, 'check readonly');
        assert.equal(input._state.required, true, 'check required');
        assert.equal(input._state.type, 'Text', 'check type');
        assert.equal(input._state.value, 'Description from record', 'check value');
        assert.equal(input._state.valueState, 'None', 'check valueState');
        assert.equal(input._state.name, '', 'check name');
        assert.equal(input._state.showSuggestions, false, 'check showSuggestions');
        assert.equal(input._state.maxlength, undefined, 'check maxlength');
        assert.equal(input.isFat(), false, 'check fieldFormat');

        assert.equal(
          input.shadowRoot.querySelector('input').value,
          'Description from record',
          'check input value',
        );
        done();
      }, 100);
    });
    dao.injectRaw(testRecordMeta);
  });
});
