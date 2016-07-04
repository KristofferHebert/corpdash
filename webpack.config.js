'use strict'
const path = require('path')
const root = path.resolve('./')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: root + '/src/js/app.js',
  output: {
    path: root + '/public/build/js/',
    filename: 'bundle.min.js'
  },
  devtools: 'eval',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'lodash': '_'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: ['react', 'lodash']
  },
  plugins: [
    new ExtractTextPlugin('./src/css/main.css')
  ]
}
