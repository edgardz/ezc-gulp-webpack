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
    new HtmlWebpackPlugin({
      template: './source/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};