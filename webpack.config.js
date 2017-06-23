let env = require('dotenv').config();
let { resolve } = require('path');

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${process.env.NODE_HOST}:${process.env.NODE_PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  
  output: {
    filename: 'app-[hash].min.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  
  devServer: {
    host: process.env.NODE_HOST,
    port: process.env.NODE_PORT,
    contentBase: './src',
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    stats: {
      colors: true
    }
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {sourceMap: false}
            },
          ],
        }),
      }
    ]
  },
  
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: 'app.min.css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    //new OpenBrowserPlugin({ url: `http://${process.env.NODE_HOST}:${process.env.NODE_PORT}` })
  ]
  
}