const QApair = require('./');

var dbHelpers = {
  get: () => {
    return QApair.find({}).sort({'answers.yes': -1});
  },
  post: (newQuestion) => {
    return QApair.create(newQuestion);
  },
  postAns: (answer, num) => {
    return QApair.findOneAndUpdate(num,  { $push: { answers: answer  } })
  },
  sort: (category) => {
    if (category.sort === 'newestQ') {
      return QApair.find({}).sort({'qDate': -1})
    }
    if (category.sort === 'newestAns') {
      return QApair.aggregate([{$match: {'answers.newAns': 'false'}}, {$sort: {'answers.aData': 1}}])
    }
    if (category.sort === 'mostAns') {
      return QApair.find({}).sort({'ansCount': -1})
    }
    if (category.sort === 'ansNeeded') {
      return QApair.find({}).sort({'ansCount': 1})
    }
    if (category.sort === 'mostHelpful') {
      return QApair.find({}).sort({'answers.yes': -1});
    }
  }
}

module.exports = dbHelpers;