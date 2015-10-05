var express = require('express');
var router = express.Router();

var User = require('../models/user');
var authKey = require('../config.js').authKey;
var jwt = require('jsonwebtoken')


router.post('/authenticate', function(req, res) {
  console.log(req.body.username, req.body.password)
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

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