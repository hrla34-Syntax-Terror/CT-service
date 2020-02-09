const QApair = require('./');

var dbHelpers = {
  get: (id) => {
    return QApair.find({ productID: id }).sort({"QApairs.answers.yes": -1});
  },
  post: (newQuestion) => {
    return QApair.create(newQuestion);
  },
  postAns: (answer, num) => {
    return QApair.findOneAndUpdate(num,  { $push: { answers: answer  } })
  },
  sort: (id, category) => {
    if (category === 'newestQ') {
      return QApair.aggregate([{$match: {productID:1}},{$unwind:"$QApairs"},{$sort:{"QApairs.qDate":-1}},{$group:{_id:"$_id", productID:{"$first":"$productID"}, QApairs:{$push:"$QApairs"}}}])
      // console.log(QApair.find({ productID: id }).sort({'QApairs.qDate': -1}))
      // return QApair.find({ productID: id }).sort({'QApairs.qDate': -1})
    }
    if (category === 'newestAns') {
      return QApair.find({})
        .then((data) => {
          data.sort(function(a,b) {
            return new Date(b.answers[0].aDate) - new Date(a.answers[0].aDate);
          })
          return data;
        })
    }
    if (category === 'mostAns') {
      return QApair.find({}).sort({'ansCount': -1})
    }
    if (category === 'ansNeeded') {
      return QApair.find({}).sort({'ansCount': 1})
    }
    if (category === 'mostHelpful') {
      return QApair.find({}).sort({'answers.yes': -1});
    }
  }
}

module.exports = dbHelpers;