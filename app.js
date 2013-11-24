
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
app.set('view engine', 'hbs');

// Other
app.configure(function(){
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.post('/api/narrative/view', function (req, res) {
	req.send('viewing narrative');
});

app.post('/api/narrative/add', function (req, res) {
	var author = req.param('author');
	var content = req.param('content');
	var promptId = req.param('promptId');

	var doc = {
		author: author,
		content: content,
		promptId: promptId,
		datetime: new Date(),
		viewCount: 0
	};

	var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mynarrative';
	MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}
		var collection = db.collection('narratives');
		collection.insert(doc, function(err, docs) {
			console.log('inserted narrative');
		});
	});
});

app.get('/narratives', function (req, res) {
	var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mynarrative';
	MongoClient.connect(uri, function (err, db) {
		var promptMap = {};
		db.collection('prompts').find().toArray(function(err, prompts) {
			for (var i in prompts) {
				var prompt = prompts[i];
				promptMap[prompt._id] = prompt;
			}
			db.collection('narratives').find().toArray(function(err, narratives) {
				for (var i in narratives) {
					var narrative = narratives[i];
					narrative.prompt = promptMap[narrative.promptId].prompt;
					narrative.imageURL = promptMap[narrative.promptId].imageURL;
				}
				console.log(narratives);
				var data = {narratives: narratives};
				res.render('narratives.hbs', data);
				db.close();
			});
		});
	});
});

app.get('/reading', function (req, res) {
	res.render('reading.hbs');
});

app.get('/', function (req, res) {
	res.render('home.hbs');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});