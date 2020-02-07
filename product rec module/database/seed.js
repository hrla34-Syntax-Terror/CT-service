const mongoose = require('mongoose');
const Product = require('./'); // ./ defaults to index
var imageDetails = require('./imageDetails.json');
const faker = require('faker');
let products = [];


// produce 100 product objects, then push each into products array
for (var i = 0; i < 100; i++) {
  let product = {};
  product.number = i;
  product.image = imageDetails[i].link;
  product.rating = Math.floor(Math.random() * 100);
  product.numReviews = Math.floor(Math.random() * 200);
  product.brand = imageDetails[i].brand;
  product.name = imageDetails[i].title;
  product.price = Math.floor(Math.random() * 500) + 0.95;
  if (imageDetails[i].desc && imageDetails[i].features && imageDetails[i].specs && imageDetails[i].view) {
    product.desc = imageDetails[i].desc;
    product.features = imageDetails[i].features;
    product.specs = imageDetails[i].specs;
    product.view = imageDetails[i].view;
  } else {
    product.desc = faker.hacker.phrase() + ' ' + faker.lorem.sentences(1);
    product.features = [];
    let numFeature = Math.floor(Math.random() * 15);
    for (var j = 0; j < numFeature.length; j++) {
      let feature = faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 }));
      product.features.push(feature);
    }
    product.specs = {
      "Best Use": faker.hacker.ingverb(),
      material: faker.hacker.noun(),
      dimensions: `${faker.random.number({ min: 1, max: 20 })} x ${faker.random.number({ min: 1, max: 20 })} x ${faker.random.number({ min: 1, max: 20 })} inches`,
      weight: `${faker.random.number({ min: 2, max: 20 })} ounces`
    }
    product.view = `View all ${product.brand} products`;
  }
  if (product.numReviews === 0) {
    product.rating = 0;
  }
  products.push(product);
}


// seed the data with 12 products
var seedData = () => {
  Product.create(products.slice(0, 12))
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

