var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers           = require('./helpers');
var pkg               = require('../package.json');

console.log('\n\n --->  WEBPACK RESULT IS SERVED FROM http://0.0.0.0:8080/  <--- \n\n');

module.exports = {
  devtool: 'source-map',

  entry: {
    'polyfills':  './source/polyfills.js',
    'vendor':     './source/vendor.js',
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './source/main.js'
    ]
  },

  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    host: '0.0.0.0',
    port: '8080'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[path][hash:base64:5]!postcss'
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
      require("lost")(),
      require('autoprefixer')()
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'source/index.html',
      version: 'v' + pkg.version + '&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;' + new Date().toGMTString()
    })
  ]
};
