var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
  res.render('Projects/error.hbs');
});

module.exports = router
