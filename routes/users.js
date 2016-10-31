var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/users.js');
/* GET /users listing. */
router.get('/', function(req, res, next) {
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/id */
router.get('/:id', function(req, res, next) {
  Users.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  Users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Users/:id */
router.delete('/:id', function(req, res, next) {
  Users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
