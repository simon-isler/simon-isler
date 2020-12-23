const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(cors({ origin: process.env.CORS_WHITELIST.split(',') || [] }));
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;
