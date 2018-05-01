const Thing = require('../models/thing');

function thingsIndex(req, res, next) {
  Thing
    .find()
    .exec()
    .then(things => res.json(things))
    .catch(next);
}

function thingsShow(req, res, next){
  Thing
    .findById(req.params.id)
    .exec()
    .then(thing => res.json(thing))
    .catch(next);
}

function thingsCreate(req, res, next){
  Thing
    .create(req.body)
    .then(thing => res.status(201).json(thing))
    .catch(next);
}

function thingsUpdate(req, res, next){
  Thing
    .findById(req.params.id)
    .then(thing => Object.assign(thing, req.body))
    .then(thing => thing.save())
    .then(thing => res.json(thing))
    .catch(next);
}

function thingsDelete(req, res, next){
  Thing
    .findById(req.params.id)
    .then(thing => thing.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function thingsCommentCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  Thing.findById(req.params.id)
    .then(thing => {
      thing.comments.push(req.body);
      return thing.save();
    })
    .then(thing => res.json(thing))
    .catch(next);
}

function thingsCommentDelete(req, res, next) {
  Thing.findById(req.params.id)
    .then(thing => {
      const comment = thing.comments.id(req.params.commentId);
      comment.remove();
      return thing.save();
    })
    .then(thing => res.json(thing))
    .catch(next);
}

module.exports = {
  index: thingsIndex,
  show: thingsShow,
  create: thingsCreate,
  update: thingsUpdate,
  delete: thingsDelete,
  commentCreate: thingsCommentCreate,
  commentDelete: thingsCommentDelete
};
