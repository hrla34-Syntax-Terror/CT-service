const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const port = 8090;
const controllers = require('./controllers.js');
const dbHelpers = require('../database/dbHelpers.js');
const QApair = require('../database/schema.js');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', router);

app.get('/api', (req, res) => {
  dbHelpers.getOne()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
})

// for (let i = 0; i < 100; i++) {
//   app.get(`/api/${i}`, (req, res) => {
//     dbHelpers.get(i)
//       .then((data) => {
//         res.status(200).send(data);
//       })
//       .catch((err) => {
//         res.status(400).send(err);
//       })
//   });
// }




app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

