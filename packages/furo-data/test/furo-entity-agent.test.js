import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-entity-agent', () => {
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

  it('request payload should only have writeable or required properties inside', done => {
    entityAgent.loadOnHtsIn = true;
    entityAgent.setAttribute('service', 'ExperimentService');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    entityAgent.addEventListener('create-success', r => {
      assert.equal(r.detail.json.type_property.length, 5);
      assert.equal(r.detail.json.furo_data_money_input.currency_code, 'CHF');
      assert.equal(r.detail.json.furo_data_money_input.units, 3333);
      assert.equal(r.detail.json.furo_data_money_input.nanos, 75100000);
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.furo_data_money_input.hasOwnProperty('display_name')).to.be.false;
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.type_property[0].hasOwnProperty('display_name')).to.be.false;
      assert.equal(r.detail.json.repstring.length, 3);
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.hasOwnProperty('display_name')).to.be.false;
      done();
    });

    dataObject.addEventListener('data-injected', () => {
      dataObject.data.data.description._value = 'description';
      dataObject.data.data.id._value = '1';

      entityAgent.save();
    });

    entityAgent.addEventListener(
      'response',
      r => {
        dataObject.injectRaw(r.detail);
      },
      { once: true },
    );

    entityAgent.htsIn([
      {
        href: '/mockdata/experiments/1/get-props.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'http://httpbin.org/anything',
        method: 'POST',
        rel: 'create',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
  });

  it('Required fields must always be fully transmitted.', done => {
    entityAgent.loadOnHtsIn = true;
    entityAgent.setAttribute('service', 'ExperimentService');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    entityAgent.addEventListener('save-success', r => {
      assert.equal(r.detail.json.furo_data_text_input, 'hallo test');
      assert.equal(r.detail.json.furo_data_money_input.currency_code, 'CHF');
      assert.equal(r.detail.json.furo_data_money_input.units, 3333);
      assert.equal(r.detail.json.furo_data_money_input.nanos, 75100000);
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.furo_data_money_input.hasOwnProperty('display_name')).to.be.false;
      done();
    });

    dataObject.addEventListener('data-injected', () => {
      dataObject.data.data.description._value = 'modified desc';

      entityAgent.save();
    });

    entityAgent.addEventListener(
      'response',
      r => {
        dataObject.injectRaw(r.detail);
      },
      { once: true },
    );

    entityAgent.htsIn([
      {
        href: '/mockdata/experiments/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
  });

  it('request payload should only have modified or required fields', done => {
    entityAgent.loadOnHtsIn = true;
    entityAgent.setAttribute('service', 'ExperimentService');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    entityAgent.addEventListener('save-success', r => {
      assert.equal(r.detail.json.description, 'overwritten desc');
      assert.equal(r.detail.json.furo_data_text_input, 'overwritten text');
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.hasOwnProperty('furo_data_color_input')).to.be.false;
      assert.equal(r.detail.json.type_property.length, 7);
      assert.equal(r.detail.json.type_property[1].data.day, 22);
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.hasOwnProperty('repstring')).to.be.false;
      assert.equal(r.detail.json.furo_data_money_input.currency_code, 'CHF');
      assert.equal(r.detail.json.furo_data_money_input.units, 3333);
      assert.equal(r.detail.json.furo_data_money_input.nanos, 75100000);
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.furo_data_money_input.hasOwnProperty('display_name')).to.be.false;
      done();
    });

    dataObject.addEventListener('data-injected', () => {
      const EntityRoot = dataObject.data;
      EntityRoot.data.type_property.repeats[1].data.day._value = 22;
      EntityRoot.data.description._value = 'overwritten desc';
      EntityRoot.data.furo_data_text_input._value = 'overwritten text';

      assert.equal(EntityRoot._pristine, false);
      assert.equal(EntityRoot.data.type_property._pristine, false);
      assert.equal(EntityRoot.data.type_property.repeats[1]._pristine, false);
      assert.equal(EntityRoot.data.type_property.repeats[1].data._pristine, false);
      assert.equal(EntityRoot.data.type_property.repeats[1].data.day._pristine, false);

      entityAgent.save();
    });

    entityAgent.addEventListener(
      'response',
      r => {
        dataObject.injectRaw(r.detail);
      },
      { once: true },
    );

    entityAgent.htsIn([
      {
        href: '/mockdata/experiments/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'http://httpbin.org/anything',
        method: 'PATCH',
        rel: 'update',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
  });

  it('request payload should only have writeable fields', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');
    entityAgent.addEventListener('save-success', r => {
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.owner.hasOwnProperty('id')).to.be.false;
      // eslint-disable-next-line no-prototype-builtins
      expect(r.detail.json.hasOwnProperty('display_name')).to.be.false;
      assert(r.detail.json.owner.link.href, '/mockdata/persons/list.json');
      done();
    });

    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
      {
        href: 'http://httpbin.org/anything',
        method: 'PUT',
        rel: 'update',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'description';
      dataObject.data.data.id._value = '1';

      entityAgent.save();
    });
  });

  it('should mark errors on requested bind', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');

    entityAgent.addEventListener('save-failed', () => {
      assert(dataObject.data.data.description, false);
      assert(dataObject.data.data.owner.display_name, false);
      done();
    });

    assert(dataObject.data.data.description, true);
    assert(dataObject.data.data.owner.display_name, true);
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/error.json',
        method: 'GET',
        rel: 'update',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.injectRaw({ data: { display_name: 'dummy' } });
      // fake save
      entityAgent._attachListeners('save');

      /**
       * @event req-failed
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('req-failed', { composed: true, bubbles: true });
      customEvent.detail = {
        error: 'invalid username',
        message: 'invalid username',
        code: 3,
        details: [
          {
            '@type': 'e.g. type.googleapis.com/google.rpc.BadRequest',
            field_violations: [
              {
                field: 'description',
                description: 'Ping is a strange Method',
              },
              {
                field: 'owner.display_name',
                description: 'Ping is a strange Method',
              },
            ],
          },
        ],
      };

      entityAgent.dispatchEvent(customEvent);

      // clear the data object for the test
    });
  });

  it('should delete an entity when hts rel delete exist', done => {
    entityAgent.setAttribute('service', 'TaskService');
    entityAgent.addEventListener('delete-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
        method: 'DELETE',
        rel: 'delete',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);
    entityAgent.delete();
  });

  it('should not safe an entity on save when hts rel update does not exist', done => {
    entityAgent.setAttribute('service', 'TaskService');
    entityAgent.addEventListener('missing-hts-update', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    entityAgent.save();
  });

  it('should not safe an entity on save when hts servcie is wrong', done => {
    entityAgent.setAttribute('service', 'TaskService');
    entityAgent.addEventListener('missing-hts-update', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
        method: 'PUT',
        rel: 'update',
        type: 'task.TaskEntity',
        service: 'PersonService',
      },
    ]);

    entityAgent.save();
  });

  it('should create an entity on save when hts rel create exist', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');
    entityAgent.addEventListener('create-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
        method: 'POST',
        rel: 'create',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.injectRaw({ data: { display_name: 'dummy' } });

      entityAgent.create();
    });
  });

  it('should create an entity on save when hts rel self does not exist', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');
    entityAgent.addEventListener('create-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: 'http://httpbin.org/anything',
        method: 'POST',
        rel: 'create',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.injectRaw({ data: { display_name: 'dummy' } });

      entityAgent.save();
    });
  });

  it('should update with method put when hts is set', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');
    entityAgent.addEventListener('save-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
      {
        href: 'http://httpbin.org/anything',
        method: 'PUT',
        rel: 'update',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'description';
      dataObject.data.data.id._value = '1';

      entityAgent.save();
    });
  });

  it('should update with method patch when hts is set', done => {
    entityAgent.setAttribute('service', 'TaskService');
    dataObject.setAttribute('type', 'task.TaskEntity');

    entityAgent.addEventListener('save-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
      {
        href: 'http://httpbin.org/anything',
        method: 'PATCH',
        rel: 'update',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated description';

      entityAgent.save();
    });
  });

  it('should get an entity for the defined service', done => {
    entityAgent.setAttribute('service', 'TaskService');
    entityAgent.addEventListener('load-success', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    entityAgent.load();
  });

  it('should cancel a pending request if a new request is started', done => {
    entityAgent.setAttribute('service', 'TaskService');
    entityAgent.addEventListener('response', () => {
      done();
    });
    entityAgent.htsIn([
      {
        href: '/mockdata/tasks/1/get.json',
        method: 'GET',
        rel: 'self',
        type: 'task.TaskEntity',
        service: 'TaskService',
      },
    ]);

    entityAgent.load();
    entityAgent.load();
    entityAgent.load();
    entityAgent.load();
    entityAgent.load();
    entityAgent.load();
    entityAgent.load();
  });

  it('should do nothing when hts is not set', done => {
    entityAgent.setAttribute('service', 'TaskService');
    assert.equal(entityAgent.load(), false);
    done();
  });
});
