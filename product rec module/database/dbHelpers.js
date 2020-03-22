const Product = require('./');

const dbHelpers = {
  get: (id) => {
    return Product.find({productID: id});
  }
};

module.exports = dbHelpers;