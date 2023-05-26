var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/**
 * Index Routes
 */
// app.use('/', indexRouter); // We are manually using index routes instead of a router
if (process.env.NODE_ENV === "production") {
  // Static directory
  app.use(express.static(path.join(__dirname, 'public/dist')));

  // Handle SPA
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/dist', 'index.html'));
  });
} else {
  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
}

/* GET random number between 0 and 1. */
app.get('/random', function(req, res, next) {
  res.status(200).send(`${Math.floor(Math.random() * 100)}`);
});

/**
 * Users Routes
 */
app.use('/users', usersRouter);
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(cors({
  origin: 'http://localhost:3000'
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
