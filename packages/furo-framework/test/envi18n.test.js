import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';

import { Tst } from './init.js';

describe('i18n', () => {
  it('env specs should have translated static texts', done => {
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.label,
      'task.display_name.label**'
    );
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.hint,
      'task.display_name.hint**'
    );
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.description.constraints.max
        .message,
      'task.desc.maxlength**'
    );
    assert.equal(
      Tst.getEnv().api.specs['experiment.Experiment'].fields.type_with_options
        .meta.options.list[0].display_name,
      'option_1**'
    );
    assert.equal(
      Tst.getEnv().api.specs['experiment.Experiment'].fields.type_with_options
        .meta.options.list[1].display_name,
      'option_2**'
    );
    done();
  });

  it('should change the locale and update the translations', done => {
    Tst.getSys().setLocale('de-DE');
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.hint,
      'task.display_name.hint**'
    );
    Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.hint =
      'qqqqqqqqqq';
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.hint,
      'qqqqqqqqqq'
    );
    Tst.getSys().setLocale('en-US');
    assert.equal(
      Tst.getEnv().api.specs['task.Task'].fields.display_name.meta.hint,
      'task.display_name.hint**'
    );
    done();
  });
});
