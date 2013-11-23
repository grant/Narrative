
/**
 * Module dependencies.
 */

var express = require('express');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var http = require('http');
var https = require('https');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

// Other
app.configure(function(){
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});
/*
app.post('/api/narrative', function (req, res) {
	var body = req.param('body');

	var doc = {body: body};
	var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mynarrative';
	MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}
		var collection = db.collection('writings');
		collection.count(doc, function(err, count) {
			// if (!count) {
			// 	collection.insert(doc, function(err, docs) {
			// 		console.log('inserted');
			// 	});
			// } else {
			// 	console.log('already inserted');
			// }
		});
	});
});
*/
app.get('*', function (req, res) {
	res.send('hi');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});