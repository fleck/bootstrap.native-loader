const { exec } = require('child_process')

module.exports = function (source) {
  this.cacheable = true

  exec('node node_modules/bootstrap.native/build-v4.js --only modal', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    source = stdout
  })
  return source
}
