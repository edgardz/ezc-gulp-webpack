var gulp              = require("gulp");
var gutil             = require("gulp-util");
var open              = require('gulp-open');
var webpack           = require("webpack");
var WebpackDevServer  = require("webpack-dev-server");
var webpackConfig     = require("./webpack.config");



// The development server
gulp.task("default", ["server"]);
gulp.task("server", function(callback) {

  var config      = Object.create(webpackConfig);
  config.devtool  = "eval";
  config.debug    = true;

  config.entry = config.entry.concat(
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/dev-server'
  );

  config.plugins = config.plugins.concat(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  config.module.preLoaders = config.module.preLoaders.concat({
    test: /\.js$/,
    loader: "source-map-loader"
  });

  new WebpackDevServer(webpack(config), {
    contentBase:        config.output.path,
    publicPath:         config.output.publicPath,
    hot:                true,
    historyApiFallback: true,
    stats:              {colors: true}
  }).listen(1337, 'localhost', function(err, result) {
    if(err) throw new gutil.PluginError("server", err);
    gutil.log("[server]", "http://localhost:1337");
    gulp.src(__filename).pipe(open({uri: 'http://localhost:1337'}));
  });
});



// Production build
gulp.task("build", function(callback) {

  var config = Object.create(webpackConfig);
  config.plugins = config.plugins.concat(
    new webpack.DefinePlugin({"process.env": {"NODE_ENV": JSON.stringify("production")}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError("build", err);
    gutil.log("[build]", stats.toString({colors: true}));
    callback();
  });
});
