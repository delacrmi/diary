'use strict'

var config = require('../config/config'),
	express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	compress = require('compression'),
	session = require('express-session'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	http = require('http'),
	flash = require('connect-flash'),
	passport = require('passport');

module.exports = function() {
	//creating the server variable
	var app = express();

	// uncomment after placing your favicon in /public
	if(process.env.NODE_ENV === 'development')
		app.use(logger('dev'));
	else if(process.env.NODE_ENV === 'production')
		app.use(compress());

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(methodOverride());
	app.use(require('stylus').middleware(path.join(__dirname, '../public')));
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));
	// view engine setup
	app.set('views',path.join(__dirname,'../app/views'));
	app.set('view engine', 'jade');
	app.set('port',process.env.PORT || 3000);

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	//adding the router module required
	require('../app/routers/index.server.router.js')(app);
	require('../app/routers/user/user.server.router.js')(app);

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	}

	//static files
	app.use(express.static(path.join(__dirname, '../public')));

	return app;

};