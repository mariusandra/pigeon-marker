const path = require('path')

module.exports = {
  alias: {
    // demo namespace
    '~': path.join(__dirname, './demo'),

    // name of local component to sometimes import in demo
    // 'pigeon-maps': path.join(__dirname, '../pigeon-maps/src'),

    // our name
    'pigeon-marker': path.join(__dirname, './src')
  }
}
