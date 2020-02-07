const Product = require('./');
var random = require('mongoose-simple-random');

var dbHelpers = {
  get: (index) => {
    return Product.find({productID: index});
  }
}

module.exports = dbHelpers;