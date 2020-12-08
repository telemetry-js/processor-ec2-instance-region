'use strict'

const EventEmitter = require('events').EventEmitter
const ec2Info = require('ec2-info')

const INFO_DOC = 'dynamic/instance-identity/document'

module.exports = function plugin () {
  return new Processor()
}

class Processor extends EventEmitter {
  constructor () {
    super()
    this._region = null
  }

  start (callback) {
    this._fetch((err, region) => {
      if (err) return callback(err)

      this._region = region
      callback()
    })
  }

  stop (callback) {
    this._region = null
    process.nextTick(callback)
  }

  process (metric) {
    metric.tags.region = this._region
    this.emit('metric', metric)
  }

  _fetch (callback) {
    ec2Info([INFO_DOC], (err, map) => {
      if (err) return callback(err)

      try {
        var region = JSON.parse(map.get(INFO_DOC)).region
      } catch (err) {
        return callback(err)
      }

      if (typeof region !== 'string' || region === '') {
        return callback(new TypeError('Expected a non-empty string region'))
      }

      callback(null, region)
    })
  }
}
