var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  for(var key in queueMethods){
  	someInstance[key] = queueMethods[key];
  }
  return someInstance;
};


var queueMethods = {
  size : function() {
    count = 0;
    for(var key in this.storage){
    	count++
    }
    return count;
  },
	enqueue : function(value) {
    tempStorage = {};
    if (this.size() > 0) {
     for(var key in this.storage){
        tempStorage[Number(key) + 1] = this.storage[key];
      } 
      this.storage = tempStorage; 
    }
    this.storage[0] = value;    
  },

  dequeue : function() {
    var last = this.storage[this.size()-1];    
    delete this.storage[this.size()-1];
    return last;
  }
};


