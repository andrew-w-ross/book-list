/// <reference path="typings/main.d.ts" />
var webpack = require("webpack");
var path = require("path");

var config = {
	context : __dirname,
	entry: "./src/index",
	output:{
		path: path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	resolve:{
		extensions : ["",".tsx",".ts",".jsx",".js"]
	},
	devtool : "eval-source-map"
};

module.exports = config;