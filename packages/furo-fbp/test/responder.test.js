import { fixture, html } from '@open-wc/testing'
import { assert } from '@esm-bundle/chai'

import '../src/furo-catalog.js'
import './responder-test.js'
import '../src/flow-bind.js' // for testing with wires and hooks

describe('responder', () => {
  let element
  let host

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <responder-test
            ƒ-double='--number'
            @-ƒ-double='--response'
            fn-double='--numberFN'
            on-fnret-double='--responseFN'
          ></responder-test>
        </template>
      </flow-bind>
    `)
    await testbind.updateComplete
    host = testbind._host;
    [, element] = testbind.parentNode.children
    await host.updateComplete
    await element.updateComplete
  })


  it('responder should be executed', done => {

    host._FBPAddWireHook('--response', n => {
      assert.equal(n, 8)
      done()
    })

    host._FBPTriggerWire('--number', 4)

  })


  it('responder should be executed', done => {
    host._FBPAddWireHook('--responseFN', n => {
      assert.equal(n, 16)
      done()
    })
    host._FBPTriggerWire('--numberFN', 8)
  })

  it('Mixed', done => {
    host._FBPAddWireHook('--responseFN', n => {
      assert.equal(n, 16)
      done()
    })
    host._FBPTriggerWire('--number', 8)
  })
})
