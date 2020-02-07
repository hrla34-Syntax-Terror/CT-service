const Product = require('./');
var random = require('mongoose-simple-random');

var dbHelpers = {
  get: (index) => {
    return Product.find({productID: index});
  },
  getOne: () => {
    return Product.find({productID: 0});
  }
}

module.exports = dbHelpers;