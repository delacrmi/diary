var express = require('express');
var router = express.Router();
var Nodes = require('../models/notes.js')

router.get('/',function (req, res) {
	Nodes.find(function(err,notes) {
		if(err)
			console.error(err);
		else if(!notes)
			console.log('Notes empty');
		else
			console.log(notes);
	});
	res.render('notes',req.data);
});

router.post('/notes/new',function(req, res) {

});

module.exports = router;