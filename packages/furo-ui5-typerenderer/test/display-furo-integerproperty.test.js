import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-integerproperty.js';

describe('display-furo-integerproperty', () => {
  let host;
  let display;
  let dao;

  const testData = {
    data: {
      '@type': 'xx/furo.IntegerProperty',
      data: 342,
      display_name: '342',
    },
    display_name: 'Display',
    id: 'op33t',
    code: 'option',
    meta: {
      fields: {
        'data.data': {
          meta: {
            label: 'Integer',
            hint: 'Type in int',
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-integerproperty></display-furo-integerproperty>
          <furo-data-object type="experiment.Experiment"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a display-furo-integerproperty element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-integerproperty');
    done();
  });

  it('should accept a fieldNode of type furo.integerproperty', done => {
    dao.data.type_property.addEventListener('this-repeated-field-changed', () => {
      setTimeout(() => {
        assert.equal(display._displayValue, '342');
        done();
      }, 16);
    });
    dao.data.type_property.add(testData);
    display.bindData(dao.data.type_property.repeats[0].data);
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
