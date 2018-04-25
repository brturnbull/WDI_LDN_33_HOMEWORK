const router = require('express').Router();
const things = require('../controllers/things');

router.route('/things')
  .get(things.index);
//   .post(things.create);
//
// router.route('/things/:id')
//   .get(things.show)
//   .delete(things.delete)
//   .put(things.update);

module.exports = router;
