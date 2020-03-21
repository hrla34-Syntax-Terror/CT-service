var mongoose = require('mongoose');
var PRSchema = require('./schema.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/PRdata', {useNewUrlParser: true})
  .then(() => console.log('db connected'));

var Product = mongoose.model('Product', PRSchema); 

module.exports = Product;