const router = require('express').Router();
const burgers = require('../controllers/burgers');


//this is always the same as the home page is the home pageeeeee
router.get('/', (req, res) => res.render('home'));

// router.route the the link to the action name
router.route('/burgers')
  .get(burgers.index);

//bluebird allows dynamic URL;s - ID is interchngeble nd will be autofilled
router.route('/burgers/:id')

module.exports = router;
