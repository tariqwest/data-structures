var Stack = function() {
  var someInstance = Object.create(stackMethods);
  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  return someInstance;
};


var stackMethods = {
	size : function() {
		var count = 0;
		for (var key in this.storage) {
			count++;
		}
     	return count;
  	}, 

	push : function(value) { 
      this.storage[this.size()] = value;
  	},

  pop : function() {
    var last = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return last;
  }
};
