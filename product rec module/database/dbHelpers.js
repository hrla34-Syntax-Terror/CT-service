const Product = require('./');

var dbHelpers = {
  get: (index) => {
    return Product.find({productID: index});
  },
  getOne: () => {
    return Product.find({productID: 0});
  }
}

module.exports = dbHelpers;