var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './source/index.tsx'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
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
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel',
          'ts-loader'
        ]
      }
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
    new HtmlWebpackPlugin({
      template: './source/index.html'
    })
  ],
};