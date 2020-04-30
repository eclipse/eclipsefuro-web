import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import { ValidatorGoogleTypeDate } from '../src/lib/ValidatorGoogleTypeDate.js';

describe('ValidatorGoogleTypeDate', () => {
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

  it('should check required constraint', done => {
    /**
     * Constraints are set like:
     * "min":  "is": "2020-01-01",
     * "max":  "is": "9999-12-31",
     * "step":  "is": "30",
     * "required": "is": true
     */
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    ValidatorGoogleTypeDate.validateConstraints(EntityRoot.date).then(
      () => {},
      error => {
        assert.equal(error.message, 'is required**', 'required');
        assert.equal(error.name, 'required', 'required');
        done();
      },
    );
  });

  it('should check max constraint', done => {
    element.setAttribute('type', 'experiment.Constraints');
    const EntityRoot = element.data;

    EntityRoot.date._value = { day: 1, month: 1, year: 99999 };
    setTimeout(() => {
      ValidatorGoogleTypeDate.validateConstraints(EntityRoot.date).then(
        () => {},
        error => {
          assert.equal(error.message, 'max 31.12.9999**', 'max');
          assert.equal(error.name, 'max', 'max');
          done();
        },
      );
    }, 20);
  });
});
