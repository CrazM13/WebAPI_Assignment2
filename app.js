// Requires
const express = require("express");
const path = require("path");

// Vars
const app = express();
const router = express.Router();

// Use Public File 
// For CSS Refrencing
app.use(express.static(path.join(__dirname, '/public')));

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

// Start Server
app.use('/', router);
app.listen(process.env.port || 3000);