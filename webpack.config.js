const path = require("path");

// This is main configuration object that tells Webpackw what to do.
module.exports = {
	//path to entry paint
	entry: "./index.js",
	//path and filename of the final output
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	target: "node",
	//default mode is production
	mode: "production",
};
