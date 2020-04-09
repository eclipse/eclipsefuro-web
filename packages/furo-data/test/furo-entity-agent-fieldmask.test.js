import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
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

  it('update method with patch should provide a field_mask', done => {
    entityAgent.setAttribute('service', 'ProjectService');
    dataObject.setAttribute('type', 'project.ProjectEntity');

    entityAgent.addEventListener('save-success', r => {
      expect(r.detail.json.update_mask).to.not.be.undefined;
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.hasOwnProperty('members')).to.be.false;
      assert.equal(
        JSON.stringify(r.detail.json.update_mask),
        '["paths: description","paths: cost_limit.currency_code"]',
      );
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.update_mask.hasOwnProperty('members')).to.be.false;
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
        method: 'PATCH',
        rel: 'update',
        type: 'project.ProjectEntity',
        service: 'ProjectService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated description';
      dataObject.data.data.cost_limit.currency_code._value = 'DKK';
setTimeout(()=>{
      entityAgent.save();
},10);
    });
  });

  it('update method with patch should have required fields in payload', done => {
    entityAgent.setAttribute('service', 'PersonService');
    dataObject.setAttribute('type', 'person.PersonEntity');

    entityAgent.addEventListener('save-success', r => {
      expect(r.detail.json.update_mask).to.not.be.undefined;
      expect(r.detail.json.first_name).to.be.undefined;
      assert.equal(JSON.stringify(r.detail.json.update_mask), '["paths: name","paths: phone_nr"]');
      assert.equal(r.detail.json.name, 'Doe');
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
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
      '["paths: data.id","paths: data.cost_limit.currency_code","paths: data.cost_limit.display_name","paths: data.cost_limit.nanos","paths: data.cost_limit.units","paths: data.description","paths: data.display_name","paths: data.end.day","paths: data.end.display_name","paths: data.end.month","paths: data.end.year","paths: data.members","paths: data.start.day","paths: data.start.display_name","paths: data.start.month","paths: data.start.year"]',
    );
  });
});
