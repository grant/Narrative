// Constants
// var DICTIONARY_FILE = 'raw_data/smalldictionary.txt';
var DICTIONARY_FILE = 'raw_data/dictionary.txt';

// Start
$(function() {
	start();
});

function start() {
	sendPost();
}

function sendPost() {
	var postData = {
		author: 'Grant Timmerman',
		content: 'Hello there',
		promptId: 123
	};

	$.post({
		url: 'api/narrative/add',
		data: postData
	}, function() {

	});
}