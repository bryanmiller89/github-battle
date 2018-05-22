var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Root entry file webpack begins with for building modules
  entry: './app/index.js',
  // Output path where webpack emits created bundles and named files
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  // Loaders to transform files into bundles modules
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  mode: "development"
};