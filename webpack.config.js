const path = require('path'),
    merge = require('webpack-merge'),
    webpack = require('webpack'),
    sass = require('./webpack/sass.js'),
    css = require('./webpack/css.js'),
    extractCSS = require('./webpack/extract.css'),
    uglifyJS = require('./webpack/uglify.js'),
    babel = require('./webpack/babel.js'),
    devServer = require('./webpack/devserver'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'lib')
}

// const common for development and production
const common = merge([ 
    {
        entry: {
            'index': PATHS.source + "/js/index.js"
        },
        output: {
            path: PATHS.build,
            filename: 'js/rng-sldr.js',
            libraryExport: "default",
            library: "rngSldr",
            libraryTarget: 'umd'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: PATHS.source + "/index.html"
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:9000/',
                notify: false
            })
        ]
    },
    babel()
]);

module.exports = function(env) {
    if(env === 'production'){
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if(env === 'development'){
        return merge([
            common,
            devServer(),
            sass(),
            css()
        ])
    }
}