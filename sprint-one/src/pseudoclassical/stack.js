var Stack = function() {
  // Use an object with numeric keys to store values
  
  this.storage = {};
};


Stack.prototype = {
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

Stack.prototype.constructor = Stack;
