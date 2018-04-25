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

module.exports = {
  index: thingsIndex,
  show: thingsShow,
  create: thingsCreate,
  update: thingsUpdate,
  delete: thingsDelete
};
