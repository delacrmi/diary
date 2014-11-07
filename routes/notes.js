var express = require('express');
var router = express.Router();
var Nodes = require('../models/notes.js')

//notes index
router.get('/',function (req, res) {
	Nodes.find(function(err,notes) {
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
	var note = new Nodes();
	note.title = 'Prueba'
	note.save(function(err) {
		if(err)
			console.error(err);
		else
			console.log('Created');
	});
});
router.get('/notes/new',function(req, res) {
	res.render('notes/new',res.data);
});

module.exports = router;