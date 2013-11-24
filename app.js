
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
	var title = req.param('title');

	var doc = {
		title: title,
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
			res.send('Good');
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
			db.collection('narratives').find().sort({datetime: -1}).toArray(function(err, narratives) {
				for (var i in narratives) {
					var narrative = narratives[i];
					if (promptMap[narrative.promptId]) {
						narrative.prompt = promptMap[narrative.promptId].prompt;
						narrative.imageURL = promptMap[narrative.promptId].imageURL;
						narrative.thumbURL = promptMap[narrative.promptId].imageURL;
						narrative.date = getFormattedDate(narrative.datetime);
					} else {
						delete narrative;
					}
				}
				var data = {narratives: narratives};
				res.render('narratives.hbs', data);
			});
		});
	});
});

app.get('/', function (req, res) {
	var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mynarrative';
	MongoClient.connect(uri, function (err, db) {
		var promptMap = {};
		db.collection('prompts').find().toArray(function(err, prompts) {
			var randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
			var data = {prompt: randomPrompt};
			res.render('home.hbs', randomPrompt);
		});
	});

	//res.render('home.hbs');
});

app.get('/about', function (req, res) {
	res.render('about.hbs');
});

app.get('/read/:id', function (req, res) {
	var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mynarrative';
	MongoClient.connect(uri, function (err, db) {
		db.collection('narratives').find({promptId: req.params.id}).toArray(function(err, narratives) {
			var data = narratives[0];
			console.log(data);
			data.date = getFormattedDate(data.datetime);
			res.render('reading.hbs', data);
		});
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function getFormattedDate (date) {
	var newDate = new Date(date);
    return formatDate(newDate, "dddd h:mmtt MMM d, yyyy");
}

function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};