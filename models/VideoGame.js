const mongoose = require('mongoose');

const videoGameSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  esrb: String,
  year: Number,
  score: Number
}, {
  timestamps: true
});

const VideoGame = mongoose.model('VideoGame', videoGameSchema);

module.exports = VideoGame;