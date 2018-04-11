const express        = require('express');
const app            = express();
const expressLayouts = require('express-ejs-layouts');
// const morgan         = require('morgan');
const PORT           = process.env.PORT || 3000;
const mongoose       = require('mongoose');

const Burger = require('./models/burgers');

const databaseURL = 'mongodb://localhost/burgers';
mongoose.connect(databaseURL);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.render('pages/home'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/login', (req, res) => res.render('pages/login'));

app.get('/burgs', (req, res) => {
  Burger.find({}, (err, burgers) => {
    if (err) return console.log(err);
    res.render('pages/burgs', {burgers});
  });
});

app.listen(PORT, ()=>  console.log(`Up and running on port ${PORT}`));
