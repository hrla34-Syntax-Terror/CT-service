const mongoose = require('mongoose');
const QASchema = require('./schema.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/QAdata', {useNewUrlParser: true})
  .then(() => console.log('db connected'));

const QApair = mongoose.model('QApair', QASchema);

module.exports = QApair;