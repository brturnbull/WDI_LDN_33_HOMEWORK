const Band = require('../models/band');

function bandsIndex(req, res, next) {
  Band
    .find()
    .exec()
    .then(bands => res.json(bands))
    .catch(next);
}

function bandsShow(req, res, next) {
  Band
    .findById(req.params.id)
    .exec()
    .then(band => res.json(band))
    .catch(next);
}

function bandsUpdate(req, res, next) {
  Band
    .findById(req.params.id)
    .exec()
    .then(band => {
      if(!band) return res.sendStatus(404);
      Object.assign(band, req.body);
      band.save();
      res.json(band);
    })
    .catch(next);
}

function bandsCreate(req, res, next) {
  Band
    .create(req.body)
    .then(band => res.status(201).json(band))
    .catch(next);
}

function bandsDelete(req, res, next) {
  Band
    .findById(req.params.id)
    .exec()
    .then(band => {
      if(!band) return res.sentStatus(404);
      return band.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}


module.exports = {
  index: bandsIndex,
  show: bandsShow,
  update: bandsUpdate,
  create: bandsCreate,
  destroy: bandsDelete
};
