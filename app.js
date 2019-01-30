// Requires
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Vars
const app = express();
const router = express.Router();

// Use Public File 
// For CSS Refrencing
app.use(express.static(path.join(__dirname, '/public')));

// Functions Needed To Run Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect To MongoDB Using Mongoose
mongoose.connect("mongodb://localhost:27017/songentries", {
	useNewUrlParser: true
}).then(function () {
	console.log("MongoDB Connected");
}).catch(function (err) {
	console.log(err);
});

// Load In Song Entry Model
require('./models/SongEntry');
var SongEntry = mongoose.model('Entries');

// Routes
router.get('/', (req, res) => {
	res.redirect('/list');
});

router.get('/list', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

router.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/login.html'));
});

router.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/signup.html'));
});

router.get('/addtolist', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/listadd.html'));
});

// Get Data From Server
app.get('/getdata', function (req, res) {
	SongEntry.find({}).then(function (entries) {
		res.send({ entries: entries });
	});
});

// Post From Form On Index
app.post('/addtolist', function (req, res) {
	console.log(req.body);
	var newEntry = {
		song: req.body.song,
		author: req.body.author
	};
	
	new SongEntry(newEntry).save().then(function (entry) {
		res.redirect('/list');
	});
});

// Start Server
app.use('/', router);
app.listen(process.env.port || 3000);