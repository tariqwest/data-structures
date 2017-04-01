var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    tempStorage = {};
    if (count > 0) {
     for(var key in someInstance.storage){
        tempStorage[Number(key) + 1] = someInstance.storage[key];
      } 
      someInstance.storage = tempStorage; 
    }
    someInstance.storage[0] = value;    
    count++;
  };

  someInstance.dequeue = function() {
    var last = someInstance.storage[count-1];    
    delete someInstance.storage[count-1];
    if (count > 0) {
      count--;
    }
    return last;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
