var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  greeting:'Hi,',
  name:'I am Jinesh',
  position: 'Web Developer',
  intro: 'An enthusiastic web developer possesses skills in all the latest web development technologies and looks forward to contributing to team success through dedication, hard work, and efficient management skills. Specialized in Mobile Solutions Development from Conestoga college, having detailed knowledge regarding Android and ios platforms. I also have experience in all the stages of software development and five years of experience in the field of web development.'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Portfolio'});
});


module.exports = router;
