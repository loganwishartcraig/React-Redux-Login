var mongoose = require('mongoose');
var User = require('../models/user');


exports.findUser = function(username, next) {

   User.findOne({
    username: username
   }, function(err, user) {
    if (err) return next(err);
    if (user) return next(undefined, user);
    return next();
   })


}

exports.addUser = function(username, password, next) {
  
  if (password === '' || password === undefined || password === null) {
    return next({message: 'No Password Provided'});
  }

  var userToAdd = new User({
    username: username,
    password: password,
    isAdmin: false
  });

  userToAdd.save(function(err, user) {
    if (err) return next({message: err});
    if (user) return next(undefined, user);
  });

}