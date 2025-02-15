// Create web server for comment
// Load express module
var express = require('express');
var app = express();
// Load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load mysql module
var mysql = require('mysql');

// Create connection to mysql server
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'comment'
});

// Connect to mysql server
connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected to mysql server');
});

// Set up the server
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});