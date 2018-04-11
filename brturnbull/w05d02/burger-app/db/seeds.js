const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/burgers';
mongoose.connect(databaseURI);

const Burger = require('../models/burgers');

Burger.collection.drop();

Burger.create([{
  meat: 'beef',
  bun: 'brioche',
  flavourLevel: 'extreme',
  price: 5.75
}], (err,burgers) => {
  if (err) console.log(err);
  if(burgers) console.log(`${burgers.length} burgers made!`);

  mongoose.connection.close();

});
