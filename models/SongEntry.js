const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SongSchema = new Schema({

	song: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}

});

mongoose.model('Entries', SongSchema);