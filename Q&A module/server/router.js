const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/')
  .get(controllers.get)
  .post(controllers.post)

router
  .route('/sort')
  .post(controllers.sort)  
  
router
  .route('/:number')
  .post(controllers.postAns)


module.exports = router;