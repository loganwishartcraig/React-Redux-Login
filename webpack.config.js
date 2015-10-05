var path = require('path')

module.exports = {
  entry: './React/entry.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: __dirname}
    ]
  }
};