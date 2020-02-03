const QApair = require('./');

var dbHelpers = {
  get: () => {
    return QApair.find({});
  },
  post: (newQuestion) => {
    return QApair.create(newQuestion);
  },
  postAns: (answer, num) => {
    return QApair.findOneAndUpdate(num,  { $push: { answers: answer  } })
  }
}

module.exports = dbHelpers;