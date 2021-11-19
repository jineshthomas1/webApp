const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.render('views/error.hbs');
});

module.exports = router
