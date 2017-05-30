const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src') + '/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel-loader',
        options: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
