const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.dev.html',
    }),
  ],
})
