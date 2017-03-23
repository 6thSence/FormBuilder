const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');

const app = require('./api.js');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/static', express.static(path.join(__dirname, 'static')));

module.exports = app;