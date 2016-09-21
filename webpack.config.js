const factory = require('zoro-kit/build/webpack.config.lib')

module.exports = factory({
  output: {
    filename: 'vue-strap.js',
    library: 'VueStrap'
  }
})
