const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');

module.exports ={
  mode: 'development',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: utils.resolve('../dist/dll'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: utils.resolve('../dist/dll/manifest.json'),
      name: '[name]_library',
    }),
  ],
}