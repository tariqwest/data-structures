var Set = function() {
  var set = Object.create(setPrototype);
  
  set._storage = {}; // fix me
  
  return set;

};

var setPrototype = {};

setPrototype.add = function(item) {
	// See if key exists
	// If not exist, add it
	if(!this.contains(item)){
		this._storage[item] = item;
	}
};

setPrototype.contains = function(item) {
	// See if key exists
	// If exists, return true
	if(this._storage.hasOwnProperty(item)){
		return true;
	}
	return false;
};

setPrototype.remove = function(item) {
	// See if key exists
	// If exists, remove
	if(this.contains(item)){
		delete this._storage[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
