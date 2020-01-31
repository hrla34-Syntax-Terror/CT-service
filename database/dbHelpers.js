const QApair = require('./');

var dbHelpers = {
  get: () => {
    return QApair.find({});
  },
  post: (newQuestion) => {
    return QApair.create(newQuestion);
  }
}

module.exports = dbHelpers;