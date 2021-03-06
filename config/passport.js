'use strict'

var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function() {
	var User = mongoose.model('User');

	passport.serializeUser(function(user, done) {
		done(null,user.id);
	});

	passport.deserializeUser(function(id,done) {
		User.findOne({_id: id},'-passport -salt', function(err, user) {
			done(err, user);
		});
	});

	//adding the strategies files
	require('./strategies/local.js')();
	require('./strategies/google.js')();
};