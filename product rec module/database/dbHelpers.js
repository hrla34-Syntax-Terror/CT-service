const Product = require('./');
var random = require('mongoose-simple-random');

var dbHelpers = {
  get: () => {
    return Product.find({});
  }
}

module.exports = dbHelpers;