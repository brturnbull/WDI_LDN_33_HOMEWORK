const express        = require('express');
const app            = express();
const expressLayouts = require('express-ejs-layouts');
// const morgan         = require('morgan');
const {port dbURI}   = require('./config/environment');
//
const mongoose       = require('mongoose');
const promises       = require('bluebird');
const router = require('./config/routes');

const Burger = require('./models/burgers');

const databaseURL = 'mongodb://localhost/burgers';
mongoose.connect(databaseURL);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(router);


app.listen(PORT, ()=>  console.log(`Up and running on port ${PORT}`));
