const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./config/router');

const {port, dbURI} = require('./config/environment');

mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, () => console.log(`Up and running on port ${port}`));
