var express = require('express');
var router = express.Router();
var Notes = require('../models/notes.js')

//notes index
router.get('/',function (req, res) {
	Notes.find(function(err,notes) {
		if(err)
			console.error(err);
		else if(notes.length === 0)
			console.log('Notes empty');
		else
			res.render('notes/notes',{notes: notes});
	});
});

//new notes
router.post('/notes/new',function(req, res) {
	console.log(req.body);
	res.end();
	//var note = new Notes(req.body);
	/*note.save(function(err) {
		if(err)
			console.error(err);
		else
			console.log('Created');
	});*/
});
router.get('/notes/new',function(req, res) {
	res.render('notes/new',res.data);
});

module.exports = router;