const dbHelpers = require('../database/dbHelpers.js');
const QApair = require('../database/schema.js');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var controllers = {
  get: (req, res) => {
    dbHelpers.get()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
  post: (req, res) => {
    dbHelpers.post(req.body)
      .then(() => {
        res.status(201).send('posted')
      })
      .catch(err => {
        res.status(401).send(err)
      });
  }
};

module.exports = controllers;