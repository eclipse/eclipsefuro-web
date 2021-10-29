import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-entity-agent fieldmask', () => {
  let entityAgent;
  let dataObject;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-entity-agent ƒ-bind-request-data="--doReady(*.data)"></furo-entity-agent>
          <furo-data-object @-object-ready="--doReady"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, entityAgent, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await entityAgent.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-entity-agent', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('update method with patch should have required fields in payload', done => {
    entityAgent.setAttribute('service', 'PersonService');
    dataObject.setAttribute('type', 'person.PersonEntity');

    entityAgent.addEventListener('save-success', r => {
      expect(r.detail.url).to.not.be.undefined;
      expect(r.detail.json.first_name).to.be.undefined;

      assert.equal(r.detail.json.name, 'Doe');
      done();
    });
    entityAgent.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'PATCH',
        rel: 'update',
        type: 'person.PersonEntity',
        service: 'PersonService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.phone_nr._value = '+41 78 123 33 66';
      dataObject.data.data.name._value = 'Doe';

      entityAgent.save();
    });
  });

  it('should create a fieldmask with complex types', () => {
    const obj = {
      data: {
        id: '1',
        cost_limit: {
          currency_code: 'CHF',
          display_name: "CHF 150'000.00",
          nanos: 150000,
          units: 0,
        },
        description: 'Furo Foundation',
        display_name: "Furo Foundation, CHF 150'000.00",
        end: {
          day: 31,
          display_name: '31.12.2020',
          month: 12,
          year: 2020,
        },
        members: [
          {
            display_name: 'John Doe, +41783332244',
            first_name: 'John',
            id: '1',
            name: 'Doe',
            phone_nr: '+41783332244',
            skills: [],
          },
        ],
        start: {
          day: 1,
          display_name: '01.07.2019',
          month: 7,
          year: 2019,
        },
      },
    };
    const result = entityAgent._getFieldMask(obj);
    assert.equal(
      JSON.stringify(result),
      '["data.id","data.cost_limit.currency_code","data.cost_limit.display_name","data.cost_limit.nanos","data.cost_limit.units","data.description","data.display_name","data.end.day","data.end.display_name","data.end.month","data.end.year","data.members","data.start.day","data.start.display_name","data.start.month","data.start.year"]',
    );
  });
});
