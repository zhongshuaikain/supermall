const path = require("path");

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
}