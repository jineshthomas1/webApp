var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Basic Info', 
  pageText:'Hello, Myself Jinesh Thomas\n I am a web developer passionate in deveveloping web techologies',
  var:'This about my page'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Portfolio'});
});


module.exports = router;
