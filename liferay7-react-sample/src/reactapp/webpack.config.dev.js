const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = require('./webpack.config');

const {defineServerResponses} = require('./dev/fakeServerUtilities');

const outputPath = path.resolve(__dirname, './dev/public');

// eslint-disable-next-line no-undef
module.exports = {
    ...config,
    devServer: {
        before(_) {
            defineServerResponses(8080);
        },
        compress: false,
        contentBase: './dev/public',
        historyApiFallback: true,
        hot: true,
        open: true,
        openPage: 'index.html',
        port: 9000,
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    optimization: {
        minimize: false,
    },
    output: {
        path: outputPath,
        filename: config.output.filename,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, './dev/public/index.html'),
        }),
    ],
};
