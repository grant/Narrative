// Constants
var DICTIONARY_FILE = 'raw_data/smalldictionary.txt';
// var DICTIONARY_FILE = 'raw_data/dictionary.txt';

// Start
$(function() {
	start();
});

function start() {
	loadDictionary();
}

var words;
var wordTree = {};
function loadDictionary() {
	$.ajax({ url: DICTIONARY_FILE}).done(function(data) {
		words = data.split('\n');
		createWordTree();
	});
}

// Word tree
function createWordTree () {
	for (var i = 0; i < words.length; ++i) {
		addWord(words[i]);
	}
	console.log(wordTree);
	console.log(getBranch('aal'));
}

function addWord(word) {
	addWordPart(wordTree, word);
}

function addWordPart(tree, wordPart) {
	if (wordPart.length === 0) {
		tree["!"] = true; // Arbitrary EOF code for word
	} else {
		var charIndex = 0;
		var character = wordPart.charAt(charIndex);
		if (typeof tree[character] === 'undefined') {
			tree[character] = {};
		}
		addWordPart(tree[character], wordPart.substr(1));
	}
}

function recommendWord(startOfWord, numWords) {
	var recommendedWords = [];
	var branch = getBranch(startOfWord);
	if (branch) {

	}
	return recommendedWords;
}

function getBranch(startOfWord) {
	if (!startOfWord) {
		return false;
	}

	var charIndex = 0;
	var character = startOfWord.charAt(charIndex);
	var tree = wordTree;
	while (tree[character] && charIndex < startOfWord.length) {
		if (tree[character].length === 1) {
			return false;
		} else {
			tree = tree[character];
			++charIndex;
			character = startOfWord.charAt(charIndex);
		}
	}
	if (charIndex < startOfWord.length) {
		return false;
	}
	return tree;
}