const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

const port = process.env.APP_PORT || 8081;
app.listen(port);
