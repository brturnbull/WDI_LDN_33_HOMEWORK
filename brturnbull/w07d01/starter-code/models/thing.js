const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  dangerRating: String,
  image: String
});

module.exports = mongoose.model('Thing', thingSchema);
