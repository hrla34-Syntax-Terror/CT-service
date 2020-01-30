var mongoose = require('mongoose');

var QASchema = new mongoose.Schema({
  number: { type: Number, unique: true, required: true, dropDups: true },
  qNickname: { type: String, unique: true, required: true, dropDups: true },
  question: { type: String, unique: true, required: true, dropDups: true },
	qDate: { type: String, unique: true, required: true, dropDups: true },
  qEmail: { type: String, unique: true, required: true, dropDups: true },
  qLocation: { type: String, unique: true, required: true, dropDups: true },
	answers: [ 
    {
			aNickname: String,
			answer: String,
			aDate: String,
			aEmail: String,
      aLocation: String,
      yes: Number, 
      no: Number,
      inappropriate: String
    }
  ]
});

module.exports = QASchema;
