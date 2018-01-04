var path = require('path');
 var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
 template: './public/index.html',
 filename: 'index.html',
 inject: 'body'
})
 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },
             { test: /\.css$/, use: ['style-loader', 'css-loader'] },
              {
               test: /\.scss$/,
               use: [
                 'style-loader',
                 'css-loader',
                 { loader: 'sass-loader', options: { sourceMap: true } }
               ]
              },
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [HtmlWebpackPluginConfig]
 };
