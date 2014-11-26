'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db =  mongoose();
var app = express();
var passport = passport();

app.listen(app.get('port'));

module.exports = app;

console.log('running in http://localhost:'+app.get('port')+'/');