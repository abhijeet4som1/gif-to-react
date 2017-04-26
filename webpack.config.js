var path = require('path');
var webpack = require('webpack');

const loaders = [
  {
    test: /\.less$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "less-loader" // compiles Less to CSS
    }]
  },
	{
    test: /\.js(x?)$/,
		include: __dirname,
    use: [
      {
        loader: 'babel-loader'
      }
    ]
  }
]

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    './src/client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
	plugins: [
    new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify('production')
	  }),
		new webpack.LoaderOptionsPlugin({
      minimize: true,
     	debug: false
   	}),
		new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
          screw_ie8: true,
          keep_fnames: true
      },
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  ],
	module: {
		rules: loaders
	},
	resolve: {
		modules: [
      path.resolve('./src'),
      path.resolve(__dirname, 'node_modules')
	 ],
		extensions: ['.jsx', '.js']
	}
};
