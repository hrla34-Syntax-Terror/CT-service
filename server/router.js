const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/')
  .get(controllers.get)
  .post(controllers.post)
module.exports = router;