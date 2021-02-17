const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  db.VideoGame.find()
  .then(games => {
    res.send(games)
  }).catch(err => res.send(EvalError))
});

app.post('/', (req, res) => {
  console.log('post route hit');
  db.VideoGame.create(req.body)
  .then(game => {
    res.status(201).send(game)
  })
  .catch(err => {
    res.send(err)
  })
});

app.get('/:id', (req, res) => {
  db.VideoGame.findById({
    _id: req.params.id
  })
  .then(game => {
    game? res.send(game) : res.send({message: 'Result not found'})
  })
})

app.put('/:id', (req, res) => {
  console.log('put route hit');
  db.VideoGame.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {new: true})
  .then(game => {
    res.send(game)
  })
  .catch(err => {
    res.send(err)
  })
})

app.delete('/:id', (req, res) => {
  db.VideoGame.findOneAndDelete(req.params.id)
  .then(() => res.send('Entry Deleted Successfully'))
  .catch(err => res.send(err))
})

app.listen(3000, () => console.log('running on port 3000'))