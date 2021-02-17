const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/diyApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.once('open', () => console.log(`connected to mongo at ${db.host}:${db.port}`));
db.on('error', (err) => console.log(`db error: \n${err}`));

module.exports.VideoGame = require('./VideoGame')