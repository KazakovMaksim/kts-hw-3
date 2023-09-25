const path = require('path');

const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackConfig = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const getSettingsForStyles = (withModules = false) => {
  return [
    MiniCssExtractPlugin.loader,
    !withModules
      ? 'css-loader'
      : {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: !isProd
                ? '[path][name]__[local]'
                : '[hash:base64]',
            },
          },
        },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
    'sass-loader',
  ];
};

module.exports = {
  entry: path.join(srcPath, 'main.tsx'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  target: !isProd ? 'web' : 'browserslist',
  module: {
    rules: [
      {
        test: /\.[t]jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.s?css$/,
        use: getSettingsForStyles(true),
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: getSettingsForStyles(),
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackConfig({
      template: path.join(srcPath, 'index.html'),
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.join(srcPath, 'components'),
      assets: path.join(srcPath, 'assets'),
      constants: path.join(srcPath, 'constants'),
      styles: path.join(srcPath, 'styles'),
      types: path.join(srcPath, 'types'),
      utils: path.join(srcPath, 'utils'),
      api: path.join(srcPath, 'api'),
      store: path.join(srcPath, 'store'),
      hooks: path.join(srcPath, 'hooks'),
      pages: path.join(srcPath, 'pages'),
      config: path.join(srcPath, 'config'),
    },
  },
};
