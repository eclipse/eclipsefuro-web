import { fixture, html } from '@open-wc/testing'
import 'axe-core/axe.min.js'

import '../src/furo-catalog.js'
import '@furo/fbp/src/testhelper/test-bind.js' // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js'

describe('furo-ui5-data-text-input-scalar', () => {
  let host
  let input

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-text-input ƒ-bind-data="--data(*.data.description)"></furo-ui5-data-text-input>
          <furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"></furo-data-object>
        </template>
      </test-bind>
    `)
    await testbind.updateComplete
    host = testbind._host;
    [, input] = testbind.parentNode.children
    await host.updateComplete
    await input.updateComplete
  })

  it('should be a furo-ui5-data-text-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-text-input')
    done()
  })





})

