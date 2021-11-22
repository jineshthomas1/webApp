const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('Projects/index', {projectTitle1:'ABC Orthopedics',
    projectOneDesc:'ABC Orthopedic Hospital is the centre of excellence for delivering world class orthopedic care affordable to the people of Kerala. The website has made in wordpress with a timeframe of 2 weeks.',
    projectTitle2:'gadielprefab',
    projectTwoDesc:'GADIEL PRE-FAB DESIGNS & CONTRACTING LLP is a construction company in Kochi,India providing Eco-Friendly homes to all for residential as well as for commercial purpose with the power of PRE-FAB construction technology. The website is built in wordpress.',
    projectTitle3:'dubaihairtransplantexpert',
    projectThreeDesc:'Dubai hair transplant experts commited in bringing the best hair care all over UAE. The website of dubai hair transplant is developed in wordpress in a time period of seven days.',
    projectTitle4:'madeinmonkey',
    projectFourDesc:'madeinmonkey is a e-commerce company located in kerala, India aimed to sell custom made apparels and accessories in cheaper prices. The website is made in wordpress with a time frame of 20 days'


});
});

module.exports = router