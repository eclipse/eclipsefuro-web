import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-property-type', () => {
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

  it('should be a furo-property-type', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should be possible to create a property  from data', done => {
    element.setAttribute('type', 'experiment.Experiment');

    element.injectRaw({
      description: 'experiment data for testing',
      display_name: 'display_name',
      type_property: [
        {
          data: {
            '@type': 'google.type.Date',
            day: 12,
            display_name: '32 32 23',
          },
          display_name: 'a date',
          id: 'date',
          code: 'date',
          meta: {},
        },
        {
          data: {
            '@type': 'furo.StringProperty',
            data: 'display_name',
          },
          display_name: 'a date',
          id: 'date',
          code: 'date',
          meta: {
            fields: {
              'data.data': {
                meta: {
                  label: 'test label',
                  readonly: true,
                },
              },
            },
          },
        },
      ],
    });
    assert.equal(element.data.type_property.repeats[0].data.display_name._value, '32 32 23');
    assert.equal(element.data.type_property.repeats[1].data.data._value, 'display_name');
    assert.equal(element.data.type_property.repeats[1].data.data._meta.label, 'test label');
    assert.equal(element.data.type_property.repeats[1].data.data._meta.readonly, true);
    done();
  });
});
