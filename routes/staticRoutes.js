var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', {title: 'hiii'});

});





router.get('/setup', function(req, res) {

  var user = new User({
    username: 'fkBoii',
    password: 'password',
    admin: true
  })

  user.save(function(err) {
    if (err) throw err;

    console.log('User ' + user.username + ' saved.')
    res.json({success: true});
  })

})



module.exports = router;
