const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');

// const smp = new SpeedMeasurePlugin(); 构建打点

module.exports = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: utils.resolve('./../dist/dll/manifest.json'),
    }),
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
      cache: true,
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('./../dist/dll/vendor.dll.js'),
      includeSourcemap: false,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    port: '8081',
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
