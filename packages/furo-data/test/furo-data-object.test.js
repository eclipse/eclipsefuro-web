import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-object', () => {
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

  it('should be a furo-data-object', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should validate patterns, min, max on string', done => {
    /**
     * Constraints are set like:
     * "required": "is": "true",
     * "pattern":  "is": "^a.*",
     * "max":      "is": "12",
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;
    // valid on init
    assert.equal(EntityRoot._isValid, true, 'init');

    EntityRoot.display_name._value = 'dddddd34567834567';
    assert.equal(EntityRoot._isValid, false, 'max pattern');

    EntityRoot.display_name._value = 'adddddwerftgzhjuert';
    assert.equal(EntityRoot._isValid, false, 'max');

    EntityRoot.display_name._value = 'bbbb';
    assert.equal(EntityRoot._isValid, false, 'pattern');

    EntityRoot.display_name._value = '';
    assert.equal(EntityRoot._isValid, false, 'required');
    assert.equal(EntityRoot.display_name._validity.constraint, 'required', 'required');
    EntityRoot.display_name._value = 'aha';

    assert.equal(EntityRoot._isValid, true, 'aha should be true');

    done();
  });

  it('should validate all fields on validateAllFields', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;
    assert.equal(EntityRoot._isValid, true);
    element.validateAllFields();
    // number comes with a invalid default and must be false
    assert.equal(EntityRoot._isValid, false);
    EntityRoot.number._value = 6;
    EntityRoot.id._value = 'xx-98-ggh';
    EntityRoot.display_name._value = 'aha';
    EntityRoot.text._value = 'aha1111';
    assert.equal(EntityRoot._isValid, true);
    element.validateAllFields();
    assert.equal(EntityRoot._isValid, true);

    done();
  });

  it('should validate   step, min, max on numerical', done => {
    /**
     * Constraints are set like:
     * min:6
     * max:12
     * step:3
     * valid numbers are: 6, 9,12
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;
    // valid on init
    assert.equal(EntityRoot._isValid, true, 'init');

    EntityRoot.number._value = 6;
    assert.equal(EntityRoot._isValid, true, '6');

    EntityRoot.number._value = 1;
    assert.equal(EntityRoot._isValid, false, '1');

    EntityRoot.number._value = 12;
    assert.equal(EntityRoot._isValid, true, '12');

    EntityRoot.number._value = 2;
    assert.equal(EntityRoot._isValid, false, '2');

    EntityRoot.number._value = 3;
    assert.equal(EntityRoot._isValid, false, '3');

    EntityRoot.number._value = 4;
    assert.equal(EntityRoot._isValid, false, '4');

    EntityRoot.number._value = 5;
    assert.equal(EntityRoot._isValid, false, '5');

    EntityRoot.number._value = 7;
    assert.equal(EntityRoot._isValid, false, '7');

    EntityRoot.number._value = 8;
    assert.equal(EntityRoot._isValid, false, '8');

    EntityRoot.number._value = 9;
    assert.equal(EntityRoot._isValid, true, '9');

    EntityRoot.number._value = 10;
    assert.equal(EntityRoot._isValid, false, '10');

    EntityRoot.number._value = 11;
    assert.equal(EntityRoot._isValid, false, '11');

    EntityRoot.number._value = 13;
    assert.equal(EntityRoot._isValid, false, '13');

    done();
  });

  it('should check validity and mark as invalid', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/testmeta.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);

        assert.equal(element.json.data.display_name, response.data.display_name);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          EntityRoot.description._value = 'New';
          assert.equal(EntityRoot._isValid, false);

          EntityRoot.description._value = 'Newss';
          assert.equal(EntityRoot._isValid, true);

          EntityRoot.description._value = 'Specs say you can only have 20  letters';
          assert.equal(EntityRoot._isValid, false);

          const oldlabel = EntityRoot.description._meta.label;
          assert.equal(EntityRoot.description._meta.label, oldlabel);
          EntityRoot.description._meta.label = 'Something';

          assert.equal(EntityRoot.description._meta.label, 'Something');
          element.reset();

          assert.equal(EntityRoot.description._meta.label, oldlabel);
          done();
        });
      });
  });

  it('should be possible to reset to last injected state', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/testmeta.json')
      .then(res => res.json())
      .then(response => {
        element.injectRaw(response);

        assert.equal(element.json.data.display_name, response.data.display_name);

        done();
      });
  });

  it('should validate a fieldnode against the specs', done => {
    element.setAttribute('type', 'experiment.Experiment');
    // assert.equal(element.data.furo_data_text_input._value, "Ein text per default");
    const handler = () => {
      assert.equal(element.data.furo_data_text_input._value, '');
      assert.equal(element.data.furo_data_text_input._pristine, true);
      done();
    };
    element.data.addEventListener('data-injected', handler, { once: true });

    element.injectRaw({ id: 12, display_name: 'party' });
  });

  it('should set the values like injected, remove defaults,...', done => {
    element.setAttribute('type', 'experiment.Default');
    assert.equal(element.data.description._value, 'Ein text per default');
    const handler = () => {
      assert.equal(element.data.description._value, '');
      done();
    };
    element.data.addEventListener('data-injected', handler, { once: true });

    element.injectRaw({ id: 12, display_name: 'party' });
  });

  it('should apply meta of fields and overwrite existing default meta information', done => {
    element.setAttribute('type', 'experiment.ExperimentEntity');
    assert.equal(element.data.data.description._value, 'Default Description');
    assert.equal(element.data.data.furo_data_checkbox_input._meta.label, 'checkbox_input');
    assert.equal(element.data.data.furo_data_checkbox_input._meta.readonly, false);

    // after response inject
    const handler = () => {
      assert.equal(element.data.data.description._value, '');
      assert.equal(element.data.data.furo_data_checkbox_input._meta.label, 'Label from response');
      assert.equal(element.data.data.furo_data_checkbox_input._meta.readonly, true);
      done();
    };
    element.data.addEventListener('data-injected', handler, { once: true });

    element.injectRaw({
      data: { id: 12, display_name: 'party', furo_data_checkbox_input: true },
      meta: {
        fields: {
          'data.furo_data_checkbox_input': {
            meta: {
              label: 'Label from response',
              readonly: true,
            },
            constraints: {},
          },
        },
      },
      links: [],
    });
  });

  it('should be possible to create deep recursive object from data', done => {
    element.setAttribute('type', 'experiment.Recursive');

    element.injectRaw({
      id: 1,
      display_name: 'A',
      recursion: {
        id: 11,
        display_name: 'Aa',
        recursion: {
          id: 123,
          display_name: 'bbb',
          recursion: null,
        },
      },
    });

    assert.equal(element.data.display_name._value, 'A');
    assert.equal(element.data.recursion.display_name._value, 'Aa');

    const deep = element.data.recursion;
    deep.recursion._value = { display_name: 'Aaa' };
    assert.equal(element.data.recursion.recursion.display_name._value, 'Aaa');

    done();
  });

  it('should create a recursive data object from spec without stack overflow', done => {
    element.setAttribute('type', 'experiment.Recursive');

    done();
  });

  it('should have the default value set', done => {
    element.setAttribute('type', 'experiment.Default');
    assert.equal(element.data.description._value, 'Ein text per default');

    element.data.repstring.add();
    assert.equal(element.data._pristine, false);
    assert.equal(element.data.repstring.repeats[0]._value, 'Ein text per default');
    element.data.repstring.add('new');

    assert.equal(element.data.repstring.repeats[1]._value, 'new');
    done();
  });

  it('should print out the type on toString', done => {
    element.setAttribute('type', 'project.ProjectEntity');
    assert.equal(element.data.toString(), 'ProjectEntity');
    element.data.data.display_name._value = 'yes';
    assert.equal(element.data.data.display_name.toString(), 'yes');

    done();
  });

  it('should be possible to set the model to the inital empty state', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/testmeta.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);

        const initalLabel = element.data.data.display_name._meta.label;

        assert.equal(element.json.data.display_name, response.data.display_name);

        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          assert.equal(EntityRoot, element.data.data);
          element.data.data.display_name._meta.label = 'Something';

          element.init();

          assert.equal(element.data.data.display_name._meta.label, initalLabel);
          done();
        });
      });
  });

  it('should be possible to read the current model as json', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/testmeta.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);

        assert.equal(element.json.data.display_name, response.data.display_name);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          EntityRoot.description._value = 'New';
          const oldlabel = EntityRoot.description._meta.label;
          assert.equal(EntityRoot.description._meta.label, oldlabel);
          EntityRoot.description._meta.label = 'Something';

          assert.equal(element.json.data.description, 'New');
          assert.equal(EntityRoot.description._meta.label, 'Something');
          element.reset();

          assert.equal(EntityRoot.description._meta.label, oldlabel);
          done();
        });
      });
  });

  it('should update meta on server meta data', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/testmeta.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot._pristine, true);
          const EntityRoot = ObjectDataRoot.data;

          assert.equal(EntityRoot.description._value, 'Furo Foundation');

          assert.equal(EntityRoot.description._meta.label, 'ID label from response');
          assert.equal(EntityRoot.cost_limit.currency_code._meta.label, 'deep label');
          assert.equal(EntityRoot.description._constraints.min.is, 5);
          assert.equal(EntityRoot.description._constraints.max.is, 20);
          assert.equal(
            EntityRoot.members.repeats[0].first_name._meta.label,
            'firstname label from response',
          );
          assert.equal(EntityRoot.description._meta.options.list.length, 2);
          done();
        });
      });
  });

  it('should update meta on server meta data', done => {
    element.setAttribute('type', 'project.ProjectCollection');

    fetch('/mockdata/projects/testmetaInCollection.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot._pristine, true);
          const EntityRoot = ObjectDataRoot.entities.repeats[0].data;
          assert.equal(EntityRoot.description._value, 'Furo Foundation');

          assert.equal(EntityRoot.description._meta.label, 'ID label from response');
          assert.equal(EntityRoot.cost_limit.currency_code._meta.label, 'deep label');
          assert.equal(EntityRoot.description._constraints.min.is, 5);
          assert.equal(EntityRoot.description._constraints.max.is, 20);
          assert.equal(EntityRoot.description._meta.options.list.length, 2);
          assert.equal(EntityRoot.members._meta.readonly, true);
          assert.equal(EntityRoot.members.repeats[0].first_name._meta.readonly, true);
          assert.equal(
            EntityRoot.members.repeats[0].first_name._meta.label,
            'firstname label from response',
          );

          done();
        });
      });
  });

  it('should log to console on non existing type', done => {
    element.type = 'unknown';
    assert.equal(element._type, undefined);
    element.type = 'project.ProjectEntity';
    assert.equal(element._type, 'project.ProjectEntity');
    done();
  });
  it('should be possible to get the --json value-- of any node', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          const val = EntityRoot.members._value;

          EntityRoot.members.add(val[0]);
          // set on the repeats
          EntityRoot.members.repeats[1].first_name._value = 'Kyra';

          // read on value
          assert.equal(EntityRoot.members._value[0].first_name, 'John');
          assert.equal(EntityRoot.members._value[1].first_name, 'Kyra');

          done();
        });
      });
  });

  it('should declare the complete object not pristine when one field value changes', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot._pristine, true);
          const EntityRoot = ObjectDataRoot.data;
          EntityRoot.members.repeats[0].first_name._value = 'new';
          assert.equal(ObjectDataRoot._pristine, false);
          assert.equal(EntityRoot._pristine, false);
          assert.equal(EntityRoot.members._pristine, false);
          assert.equal(EntityRoot.members.repeats[0]._pristine, false);
          assert.equal(EntityRoot.members.repeats[0].first_name._pristine, false);

          done();
        });
      });
  });

  it('should declare the complete object valid when all fields becomes valid', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot._isValid, true);
          const EntityRoot = ObjectDataRoot.data;

          EntityRoot.members.repeats[0].first_name._setInvalid({
            message: 'this first name does not exist',
          });
          EntityRoot.members.repeats[0].display_name._setInvalid({
            message: 'this first name does not exist',
          });
          assert.equal(ObjectDataRoot._isValid, false);
          EntityRoot.members.repeats[0].first_name._clearInvalidity();
          assert.equal(ObjectDataRoot._isValid, false);
          EntityRoot.members.repeats[0].display_name._clearInvalidity();
          assert.equal(ObjectDataRoot._isValid, true);

          done();
        });
      });
  });
  it('should declare the complete object as invalid if one field becomes invalid', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot._isValid, true);
          const EntityRoot = ObjectDataRoot.data;

          EntityRoot.members.repeats[0].first_name._setInvalid({
            message: 'this first name does not exist',
          });
          assert.equal(ObjectDataRoot._isValid, false);
          done();
        });
      });
  });

  it('should be possible remove  a item in a repeated by the FieldNode itself', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;

          assert.equal(EntityRoot.members.repeats.length, 1);
          // add
          EntityRoot.members.add();
          assert.equal(EntityRoot.members.repeats.length, 2);
          EntityRoot.members.repeats[1].deleteNode();
          assert.equal(EntityRoot.members.repeats.length, 1);
          done();
        });
      });
  });

  it('should be possible to add and remove all a repeated item on repeated fields', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;

          assert.equal(EntityRoot.members.repeats.length, 1);
          // add
          EntityRoot.members.add();
          assert.equal(EntityRoot.members.repeats.length, 2);
          EntityRoot.members.removeAllChildren();
          assert.equal(EntityRoot.members.repeats.length, 0);
          done();
        });
      });
  });
  it('should be possible to remove  repeated item by index fields', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;

          assert.equal(EntityRoot.members.repeats.length, 1);
          // add
          EntityRoot.members.add();
          assert.equal(EntityRoot.members.repeats.length, 2);
          EntityRoot.members.deleteChild(1);
          assert.equal(EntityRoot.members.repeats.length, 1);
          done();
        });
      });
  });

  it('a repeater should update its __childnodes', done => {
    element.setAttribute('type', 'task.TaskEntity');

    fetch('/mockdata/tasks/2/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          assert.equal(ObjectDataRoot.links.repeats.length, 3);
          assert.equal(ObjectDataRoot.links.__childNodes.length, 3);
          fetch('/mockdata/tasks/1/get.json')
            .then(res => res.json())
            .then(r => {
              element.injectRaw(r);
              p.then(odr => {
                assert.equal(odr.links.repeats.length, 1);
                assert.equal(odr.links.__childNodes.length, 1);

                done();
              });
            });
        });
      });
  });

  it('should fire data-changed when some internal value changed', done => {
    element.setAttribute('type', 'project.ProjectEntity');
    /**
     * Attention data-changed will be fired on every field when you inject data
     */
    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;

          assert.equal(EntityRoot.members.repeats[0].first_name._value, 'John');

          const handler = () => {
            assert.equal(element.data.data._spec.type, 'project.Project');
            const firstname = element.data.data.members.repeats[0].first_name._value;
            assert.equal(firstname, 'Lysander');
            element.removeEventListener('data-changed', handler);
            done();
          };
          element.addEventListener('data-changed', handler, true);

          EntityRoot.members.repeats[0].first_name._value = 'Lysander';
        });
      });
  });

  it('should return a promise', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          const firstname = EntityRoot.members.repeats[0].first_name._value;
          assert.equal(EntityRoot._spec.type, 'project.Project');
          assert.equal(firstname, 'John');
          done();
        });
      });
  });

  it('should reslove queued inject promise', done => {
    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        const p = element.injectRaw(response);
        p.then(ObjectDataRoot => {
          const EntityRoot = ObjectDataRoot.data;
          const firstname = EntityRoot.members.repeats[0].first_name._value;
          assert.equal(EntityRoot._spec.type, 'project.Project');
          assert.equal(firstname, 'John');
          done();
        });
        element.setAttribute('type', 'project.ProjectEntity');
      });
  });

  it('should be a furo-data-object_test', done => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should have useful data', done => {
    element.setAttribute('type', 'project.ProjectEntity');
    let EntityRoot = {};
    const handler = () => {
      const firstname = EntityRoot.members.repeats[0].first_name._value;
      assert.equal(element.data.data._spec.type, 'project.Project');
      assert.equal(firstname, 'John');
      done();
    };
    element.addEventListener('data-injected', handler);

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        EntityRoot = element.data.data;
        element.injectRaw(response);
      });
  });

  it('should fire data-injected', done => {
    element.setAttribute('type', 'project.ProjectEntity');

    const handler = () => {
      done();
    };
    element.addEventListener('data-injected', handler);

    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        element.injectRaw(response);
      });
  });

  it('should queue data on injectRaw until the type is set', done => {
    fetch('/mockdata/projects/1/get.json')
      .then(res => res.json())
      .then(response => {
        element.injectRaw(response);
        element.setAttribute('type', 'project.ProjectEntity');
      });

    const handler = () => {
      done();
    };
    element.addEventListener('object-ready', handler);
  });
});
