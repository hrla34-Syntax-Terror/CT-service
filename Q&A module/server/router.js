const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/sort')
  .post(controllers.sort);
  
router
  .route('/:productID')
  .get(controllers.get)
  .post(controllers.postQ)
  .put(controllers.postAns);

module.exports = router;