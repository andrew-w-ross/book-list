var webpack = require("webpack");
var path = require("path");
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var srcDir = path.resolve(__dirname, "src"); 

var config = {
	context: __dirname,
	entry: [				
		"webpack-hot-middleware/client",
		"./src/index"
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, include: srcDir, loader: 'babel' },
			{ test: /\.tsx?$/, include: srcDir, loader: 'awesome-typescript' },
			{ 
				test: /\.scss$/, 
				includes: [path.resolve(__dirname, "style"), path.resolve(__dirname,"node_modules","bootstrap")], 
				loaders: ["style", "css?sourceMap", "sass?sourceMap"] 
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ForkCheckerPlugin()
	],
	resolve: {
		extensions: ["", ".tsx", ".ts", ".jsx", ".js",".scss",".css"]
	},
	devServer: {
		contentBase: './'
	},
	devtool: "source-map"
};

module.exports = config;