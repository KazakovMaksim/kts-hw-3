const path = require('path');

const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackConfig = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(srcPath, 'main.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  target: !isProd ? 'web' : 'browserslist',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'saas-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackConfig({
      template: path.join(srcPath, 'index.html'),
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true,
  },
};
