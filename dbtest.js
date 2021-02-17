const db = require('./models');

db.VideoGame.create({
  title: 'Dark Souls 3',
  esrb: 'M',
  year: 2016,
  score: 10
})