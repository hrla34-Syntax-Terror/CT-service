const mongoose = require('mongoose');
const QApair = require('./'); // ./ defaults to index
// var example = require('./example.json');
var questions = require('./questions.js'); // real data from web
var answers = require('./answers.js'); // real data from web
const faker = require('faker');
let products = [];


// for each of the 100 products
for (var i = 0; i < 100; i++) {
  // set product ID for each and QA pairs
  let product = {
    productID: i,
    QApairs: [] 
  };
  // randomize the quantity of QA pairs for each product
  let QApairsQty = faker.random.number({ min: 4, max: 10 });
  // randomly generate qa pairs until the desired quantity is reached
  for (var j = 0; j < QApairsQty; j++) {
    // random questions are generated below
    var qa = {
      number: j,
      qNickname: faker.name.firstName(),
      question: faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 2, max: 6 })),
      qDate: faker.date.between('2017-01-01', '2020-02-02'),
      qEmail: faker.internet.email(),
      qLocation: faker.address.city() + ", " + faker.address.state(),
      newQ: false,
      ansCount: 1,
      answers: []
    };
    // for each randomly generated question, the number of answers should be a random number from 1 to 5
    let ansQty = faker.random.number({ min: 1, max: 3 });
    qa.ansCount = ansQty;
    // and each question should be paired with the desired number of answers
    for (var k = 0; k < ansQty; k++) {
      qa.answers.push({
        aNickname: faker.name.firstName(),
        answer: faker.hacker.phrase() + ' ' + faker.lorem.sentences(faker.random.number({ min: 2, max: 6 })),
        aDate: faker.date.between('2017-01-01', '2020-02-02'),
        aEmail: faker.internet.email(),
        aLocation: faker.address.city() + ", " + faker.address.state(),
        yes: faker.random.number({ min: 0, max: 20 }),
        no: faker.random.number({ min: 0, max: 10 }),
        inappropriate: faker.random.arrayElement(["yes","no"]),
        newAns: false
      });
    }
    // sort the answers by having the most recent answer at the beginning of array
    qa.answers.sort(function(a,b) {
      return new Date(b.aDate) - new Date(a.aDate);
    })
    qa.answers.sort(function(a,b) {
      return b.yes - a.yes;
    })
    product.QApairs.push(qa);
  }
  products.push(product);
}

// generate a random index and seed that index in the products array to database
let randomIndex = faker.random.number({ min: 1, max: 100 });
let randomProduct = products[randomIndex].QApairs;
var seedData = () => {
  QApair.create(randomProduct)
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

