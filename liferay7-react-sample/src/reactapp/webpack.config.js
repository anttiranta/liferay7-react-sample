const path = require('path');

const srcPath = path.resolve(__dirname, 'js');
const stylesPath = path.resolve(__dirname, 'css');
const buildFolder = path.resolve(__dirname, '../main/resources/META-INF/resources/dist');
const buildName = 'liferay7-react-sample-bundle.js';

module.exports = {
    entry: [
        'core-js/features/set',
        'core-js/web/url',
        'core-js/web/url-search-params',
        'core-js/features/object',
        'core-js/features/promise',
        'whatwg-fetch',
        srcPath + '/index.es.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: buildFolder,
        filename: buildName,
        publicPath: '/o/liferay7-react-sample',
    },
    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 1000000,
        hints: false,
    },
    mode: 'production',
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                    },
                },
            },
            {
                test: /\/.*\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: stylesPath
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
                include: /node_modules/
            },
            {
                exclude: /node_modules/,
                test: /\.svg$/,
                use: ['svg-url-loader']
            }
        ]
    }
};