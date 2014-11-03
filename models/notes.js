var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

//mongoose.connect('mongodb://localhost/notes');

//var db = mongoose.connection;

var NoteSchema = new Schema({
    title: String,
    date: Date,
    body: String,
    task:{
    	title: String,
    	desc: String,
    	dateDo: Date,
    	done: Boolean 
    }
	});

module.exports = mongoose.model('Notes', NoteSchema);