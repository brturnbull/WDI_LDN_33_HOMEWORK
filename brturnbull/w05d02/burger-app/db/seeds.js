const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);

const Burger = require('../models/burgers');

Burger.collection.drop();

Burger.create([{
  meat: 'beef',
  bun: 'brioche',
  flavourLevel: 'extreme',
  price: 5.75,
  url: 'https://1.bp.blogspot.com/-qtAjZOyRmPA/WKmE1FkFsII/AAAAAAAAchY/RfhONw1tEzkdUXc2XOkrIFag9ZFnnsRMACLcB/s1600/Burger_%2526_beyond_Other_Side_Fried_Dirty_Harrys_Soho.jpg'
},{
  meat: 'chicken',
  bun: 'wholegrain',
  flavourLevel: 'bland AF',
  price: 4.99
}])
.then(burgers => console.log(`${burgers.length} burgers created!`));
.catch(err => console.log(err));
.finally(()=> mongoose.connection.close());
