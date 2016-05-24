'use strict'
const path = require('path')
const root = path.resolve('./')

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
    'react-router': 'ReactRouter'
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
  }
}
