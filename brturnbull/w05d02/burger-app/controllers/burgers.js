const Burger = require('../models/burgers');

function burgersIndex(req,res) {
  Burger
    .find()
    .exec()
    .then(burgers => {
      res.render('burgers/index', {burgers});
    });
}

module.exports = {
  index: burgersIndex
};
