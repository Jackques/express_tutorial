var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Jack: the code below renders the template 'index.jade' for the homepage (root of our website)
    //Jack: The 'title' property of the object below can and is used as a variabele in the Jade Template (go look at index.jade)
  res.render('index', { title: 'Express' });
});

module.exports = router;
