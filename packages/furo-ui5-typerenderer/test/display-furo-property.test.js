import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-furo-property.js';

describe('display-furo-property', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-property
            ƒ-bind-data="--dao(*.data.single_type_property)"
          ></display-furo-property>
          <furo-data-object type="experiment.Experiment" @-object-ready="--dao"></furo-data-object>
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

  it('should be a display-furo-property element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-property');
    done();
  });

  it('should accept a field of type furo.Property', done => {
    dao.injectRaw({
      data: {
        single_type_property: {
          data: {
            '@type': 'xx/google.type.Date',
            day: 8,
            month: 11,
            year: 2022,
            display_name: '8.11.2022',
          },
          display_name: 'a date',
          id: 'date',
          code: 'date',
          meta: {
            fields: {
              data: {
                meta: {
                  label: 'Additional fields',
                  hint: 'this is data',
                },
                constraints: {
                  min: {
                    is: '2019-09-09',
                    message: 'to small',
                  },
                },
              },
            },
          },
        },
      },
    });

    assert.equal(display.nodeName.toLowerCase(), 'display-furo-property');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
