'use strict';
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');

require('dotenv/config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes.routes);

module.exports = app;
