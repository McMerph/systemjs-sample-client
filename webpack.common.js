const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  target: 'web',
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
}
