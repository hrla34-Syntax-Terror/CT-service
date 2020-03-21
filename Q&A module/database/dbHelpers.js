const QApair = require('./');

const sortByHelpful = (data) => {
  for (var i = 0; i < data[0].QApairs.length; i++) {
    data[0].QApairs[i].answers.sort(function(a, b) {
      return b.yes - a.yes;
    });
  }
  data[0].QApairs.sort(function(a, b) {
    return b.answers[0].yes - a.answers[0].yes;
  });
  return data;
};

const sortByNewestAns = (data) => {
  for (var i = 0; i < data[0].QApairs.length; i++) {
    data[0].QApairs[i].answers.sort(function(a, b) {
      return new Date(b.aDate) - new Date(a.aDate);
    });
  }
  data[0].QApairs.sort(function(a, b) {
    return new Date(b.answers[0].aDate) - new Date(a.answers[0].aDate);
  });
  return data;
};

const dbHelpers = {
  get: (id) => {
    return QApair.find({ productID: id })
      .then((data) => {
        return sortByHelpful(data);
      });
  },
  postQ: (id, newQuestion) => {
    return QApair.findOneAndUpdate({ productID: id }, {$push: {QApairs: newQuestion}});
  },
  postAns: (id, num, newAns) => {
    return QApair.findOneAndUpdate({ 'productID': id, 'QApairs.number': num }, {$push: {'QApairs.$.answers': newAns}});
  },
  sort: (id, category) => {
    if (category === 'newestQ') {
      return QApair.aggregate([{
        $match: {productID: id}},
        {$unwind: '$QApairs'},
        {$sort: {'QApairs.qDate': -1}},
        {$group: {_id: '$_id', productID: {'$first': '$productID'}, QApairs: {$push: '$QApairs'}}}
      ]);
    }
    if (category === 'newestAns') {
      return QApair.find({ productID:id })
        .then((data) => {
          return sortByNewestAns(data);
        });
    }
    if (category === 'mostAns') {
      return QApair.aggregate([{
        $match: {productID: id}},
        {$unwind: '$QApairs'},
        {$sort: {'QApairs.ansCount': -1}},
        {$group: {_id:'$_id', productID: {'$first': '$productID'}, QApairs: {$push: '$QApairs'}}}
      ]);
    }
    if (category === 'ansNeeded') {
      return QApair.aggregate([{
        $match: {productID: id}},
        {$unwind: '$QApairs'},
        {$sort: {'QApairs.ansCount': 1}},
        {$group: {_id:'$_id', productID: {'$first': '$productID'}, QApairs: {$push: '$QApairs'}}}
      ]);
    }
    if (category === 'mostHelpful') {
      return QApair.find({ productID: id })
        .then((data) => {
          return sortByHelpful(data);
        });
    }
  }
};

module.exports = dbHelpers;