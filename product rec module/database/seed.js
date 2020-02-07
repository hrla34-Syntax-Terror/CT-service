const mongoose = require('mongoose');
const Product = require('./'); // ./ defaults to index
var imageDetails = require('./imageDetails.json');
const faker = require('faker');
let productRecList = [];


// produce 100 products to put in product recommendations list
for (var i = 0; i < 100; i++) {
  let productRec = {
    number: i,
    image: imageDetails[i].link,
    rating: Math.floor(Math.random() * 100),
    numReviews: Math.floor(Math.random() * 200),
    brand: imageDetails[i].brand,
    name: imageDetails[i].title,
    price: Math.floor(Math.random() * 500) + 0.95
  };
  if (productRec.numReviews === 0) {
    productRec.rating = 0;
  }
  productRecList.push(productRec);
}
/* produce 100 products with product details and randomly select 12 different products from product recommendations list 
 and store them as an array in key 'list' under each product, then seed each into database */
for (var i = 0; i < 100; i++) {
  let product = {
    productID: i,
    productName: productRecList[i].name,
    list: []
  };

  // if part of the product details exist in imageDetails file, get it and store in product details
  if (imageDetails[i].desc && imageDetails[i].features && imageDetails[i].specs && imageDetails[i].view && imageDetails[i].notes) {
    product.desc = imageDetails[i].desc;
    product.features = imageDetails[i].features;
    product.specs = imageDetails[i].specs;
    product.notes = imageDetails[i].notes;
    product.view = imageDetails[i].view;
  } else {
  // otherwise, randomly generate data
    product.desc = faker.hacker.phrase() + ' ' + faker.lorem.sentences(1);
    product.features = [];
    let numFeature = Math.floor(Math.random() * 15);
    for (var j = 0; j < numFeature; j++) {
      let feature = faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 1, max: 3 }));
      product.features.push(feature);
    }
    product.specs = {
      bestUse: ['Best Use', faker.hacker.ingverb()],
      materials: ['Material(s)', faker.hacker.noun()],
      dimensions: ['Dimensions', `${faker.random.number({ min: 1, max: 20 })} x ${faker.random.number({ min: 1, max: 20 })} x ${faker.random.number({ min: 1, max: 20 })} inches`],
      weight: ['Weight', `${faker.random.number({ min: 2, max: 20 })} ounces`]
    }
    product.view = `View all related products`;
  }
  // randomly select 12 products from productRecList to store in the key 'productRecList'
  let indexContainer = [];
  for (var k = 0; k < 12; k++) {
    let randomIndex = Math.floor(Math.random() * 100);
    if (!indexContainer.includes(randomIndex) && productRecList[randomIndex].name !== product.productName) {
      indexContainer.push(randomIndex);
      product.list.push(productRecList[randomIndex]);
    }
  }
  Product.create(product)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

