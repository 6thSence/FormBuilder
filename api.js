const express = require('express');

const app = express();

app.get(['/', '/description'], (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

module.exports = app;