'use strict';

//adding the Notes mongoose model
var Note = require('mongoose').model('Notes');

//create the new create controller method
exports.create = function(req, res, next) {
	//instancing the model
	var note = new Note(req.body);

	//save the instance
	note.save(function(err) {
		if(!err)
			res.json(note);
		else
			return next(err);
	});
};

exports.list = function(req, res, next) {
	Note.find(function(err,notes) {
		if(!err)
			res.json(notes);
		else
			return next(err);
	});
};