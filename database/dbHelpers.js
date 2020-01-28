const QApair = require('./');

var dbHelpers = {
  get: () => {
    return QApair.find({});
  }
}

module.exports = dbHelpers;