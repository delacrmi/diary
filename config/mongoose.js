'use strict'

var config = require('./env/development'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db,function(err, res) {
	  if(err) {
	    console.log('ERROR: connecting to Database. ' + err);
	  } else {
	    console.log('Connected to Database');
		}
	}); 

	//adding the model
	require('../app/models/notes');
	require('../app/models/user.model');

	return db;
};