const express = require('express');
const router = express.Router();
const routes = require('./routes');

app.use(routes);

module.exports = app;
