const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  name: String,
  members: [],
  location: {
    lat: Number,
    lng: Number
  },
  genre: String,
  image: String,
  yearFormed: Number,
  yearBrokenUp: Number
});

module.exports = mongoose.model('Band', bandSchema);
