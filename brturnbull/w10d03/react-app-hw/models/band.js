const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  members: [],
  image: String,
  location: {
    lat: Number,
    lng: Number
  },
  genre: { type: String, required: 'This field is required' },
  yearFormed: Number,
  yearBrokenUp: Number
});

module.exports = mongoose.model('Band', bandSchema);
