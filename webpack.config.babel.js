import path from 'path';

export default {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './main.js'
	},
	output: {
		libraryTarget: 'window',
		library: 'domAnalysis',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
	}
};
