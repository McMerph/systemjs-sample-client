const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.prod.html',
      minify: {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
      },
    }),
  ],
})
