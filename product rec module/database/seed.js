const mongoose = require('mongoose');
const Product = require('./'); // ./ defaults to index
var imageDetails = require('./imageDetails.json');
const faker = require('faker');
let products = [];


// for each of the 100 products

for (var i = 0; i < 100; i++) {
  let product = {};
  product.number = i;
  product.image = imageDetails[i].link;
  product.rating = Math.floor(Math.random() * 100);
  product.numReviews = Math.floor(Math.random() * 300);
  product.brand = imageDetails[i].brand;
  product.name = imageDetails[i].title;
  product.price = Math.floor(Math.random() * 1000) + 0.95;
  products.push(product);
}

var seedData = () => {
  Product.create(products)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

seedData();
// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

