import { fixture, html } from '@open-wc/testing'
import { assert } from '@esm-bundle/chai'
import '../src/furo-catalog.js'
import '@furo/fbp/src/flow-bind.js' // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js'

describe('furo-deep-link', () => {
  let div // the div
  let host

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <div>
            <button rel='list'>list</button>
            <button hide-no-rel rel='list'>hide no rel</button>
            <button rel='add'>add</button>
            <furo-hateoas-state ƒ-bind-hts='--collection(*.links)'></furo-hateoas-state>
          </div>
          <furo-data-object type='person.PersonCollection' @-object-ready='--collection'
                            ƒ-inject-raw='--raw'></furo-data-object>
        </template>
      </flow-bind>
    `)
    await testbind.updateComplete
    host = testbind._host;
    [, div] = testbind.parentNode.children

    await host.updateComplete
    await div.updateComplete
  })

  it('should be a furo-deep-link', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(div.children[3].nodeName.toLowerCase(), 'furo-hateoas-state')
    done()
  })

  it('should disable and enable the buttons', (done) => {
    div.children[3].disable()
    assert.equal(div.children[0].getAttribute('disabled'), '')
    assert.equal(div.children[1].getAttribute('hidden'), '')
    assert.equal(div.children[2].getAttribute('disabled'), '')
    div.children[3].enable()
    assert.equal(div.children[0].getAttribute('disabled'), null)
    assert.equal(div.children[1].getAttribute('hidden'), null)
    assert.equal(div.children[2].getAttribute('disabled'), null)
    done()
  })


  it('should enable  the buttons', (done) => {
    assert.equal(div.children[0].getAttribute('disabled'), '')
    assert.equal(div.children[1].getAttribute('hidden'), '')
    assert.equal(div.children[2].getAttribute('disabled'), '')
    done()
  })


  it('should react to hateoas', (done) => {
    host._FBPTriggerWire('--raw', {
      'links': [
        {
          'href': '/mockdata/persons/list2.json',
          'method': 'GET',
          'rel': 'list',
          'type': 'person.PersonCollection',
          'service': 'PersonService',
        },
        {
          'href': '/mockdata/persons/list2.json',
          'method': 'GET',
          'rel': 'add',
          'type': 'person.PersonCollection',
          'service': 'PersonService',
        },
      ],
    })
    setTimeout(() => {
      assert.equal(div.children[0].getAttribute('disabled'), null)
      assert.equal(div.children[1].getAttribute('hidden'), null)
      assert.equal(div.children[2].getAttribute('disabled'), null)
      done()
    }, 32)

  })
})
