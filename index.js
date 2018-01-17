const { execSync } = require('child_process')

module.exports = function () {
  this.cacheable = true
  const source = execSync('node node_modules/bootstrap.native/build-v4.js --only modal')
  return 'module.exports = ' + source
}
