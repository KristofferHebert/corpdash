'use strict'
const webpack = require('webpack')
const path = require('path')
const root = path.resolve('./')

module.exports = {
  entry: {
    app: root + '/src/js/app',
  },
  output: {
    path: root + '/public/build/js/',
    filename: 'bundle.min.js'
  },
  devtools: 'eval',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: ['react']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
