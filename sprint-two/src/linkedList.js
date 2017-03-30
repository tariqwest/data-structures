var LinkedList = function() {
  var list = {};
  list.head = null; // A node that no other nodes refer to
  list.tail = null; // A node that doesn't refer to any other nodes
  var count = 1;

// list = { head: {value:22, link: 1}, 1: {value: 33, link: 1}, 2: {value: 44, link: 3}, 3{value 55, link: tail}, tail{...}}
//{head: {value:22 , next: 33}, node: {value: 33; next: tail}, tail{...}}
  list.addToTail = function(value) {
    // Create node
    if (list.tail === null) {
      list.tail = {value: value, link: null};
    }else if(list.head === null){
      list.head = list.tail;
      list.head.link = 'tail';
      list.tail = {value: value, link: null};
    }else{     
      var temp = list.tail;
      list.tail = {value: value, link: null};
      temp.link = 'tail';
      
      //head.link = count;
      list[count] = temp;
      count++;
    }
  };

  list.removeHead = function() {
    var nextKey = list.head.link;
    var next = list[nextKey];
    list.head = next;
    delete list[next];
  };

  list.contains = function(target) {
    // Look at each item in list
      // Return true if targte found
      // Return false if target not found
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
