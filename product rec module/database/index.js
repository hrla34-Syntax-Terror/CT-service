var mongoose = require('mongoose');
var PRSchema = require('./schema.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/PRdata', {useNewUrlParser: true})
  .then(() => console.log('db connected'))


// define the model
var Product = mongoose.model('Product', PRSchema); // this is basically what you're naming your table

module.exports = Product;