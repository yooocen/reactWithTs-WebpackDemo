
const path = require("path")//webpack 2.x 需要加入这句话才行
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// import * as webpack from 'webpack';
// import * as path from 'path';
module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.jsx')
    ],
    output: {
        path:path.resolve('./dist'),
        filename : 'bundle.js'
    },
    module: {
        rules:[
             {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: ["react","es2015"]
                }
             },
            {
                test: /\.css$/,
                loader:"style!css", 
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=1000000&name=images/[hash:8].[name].[ext]'
            },
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "app/")
                ],
                loader: ['babel-loader','ts-loader']
            }
            
        ]
    },
    resolve: {
        extensions: ['.web.js', '.ts', '.tsx', '.js']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
          }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}