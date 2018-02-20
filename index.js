const bsn3 = require('bootstrap.native/build-module.js')
let bsn = require('bootstrap.native/build-module-v4.js')
const { getOptions } = require('loader-utils')

module.exports = function () {
  this.cacheable = true
  const callback = this.async()
  const options = getOptions(this) || {}

  if (this.options.bsVersion === 3) {
    bsn = bsn3
  }

  bsn(options).then((source) => {
    callback(null, source)
  }).catch((error) => {
    callback(error)
  })
}
