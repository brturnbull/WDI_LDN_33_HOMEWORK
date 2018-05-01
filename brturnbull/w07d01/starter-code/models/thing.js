const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const thingSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  dangerRating: String,
  image: String,
  comments: [commentSchema]
});

module.exports = mongoose.model('Thing', thingSchema);
