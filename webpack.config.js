const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

  entry: {
    main: './src/main',
    vendor: './src/vendor'
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    // Temporary disable warnings for critical context. See angular/angular#11580
    exprContextCritical: false,

    loaders: [
      { test: /\.ts$/,   loader: 'ts-loader!angular2-template-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.less/,  loader: 'raw-loader!less-loader' },
      { test: /\.css/,   loader: 'style-loader!css-loader'},
      { test: /\.jpg$/,  loader: "file-loader" },
      { test: /\.svg$/,  loader: "url-loader?mimetype=image/svg+xml" },
      { test: /\.png$/,  loader: "url-loader?mimetype=image/png" },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new LiveReloadPlugin({ appendScriptTag: true }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};