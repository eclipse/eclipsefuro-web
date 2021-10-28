import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';
import '../src/display-google-protobuf-any.js';
import { Env } from '@furo/framework';

describe('display-google-protobuf-any', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-protobuf-any
            ƒ-bind-data="--dao(*.the_any_type)"
          ></display-google-protobuf-any>
          <furo-data-object type="experiment.Experiment" @-object-ready="--dao"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a display-google-protobuf-any element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-protobuf-any');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._spec.type, 'google.protobuf.Any');
      done();
    }, 0);
  });

  it('should update the dynamic type any to google.type.Money', done => {
    Env.locale = 'de';
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(display._field['@type']._value, 'type.googleapis.com/google.type.Money');
        assert.equal(display._field.units._value, '1000');
        assert.equal(display._field.nanos._value, '55000000');
        assert.equal(display._field.currency_code._value, 'EUR');
        done();
      }, 16);
    });

    dao.injectRaw({
      the_any_type: {
        '@type': 'type.googleapis.com/google.type.Money',
        units: 1000,
        nanos: 55000000,
        currency_code: 'EUR',
      },
    });
  });

  it('should update the dynamic type any to google.type.Date', done => {
    Env.locale = 'de';
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(display._field['@type']._value, 'type.googleapis.com/google.type.Date');
        assert.equal(display._field.day._value, '1');
        assert.equal(display._field.month._value, '12');
        assert.equal(display._field.year._value, '2025');
        done();
      }, 16);
    });
    dao.injectRaw({
      the_any_type: {
        '@type': 'type.googleapis.com/google.type.Date',
        day: 1,
        month: 12,
        year: 2025,
      },
    });
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(display));
});
