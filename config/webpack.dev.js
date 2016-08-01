const webpack         = require('webpack');
var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');

console.log('\n\n --->  WEBPACK RESULT IS SERVED FROM http://0.0.0.0:8080/  <--- \n\n');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['babel','ts']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.(html|hbs)$/,
        exclude: /node_modules/,
        loader: 'handlebars'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: /node_modules/,
        loader: 'url?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap&modules&importLoaders=1!postcss'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    host: '0.0.0.0',
    port: '8080'
  }
});
