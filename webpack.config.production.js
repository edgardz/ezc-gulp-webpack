const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './source/index.tsx'
  ],
  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    preLoaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1!postcss'),
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel',
          'ts-loader'
        ]
      }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('precss')(),
      require('autoprefixer')()
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin([__dirname + '/build'], {
      root: process.cwd()
    }),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlWebpackPlugin({
      template: './source/index.html'
    })
  ],
};