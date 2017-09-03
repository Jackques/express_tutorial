var express = require('express');
var router = express.Router();


// Jack: getting data from one directory above
var users = require('../users.json');

// Jack: The first param in the render function determines which Jade template is being used.

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', 
               { 
                teacher: 'Bucky Roberts',
                users: users.userslist
               }
              );
});

module.exports = router;