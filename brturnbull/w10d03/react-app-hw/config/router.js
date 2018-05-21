const router = require('express').Router();
const bands = require('../controllers/bands');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/bands')
  .get(bands.index)
  .post(secureRoute, bands.create);

router.route('/bands/:id')
  .get(bands.show)
  .put(secureRoute, bands.update)
  .delete(secureRoute, bands.destroy);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
