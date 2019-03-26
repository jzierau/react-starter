const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const OUTPUT_PATH = './build';

module.exports = {
  mode,
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(ico|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
    ],
  },
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, OUTPUT_PATH),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
  plugins: [
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, OUTPUT_PATH) }]),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, OUTPUT_PATH),
    filename: 'bundle.[hash].js',
  },
};
