var webpack = require('webpack')
var ExtractWebpackPlugin = require('extract-text-webpack-plugin')
var env = process.env.NODE_ENV.trim()

module.exports = {
    entry: {
        'alloy-normalize': './index.js',
        'alloy-normalize.min': './index.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractWebpackPlugin.extract('style-loader', 'css-loader' + (env === 'production' ? '?minimize': ''))
        }]
    },
    plugins: [
        new ExtractWebpackPlugin('[name].css'),
        // new webpack.optimize.UglifyJsPlugin()
    ]
}