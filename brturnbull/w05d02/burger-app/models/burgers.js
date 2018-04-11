const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
  meat: {type: String, required: true},
  bun: { type: String, required: true },
  flavourLevel: {type: String },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Burger', burgerSchema);
