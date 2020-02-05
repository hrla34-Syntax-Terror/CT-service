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
    console.log(req.body)
    dbHelpers.post(req.body)
      .then(() => {
        res.status(201).send('posted question')
      })
      .catch(err => {
        res.status(401).send(err)
      });
  },
  postAns: (req, res) => {
    dbHelpers.postAns(req.body, req.params)
      .then(() => {
        res.status(201).send('posted question')
      })
      .catch(err => {
        res.status(401).send(err)
      });
  },
  sort: (req, res) => {
    dbHelpers.sort(req.body)
      .then((data) => {
        res.status(202).send(data)
      })
      .catch(err => {
        res.status(402).send(err)
      });
  }
};

module.exports = controllers;