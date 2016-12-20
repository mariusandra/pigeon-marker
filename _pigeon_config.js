const path = require('path')

module.exports = {
  alias: {
    // demo namespace
    '~': path.join(__dirname, './demo'),

    // name of local component to import in demo
    'pigeon-marker': path.join(__dirname, './src')
  }
}
