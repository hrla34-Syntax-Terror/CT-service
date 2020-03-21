var mongoose = require('mongoose');
var QASchema = require('./schema.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/QAdata', {useNewUrlParser: true})
  .then(() => console.log('db connected'));

var QApair = mongoose.model('QApair', QASchema);

module.exports = QApair;