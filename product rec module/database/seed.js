const mongoose = require('mongoose');
const Product = require('./'); // ./ defaults to index
// var example = require('./example.json');
const faker = require('faker');
let products = [];


// for each of the 100 products

var seedData = () => {
  Product.create(randomProduct)
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

