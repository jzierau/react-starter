const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = './build';

module.exports = {
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, OUTPUT_PATH),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
  devtool: 'eval-source-map',
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(ico|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, OUTPUT_PATH),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
