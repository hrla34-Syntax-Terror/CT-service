const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/:productID')
  .get(controllers.get)


module.exports = router;