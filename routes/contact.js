const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.render('contact', { introContact: 'You can reach me at given social media accounts, email and phone number. Happy to be connect with you!',
  phone:'Phone Number: +1-4379295262',
  email:'e-mail: jthomas0024@conestogac.on.ca',
  address:'Address: 346 Dale Cresent, Waterloo, ON N2J3Y3'


  });
});

module.exports = router