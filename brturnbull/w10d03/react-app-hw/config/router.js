const router = require('express').Router();
const bands = require('../controllers/bands');

router.route('/bands')
  .get(bands.index)
  .post(bands.create);

router.route('/bands/:id')
  .get(bands.show)
  .put(bands.update)
  .delete(bands.destroy);

module.exports = router;
