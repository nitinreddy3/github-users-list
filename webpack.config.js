'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
];

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './app/main.js')
  ],
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, './build'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?name=app/theme/stylesheets/[name]-[hash].[ext]'
      },
      { test: /\.png|jpg|gif$/, loader: 'file-loader?name=app/theme/images/[name].[ext]' },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      { test: /\.(woff|woff2|svg|ttf|eot|ico)$/, loader: 'file-loader?name=app/theme/vendor/fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.template.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('app/theme/stylesheets/[name]-[hash].min.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    modulesDirectories: ['app', 'node_modules']
  }

}
