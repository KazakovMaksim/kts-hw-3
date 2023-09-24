const path = require('path');

const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackConfig = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.join(srcPath, 'main.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackConfig({
      template: path.join(srcPath, 'index.html'),
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 9000,
  },
};
