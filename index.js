const bsn = require('bootstrap.native/lib/build-module.js')
const { getOptions } = require('loader-utils')

module.exports = function () {
  this.cacheable = true
  const callback = this.async()
  const options = getOptions(this) || {}
  options.bs_version = options.bs_version || 4;

  bsn(options).then((source) => {
    callback(null, source)
  }).catch((error) => {
    callback(error)
  })
}
