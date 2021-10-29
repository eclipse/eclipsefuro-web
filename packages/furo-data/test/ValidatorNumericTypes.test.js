import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import { ValidatorNumericTypes } from '../src/lib/ValidatorNumericTypes.js';

describe('ValidatorNumbericTypes', () => {
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

  // not every value will work, because of the behavior of the float type :-(
  it('should check step 0.02 constraint on float', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.float._value = 0.02;
    ValidatorNumericTypes.validateConstraints(EntityRoot.float).then(
      () => {
        // must be valid
        done();
      },
      () => {},
    );
  });

  it('should check min constraint', done => {
    /**
     * Constraints are set like:
     * "min":  "is": "6",
     * "step": "is": "3",
     * "max":  "is": "12",
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.number._value = 3;
    ValidatorNumericTypes.validateConstraints(EntityRoot.number).then(
      () => {},
      error => {
        assert.equal(error.name, 'min', 'min');
        assert.equal(error.message, 'Minimal number 6**');
        done();
      },
    );
  });

  it('should check max constraint', done => {
    /**
     * Constraints are set like:
     * "min":  "is": "6",
     * "step": "is": "3",
     * "max":  "is": "12",
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.number._value = 36;
    ValidatorNumericTypes.validateConstraints(EntityRoot.number).then(
      () => {},
      error => {
        assert.equal(error.name, 'max', 'max');
        done();
      },
    );
  });

  it('should check constraint on float', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.float._value = 13;
    ValidatorNumericTypes.validateConstraints(EntityRoot.float).then(
      () => {},
      error => {
        assert.equal(error.name, 'max', 'max');
        done();
      },
    );
  });
});
