const Product = require('./');

var dbHelpers = {
  get: () => {
    return Product.find({});
  }
}

module.exports = dbHelpers;