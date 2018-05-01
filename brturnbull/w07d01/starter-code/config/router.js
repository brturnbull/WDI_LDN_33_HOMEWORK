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

router.post('/things/:id/comments', things.commentCreate);
router.delete('/things/:id/comments/:commentId', things.commentDelete);
//things.commentCreate and things.commentDelete was exported from the controller 



module.exports = router;
