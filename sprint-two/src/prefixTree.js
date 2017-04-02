// Read in corupus of all words
	// For each word with unique first character, add a node for that character
		// Add a node for first char + second char in word
			// Add a node for first char + second char + third char


// For each word with unique first char add to storage at key = first_char
	// If key first char only has one item, do nothing
	// If key first char has multiple, look at first 2 chars
		// If key first-two-chars has one item, do nothing
		// If key first-two-char has multiple, look at first 3 chars
		..

var table = {};
for(var i = 0; i<words.length; i++){
	// check table for first-char
		//if return a match
			// compare words[i] to peers
			if(hasCommonChars !== false){
				//if any matches create node with common chars
					 // new child = add words w common
					 // delete common words from parent
				//else add words[i] to child node of first-char
			}
		// else
			// create node first-char
			// add words[i] to child node of first-char

	//first char
	string.slice(0, charAt);
}

var hasCommonChars = function(tableChild){
	var common = [];
	for (var key in tableChild) {
		for (var j = 0; j < word.length; j++){
			if (tableChild[key].startsWith(words[j])) {
				common.push(word[j]);
			}
		}
		if(common.length < 0){
			return common;
		}
	}
	return false;
}

var PrefixTree = function(string) {
  var newTree = {};
  newTree.value = string;

  newTree.children = {}; 
  newTree.addChild = prefixTreeMethods.addChild;
  newTree.contains = prefixTreeMethods.contains;

  return newTree;
};

var prefixTreeMethods = {};

prefixTreeMethods.addChild = function(string, charAt) {
	var compareString = string.slice(0, charAt);
	if (this.contains(compareString) && charAt <= string.length) {
		charAt++;
		this.children[compareString].addChild(string, charAt);
	} else {
		//this.value = string;
		if (charAt <= string.length) {

			this.children[string] = PrefixTree(string);	
		}
		
	}
};

prefixTreeMethods.contains = function(target) {
	if (this.children.hasOwnProperty(target)) {
		return true;
	}
	return false;
};

var words = "the of and to a in forward for is on that by this with i you it not or be are".toLowerCase().split(' ').sort();

var ptree = PrefixTree('Top Tree');

for(var i=0; i<words.length; i++){
	ptree.addChild(words[i], 1);
}