var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
  res.render('/error.hbs');
});

module.exports = router
