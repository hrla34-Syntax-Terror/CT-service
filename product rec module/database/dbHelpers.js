const Product = require('./');

var dbHelpers = {
  get: (id) => {
    return Product.find({productID: id});
  }
};

module.exports = dbHelpers;