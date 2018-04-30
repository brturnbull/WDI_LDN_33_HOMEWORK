const router = require('express').Router();
const things = require('../controllers/things');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');
//

router.route('/things')
  .get(things.index)
  .post(things.create);

router.route('/things/:id')
  .get(things.show)
  .delete(things.delete)
  .put(things.update);
//
router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
