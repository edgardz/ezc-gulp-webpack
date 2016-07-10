var path = require('path');
var webpack = require('webpack');

console.log(__dirname + '/www/');

module.exports = {
  cache: true,

  entry: ['./source/index.tsx'],

  output: {
    path: path.resolve(__dirname, "www"),
    publicPath: '/',
    filename: "bundle.js",
  },

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ],
      preLoaders: []
  },

  plugins: []
};