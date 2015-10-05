var express = require('express');
var router = express.Router();

var User = require('../models/user');
var userService = require('../services/userService');

var authKey = require('../config.js').authKey;
var jwt = require('jsonwebtoken');




router.post('/addUser', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  userService.findUser(username, function(err, user) {
    if (err) res.json({success: false, message: 'Internal Error 2.2'});

    if (user) {
      res.json({success: false, message: 'User already found'});
    } else {
      userService.addUser(username, password, function(err, user) {
        if (err) res.json({success: false, message: err.message});
        if (user) res.redirect('/', 301);
      });
    }
  });

})


router.post('/authenticate', function(req, res) {
  console.log(req.body.username, req.body.password)
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) console.error(err);

    if (!user) {
      res.json({success: false, message: 'Autentication failed. User not found'})
    } else if (user) {
      if (user.password !== req.body.password) {
        res.json({success: false, message: 'Authentication failed. Wrong password'})
      } else {
        var token = jwt.sign(user, authKey, {
          expiresIn: "24 hours"
        });
        res.json({
          success: true,
          token: token
        });

      }
    }

  });
})


router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, authKey, function(err, decoded) {
      if (err) {
        return res.json({success: false, message: 'Failed to authenticate token.'});
      } else {
          req.decoded = decoded;
          next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
})

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  })
})

module.exports = router;