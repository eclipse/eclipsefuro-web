import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
import "@furo/data/src/furo-catalog.js";
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import { ValidatorGoogleTypeMoney } from '../src/BaseSpecValidators/ValidatorGoogleTypeMoney.js';

describe('ValidatorGoogleTypeMoney', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-data-object></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should check required constraint', done => {
    /**
     * Constraints are set like:
     * "min":  "is": "1200.50",
     * "max":  "is": "100000",
     * "step":  "is": "1000",
     * "required": "is": true
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    ValidatorGoogleTypeMoney.validateConstraints(EntityRoot.money).then(
      () => {},
      error => {
        assert.equal(error.message, 'money is required**', 'required');
        assert.equal(error.name, 'required', 'required');
        done();
      }
    );
  });

  it('should check min constraint', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.money._value = { units: 900, nanos: 0 };
    setTimeout(() => {
      ValidatorGoogleTypeMoney.validateConstraints(EntityRoot.money).then(
        () => {},
        error => {
          assert.equal(error.message, 'min amount 1200.50**', 'min');
          assert.equal(error.name, 'min', 'min');
          done();
        }
      );
    }, 20);
  });

  it('should check max constraint', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.money._value = { units: 120000, nanos: 0 };
    setTimeout(() => {
      ValidatorGoogleTypeMoney.validateConstraints(EntityRoot.money).then(
        () => {},
        error => {
          assert.equal(error.message, 'max amount 100000.00**', 'max');
          assert.equal(error.name, 'max', 'max');
          done();
        }
      );
    }, 20);
  });

  it('should check step constraint', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.money._value = { units: 2200, nanos: 0 };
    setTimeout(() => {
      ValidatorGoogleTypeMoney.validateConstraints(EntityRoot.money).then(
        () => {},
        error => {
          assert.equal(error.message, 'only in steps of 1000**', 'step');
          assert.equal(error.name, 'step', 'step');
          done();
        }
      );
    }, 20);
  });

  it('should be a valid step', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.money._value = { units: 2200, nanos: 5000000 };
    setTimeout(() => {
      ValidatorGoogleTypeMoney.validateConstraints(EntityRoot.money).then(n => {
        assert.equal(n.units._value, 2200);
        assert.equal(n.nanos._value, 5000000);
        done();
      });
    }, 20);
  });
});
