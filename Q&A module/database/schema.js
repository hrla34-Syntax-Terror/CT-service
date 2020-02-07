var mongoose = require('mongoose');

var QASchema = new mongoose.Schema({
  productID:  { type: Number, unique: true, required: true, dropDups: true },
  QApairs: [{
    number: { type: Number, unique: true, required: true, dropDups: true },
    qNickname: { type: String, unique: true, required: true, dropDups: true },
    question: { type: String, unique: true, required: true, dropDups: true },
    qDate: { type: Date },
    qEmail: { type: String, unique: true, required: true, dropDups: true },
    qLocation: { type: String },
    newQ: String,
    ansCount: Number,
    answers: [ 
      {
        aNickname: String,
        answer: String,
        aDate: Date,
        aEmail: String,
        aLocation: String,
        yes: Number, 
        no: Number,
        inappropriate: String,
        newAns: String
      }
    ]
  }]
});

module.exports = QASchema;
