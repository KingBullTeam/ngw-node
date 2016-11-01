var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/users.js');

/* 获得所有 */
router.get('/', function(req, res, next) {
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* 增加列表 */
router.post('/', function(req, res, next) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* 修改列表 */
router.put('/:id', function(req, res, next) {
  Users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* 删除用户 */
router.delete('/:id', function(req, res, next) {
  Users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
