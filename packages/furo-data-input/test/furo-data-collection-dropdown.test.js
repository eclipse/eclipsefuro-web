import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-collection-agent';
import '@furo/data/src/furo-deep-link';

describe('furo-data-collection-dropdown', () => {
  let collectionDropdown1;
  let collectionDropdown2;
  let entityObject;
  let entityObject2;
  let deeplink;
  let entityAgent;
  let collectionAgent;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-collection-dropdown
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-data-collection-dropdown>

          <furo-data-object
            type="project.ProjectEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-deep-link service="ProjectService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ProjectService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>

          <furo-data-collection-dropdown
            hint="hint override"
            leading-icon="mail"
            trailing-icon="fingerprint"
            label="default list from spec"
            subfield-display="display_name"
            ƒ-inject-entities="--responsePerson(*.entities)"
            ƒ-bind-data="--entityTask(*.owner)"
          ></furo-data-collection-dropdown>

          <furo-data-object type="task.Task" @-object-ready="--entityTask"></furo-data-object>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--entityTask(*.owner.link._value)"
            @-response="--responsePerson"
          >
          </furo-collection-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [
      ,
      collectionDropdown1,
      entityObject,
      deeplink,
      entityAgent,
      collectionDropdown2,
      entityObject2,
      collectionAgent,
    ] = testbind.parentNode.children;
    await host.updateComplete;
    await collectionDropdown1.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
    await entityAgent.updateComplete;
    await collectionDropdown2.updateComplete;
    await entityObject2.updateComplete;
    await collectionAgent.updateComplete;
  });

  it('should be a furo-data-collection-dropdown', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(collectionDropdown1.nodeName.toLowerCase(), 'furo-data-collection-dropdown');
    assert.equal(collectionDropdown2.nodeName.toLowerCase(), 'furo-data-collection-dropdown');
    assert.equal(entityObject2.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(collectionAgent.nodeName.toLowerCase(), 'furo-collection-agent');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(collectionDropdown1));

  it('should receive value with bind', done => {
    entityObject.data.data.description.addEventListener(
      'this-metas-changed',
      () => {
        setTimeout(() => {
          assert.equal(collectionDropdown1.field._meta.options.list.length, 2);
          assert.equal(collectionDropdown1.field._value, 2);
          assert.equal(collectionDropdown1.field._oldvalue, 'Furo Foundation');
          assert.equal(collectionDropdown1.field._meta.label, 'ID label from response');
          done();
        }, 15);
      },
      { once: true },
    );

    deeplink.qpIn({ prj: 1 });
  });

  it('should update meta without options', done => {
    host._FBPAddWireHook('--hts', () => {
      entityObject.data.data.description.addEventListener(
        'this-metas-changed',
        () => {
          assert.equal(collectionDropdown1.field._value, 'Build Documentation');
          assert.equal(collectionDropdown1.field._meta.label, 'ID label from response');

          done();
        },
        { once: true },
      );
    });
    deeplink.qpIn({ prj: 2 });
  });

  it('should selected the items when the field value not exists and the item in option list is marked as `selected:true`', done => {
    setTimeout(() => {
      assert.equal(collectionDropdown2.field.id, 'female');
      done();
    }, 0);
  });

  it('should assign the field value (is not setted before) initially with the selected item value from spec', done => {
    setTimeout(() => {
      assert.equal(entityObject2.data.owner.id._value, 'female');
      done();
    }, 0);
  });

  it('should set the select element to disabled', done => {
    collectionDropdown2.disable();
    setTimeout(() => {
      assert.equal(collectionDropdown2._theInputElement.getAttribute('disabled'), '');
      done();
    }, 0);
  });

  it('should assign the field value (is not setted before) initially with the initial selected item value from data', done => {
    collectionAgent.list();
    setTimeout(() => {
      assert.equal(entityObject2.data.owner.id._value, 'female');
      done();
    }, 100);
  });
});
