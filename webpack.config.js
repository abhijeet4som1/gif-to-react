var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test:/\.css$/,
      loader:"style!css"
    },
    {
  		test: /\.less$/,
      loaders: ['style','css?importLoaders=1!less','less']
    }
  ]
  },
  resolve: {
		root: [path.resolve('./src')],
		extensions: ['','.jsx', '.js']
	}
};
