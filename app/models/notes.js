'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var NoteSchema = new Schema({
    title: String,
    date: Date,
    body: String,
    task: [{
            title: String,
            body: String,
            dateDo: Date,
            done: Boolean 
        }]
	});

mongoose.model('Notes', NoteSchema);