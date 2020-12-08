'use strict'

const test = require('tape')
const proxyquire = require('proxyquire')
const infoSpies = []

const plugin = proxyquire('.', {
  'ec2-info': function (...args) {
    infoSpies.shift()(...args)
  }
})

test('basic', function (t) {
  t.plan(4)

  infoSpies.push((properties, callback) => {
    t.same(properties, ['dynamic/instance-identity/document'])

    process.nextTick(callback, null, new Map([
      ['dynamic/instance-identity/document', JSON.stringify({
        region: 'fake_region'
      })]
    ]))
  })

  const p = plugin()
  const metric = { tags: { existing: '1' } }

  p.start((err) => {
    t.ifError(err, 'no start error')
    t.is(infoSpies.length, 0, 'ec2-info called')

    p.on('metric', (metric) => {
      t.same(metric, {
        tags: {
          existing: '1',
          region: 'fake_region'
        }
      })
    })

    p.process(metric)
  })
})
