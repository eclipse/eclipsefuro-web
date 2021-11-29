import { fixture, html } from '@open-wc/testing'
import { assert } from '@esm-bundle/chai'

import '../src/furo-catalog.js'
import './queue-test.js'
import '../src/testhelper/test-bind.js' // for testing with wires and hooks

describe('queuing', () => {
  let element
  let host

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <queue-test id='queued'></queue-test>
        </template>
      </test-bind>
    `)
    await testbind.updateComplete
    host = testbind._host;
    [, element] = testbind.parentNode.children
    await host.updateComplete
    await element.updateComplete
  })

  it('should be a queuing', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'queue-test')
    done()
  })

  it('queue should be executed', done => {
    // element was inited with 333 and the wirehook was fired before the element is ready,
    // the wires should be queued and executed when everything is ready
    assert.equal(element.later, 12)
    done()
  })
})
