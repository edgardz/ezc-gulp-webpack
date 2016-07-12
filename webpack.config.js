const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './source/index.tsx'
  ],
  output: {
    filename: 'development.js',
    publicPath: 'http://0.0.0.0:8080/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: '8080'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: "style!css?sourceMap&modules&importLoaders=1&localIdentName=[folder]_[local]_[hash:base64:5]!postcss"
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel',
          'ts'
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /(node_modules)/,
        loader:'url?limit=2048&name=images/[name].[ext]'
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff2$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.eot$/,
        exclude: /(node_modules)/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
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
    new HtmlWebpackPlugin({
      template: './source/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};