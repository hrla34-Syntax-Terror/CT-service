var mongoose = require('mongoose');

var PRSchema = new mongoose.Schema({
  productID: { type: Number, unique: true, required: true, dropDups: true },
  productName: { type: String, required: true},
  desc: { type: String },
  features: [{ type: String }],
  specs: {
    bestUse: [{ type: String }],
    uvProtection: [{ type: String }],
    lightTransmission: [{ type: String }],
    lensShape: [{ type: String }],
    interchangeableLenses: [{ type: String }],
    additionalLensesIncluded: [{ type: String }],
    fits: [{ type: String }],
    materials: [{ type: String }],
    dimensions: [{ type: String }],
    weight: [{ type: String }]
  },
  notes: String,
  view: String,
  list: [{
    number: { type: Number, unique: true, required: true, dropDups: true },
    image: { type: String, required: true},
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
  }]
});

module.exports = PRSchema;
