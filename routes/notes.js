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
		else{
			console.log(notes[1].task.date !== undefined);
			res.render('notes/notes',{notes: notes});
		}
	});
});

router.put('/',function (req, res){
	
});

//new notes
router.post('/notes/new',function(req, res) {
	console.log(req.body);
	var note = new Notes(req.body);
	note.save(function(err) {
		if(err)
			console.error(err);
		else
			console.log('Created');
	});
	console.log(note);
	res.json(note);
	res.end();
});
router.get('/notes/new',function(req, res) {
	res.render('notes/new',res.data);
});

module.exports = router;