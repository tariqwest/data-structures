var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) { 
    someInstance.storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var last = someInstance.storage[count-1];
    delete someInstance.storage[count-1];
    if(count > 0){
      count--;
    }
    return last;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
