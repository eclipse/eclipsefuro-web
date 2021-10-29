import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-data-readonly-inheritence', () => {
  let element;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-data-object></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;

    [, element] = testbind.parentNode.children;
    await element.updateComplete;
  });

  it('should update meta from response', done => {
    /**
     * Field project in SPEC type experiment.Readonly is set to readonly
     * All subfields of project should also be readonly.
     * It should NOT be possible to overwrite the readonly state if the parent node
     * has a readonly state set.
     */
    element.setAttribute('type', 'experiment.Readonly');
    element.injectRaw({
      project: {
        id: null,
        display_name: null,
        start: {
          display_name: null,
          year: 4,
          month: 4,
          day: 4,
        },
        end: {
          display_name: null,
          year: 4,
          month: 4,
          day: 4,
        },
        description: null,
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
        cost_limit: {
          display_name: null,
          currency_code: null,
          units: null,
          nanos: null,
        },
      },
      meta: {
        fields: {
          'project.members': {
            meta: {
              label: 'Label update from response',
              readonly: false,
            },
          },
        },
      },
    });
    const EntityRoot = element.data;

    assert.equal(EntityRoot._isValid, true);
    assert.equal(EntityRoot.project.members._meta.label, 'Label update from response');
    assert.equal(EntityRoot.project.members.repeats[0].phone_nr._meta.readonly, true);
    assert.equal(EntityRoot.project.display_name._meta.readonly, true);
    done();
  });

  it('should inherit readonly from spec', done => {
    /**
     * Field project in SPEC type experiment.Readonly is set to readonly
     * All subfields of project should also be readonly
     */
    element.setAttribute('type', 'experiment.Readonly');
    element.addEventListener('data-injected', () => {});

    element.injectRaw({
      project: {
        id: null,
        display_name: null,
        start: {
          display_name: null,
          year: 4,
          month: 4,
          day: 4,
        },
        end: {
          display_name: null,
          year: 4,
          month: 4,
          day: 4,
        },
        description: null,
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
        cost_limit: {
          display_name: null,
          currency_code: null,
          units: null,
          nanos: null,
        },
      },
    });
    const EntityRoot = element.data;

    assert.equal(EntityRoot._isValid, true);
    assert.equal(EntityRoot.project.description._meta.readonly, true);
    assert.equal(EntityRoot.project.cost_limit._meta.readonly, true);
    assert.equal(EntityRoot.project.start._meta.readonly, true);
    assert.equal(EntityRoot.project.end._meta.readonly, true);
    assert.equal(EntityRoot.project.members._meta.readonly, true);
    assert.equal(EntityRoot.project.members.repeats[0].phone_nr._meta.readonly, true);

    done();
  });

  it('should set readonly on repeated field from response', done => {
    element.setAttribute('type', 'project.ProjectEntity');
    element
      .injectRaw({
        meta: {
          fields: {
            'data.members': {
              meta: {
                readonly: true,
              },
            },
          },
        },
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
            {
              display_name: 'Jack Black, +41793331231',
              first_name: 'Jack',
              id: '2',
              name: 'Black',
              phone_nr: '+41793331231',
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
        links: [
          {
            href: '/mockdata/projects/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.ProjectEntity',
            service: 'ProjectService',
          },
        ],
      })
      .then(() => {
        const EntityRoot = element.data.data;

        assert.equal(EntityRoot._isValid, true);
        assert.equal(EntityRoot.members._meta.readonly, true);
        assert.equal(EntityRoot.members.repeats[0].phone_nr._meta.readonly, true);
        assert.equal(EntityRoot.members.repeats[1].phone_nr._meta.readonly, true);

        done();
      });
  });

  it('should set readonly for the whole object', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    element
      .injectRaw({
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
        meta: {
          fields: {
            data: {
              meta: {
                readonly: true,
              },
            },
            'data.description': {
              meta: {
                label: 'ID label from response',
                options: {
                  list: [
                    {
                      '@type': 'type.googleapis.com/furo.Optionitem',
                      id: '1',
                      display_name: 'A',
                    },
                    {
                      '@type': 'type.googleapis.com/furo.Optionitem',
                      id: '2',
                      display_name: 'B',
                      selected: true,
                    },
                  ],
                },
              },
              constraints: {
                min: {
                  is: 5,
                  message: 'minimal number',
                },
                max: {
                  is: 20,
                  message: 'Vierzehn sind genug',
                },
              },
            },
          },
        },
        links: [
          {
            href: '/mockdata/projects/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'project.ProjectEntity',
            service: 'ProjectService',
          },
          {
            href: '/mockdata/projects/1/update.json',
            method: 'UPDATE',
            rel: 'update',
            type: 'project.ProjectEntity',
            service: 'ProjectService',
          },
        ],
      })
      .then(() => {
        const EntityRoot = element.data;
        assert.equal(EntityRoot.data._meta.readonly, true);
        assert.equal(EntityRoot.data._isValid, true);
        assert.equal(EntityRoot.data.members._meta.label, 'Project members**');
        assert.equal(EntityRoot.data.members.repeats[0].phone_nr._meta.readonly, true);
        assert.equal(EntityRoot.data.display_name._meta.readonly, true);
        assert.equal(EntityRoot.data.start.year._meta.readonly, true);
        assert.equal(EntityRoot.data.start.month._meta.readonly, true);
        assert.equal(EntityRoot.data.start.day._meta.readonly, true);
        assert.equal(EntityRoot.data.end.year._meta.readonly, true);
        assert.equal(EntityRoot.data.end.month._meta.readonly, true);
        assert.equal(EntityRoot.data.end.day._meta.readonly, true);
        done();
      });
  });
});
