const path = require('path');
const utils = require('./utils');

module.exports = {
  entry: {
    app: './src/renderer/index',
  },
  output: {
    path: utils.resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('node_modules/.cache')
            }
          },
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use:
          [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: path.resolve('node_modules/.cache')
              }
            },
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src/renderer'),
    },
  },
};
