const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
	  {
		  test: /\.(png|svg|jpg|jpeg|gif)$/i,
		  type: 'asset/resource',
	  },
	  {
		  test: /\.(woff|woff2|eot|ttf|otf)$/i,
		  type: 'asset/resource',
	  },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
