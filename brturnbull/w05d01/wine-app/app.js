const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);


app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.render('pages/home'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/contact', (req, res) => res.render('pages/contact'));
app.get('/login', (req, res) => res.render('pages/login'));

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
