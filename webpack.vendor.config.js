const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.Node_ENV.trim();

module.exports = {
    mode: mode,
    entry: {
        vendor: ['react', 'react-dom', 'lodash']
    },
    output: {
        path: path.join(__dirname, './dll'),
        filename: '[name]_[hash].js',
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name]_[hash]",
            path: path.join(__dirname, "./dll/manifest.json"),
        }),
        new CleanWebpackPlugin(['dll'])
    ]
}
