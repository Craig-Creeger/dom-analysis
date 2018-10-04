const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{ test: /\.js$/, include: /src/, loader: 'babel-loader' }]
	}
};
