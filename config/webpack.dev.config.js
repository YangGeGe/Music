const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = webpackMerge(baseWebpackConfig,{
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), 
            template: 'index.html',
            inject: true,
        })
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      contentBase: false,
      compress: true,
      port: "8081",
      publicPath: "/",
      proxy: {
          
      },
  }
});