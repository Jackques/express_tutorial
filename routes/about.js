var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', 
               { 
        teacher: 'Bucky Roberts' 
               });
});

module.exports = router;

/* 
Jack: apparantly you cannot do mutliple extends in a jade file.
BUG: why does it not render the template header.jade whilst i do include it??
*/
