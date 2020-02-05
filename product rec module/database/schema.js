var mongoose = require('mongoose');

var PRSchema = new mongoose.Schema({
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
});

module.exports = PRSchema;
