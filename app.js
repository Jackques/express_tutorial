var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//Jack: logger is used for logging out things to the terminal
var logger = require('morgan');
//Jack: for using cookies
var cookieParser = require('cookie-parser');
//Jack: for using templates (pretty much)
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//Jack: creates an variabele to viewlogic code stored in the file below (and this file also points to where the template is which it should use)
var about = require('./routes/about');

var app = express();

app.locals.basedir = path.join(__dirname, 'views');

// Jack: the local variabele below is sortoff a global object, thus the favText variabele can be used anywhere in the app. (see it in action in the header template!).
// Jack: NPM server restart to see the effect!
app.locals.favtext = "This is my favourite text!";
app.locals.coolband = "Sineria";

// Jack: Import from current directory, thus using a single point here
app.locals.personalinfo = require('./data.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Jack: Below is basic configuration for the website, like where to find the favicon, to use urlencoding and whatnot
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Jack: Below we set the pages to which object (route) they should use
app.use('/', index);
app.use('/users', users);

//Jack: Actually creates the about page and links the variabele created above to it
app.use('/about', about);


//Jack: Below are errorhandlers for development
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
