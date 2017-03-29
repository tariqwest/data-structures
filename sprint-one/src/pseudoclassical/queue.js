var Queue = function() {
  // Use an object with numeric keys to store values
  this.storage = {};
  
};


Queue.prototype = {
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
    console.log(this.storage);
    return last;
  }
};

Queue.prototype.constructor = Queue;


