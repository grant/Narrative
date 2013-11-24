// Constants
var END_OF_STRING_CHAR = '!';
// var DICTIONARY_FILE = 'raw_data/microdictionary.txt';
// var DICTIONARY_FILE = 'raw_data/smalldictionary.txt';
// var DICTIONARY_FILE = 'raw_data/dictionary.txt';
var DICTIONARY_FILE = 'raw_data/phrases.txt';

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
	done();
}

function addWord(word) {
	addWordPart(wordTree, word);
}

function addWordPart(tree, wordPart) {
	if (wordPart.length === 0) {
		tree[END_OF_STRING_CHAR] = true;
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
		recommendedWords = getWords(startOfWord, branch, numWords);
	}
	return recommendedWords;
}

function getWords (startOfWord, branch, numWords) {
	var words = [];
	if (branch && typeof branch !== 'boolean') {
		if (!!branch[END_OF_STRING_CHAR]) {
			words.push(startOfWord);
		}
		var keys = Object.keys(branch);
		for(var i = 0; i < keys.length && numWords > 0; ++i) {
			var newWords = getWords(startOfWord + keys[i], branch[keys[i]], numWords);
			words = words.concat(newWords);
			numWords -= newWords.length;
		}
	}
	return words;
}

function isWord(word) {
	return !!getBranch(word)[END_OF_STRING_CHAR];
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