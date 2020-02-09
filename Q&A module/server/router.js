const router = require('express').Router();
const controllers = require('./controllers.js');



router
  .route('/sort')
  .post(controllers.sort)  
  
router
  .route('/:number')
  .post(controllers.postAns)

router
  .route('/:productID')
  .get(controllers.get)
  .post(controllers.post)

module.exports = router;