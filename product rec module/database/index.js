const mongoose = require('mongoose');
const PRSchema = require('./schema.js');

mongoose.connect('mongodb://localhost/PRdata', {useNewUrlParser: true})
  .then(() => console.log('db connected'));

const Product = mongoose.model('Product', PRSchema); 

module.exports = Product;