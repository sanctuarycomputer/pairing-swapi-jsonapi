const express = require('express');
const app     = express();
const Planets = require('./resources/Planets');

app.get('/planets/1', Planets.get);
module.exports = app;
