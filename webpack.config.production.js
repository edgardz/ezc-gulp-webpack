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
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /(node_modules)/,
        loader:'url?limit=2048&name=images/[hash].[ext]'
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.woff$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[hash].[ext]'
      },
      {
        test: /\.woff2$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[hash].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.eot$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[hash].[ext]'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('precss')(),
      require('postcss-image-sizes')({assetsPath: './source/assets/images'}),
      require('postcss-at2x')(),
      require("postcss-calc")({mediaQueries: true}),
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