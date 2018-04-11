const express = require('express');
const morgan  = require('morgan');
const quotes  = require('./data');
const app     = express();


console.log(quotes);
app.use(morgan('dev'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res)=>{
  res.render('bot', {quote: `${quotes[Math.floor(Math.random() * quotes.length)]}`});
  // res.render('bot', {})
});
app.get('/yes', (req, res)=>{
  res.render('bot', {quote: `${quotes[Math.floor(Math.random() * quotes.length)]}`});
  // res.render('bot', {})
});
app.get('/no', (req, res)=>{
  // res.render('bot', {})
});

app.listen(3000, () => console.log('Express is up and running'));
