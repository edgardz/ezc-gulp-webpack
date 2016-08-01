var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');
var pkg               = require('../package.json');

module.exports = {
  entry: {
    'polyfills':  './source/polyfills.ts',
    'vendor':     './source/vendor.ts',
    'app':        './source/main.tsx'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
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
      version: 'v' + pkg.version + '&nbsp;&nbsp;⏱&nbsp;&nbsp;&nbsp;' + new Date().toGMTString()
    })
  ]
};
