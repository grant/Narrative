// Constants
// var DICTIONARY_FILE = 'raw_data/smalldictionary.txt';
var DICTIONARY_FILE = 'raw_data/dictionary.txt';

// Start
$(function() {
	start();
});

function start() {
	loadDictionary();
}

function loadDictionary() {
	console.log($);
	$.ajax({ url: DICTIONARY_FILE}).done(function(data) {
		var words = data.split('\n');
		console.log(words);
	});
}

function recommendWord(startOfWord) {
	var recommendedWords = [];
}