var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
<<<<<<< HEAD
    var keyValuePair = [k, v];
    var storageSlot = this._storage.get(index);
    if (storageSlot) {
        var overwrite = false;
        for (var i = 0; i < storageSlot.length; i++) {
            if (storageSlot[i][0] === k) {
                storageSlot[i][1] = v;
                overwrite = true;
            }
        }
        if (overwrite === false) {
            storageSlot.push(keyValuePair);
        }
    } else {
        storageSlot = [];
        storageSlot.push(keyValuePair);
        this._storage.set(index, storageSlot);
=======
    var keyValuePair = [k,v];
    var storageSlot = this._storage.get(index);
    if(storageSlot){
      var keyValuePairExists = false;
      for(var i = 0; i<storageSlot.length; i++){
        if(storageSlot[i][0] === k){
          storageSlot[i][1] = v;
          keyValuePairExists = true;
        }
      }  
      if(keyValuePairExists === false){
        storageSlot.push(keyValuePair);
      }
    }else{
      storageSlot = [];
      storageSlot.push(keyValuePair);
      this._storage.set(index, storageSlot);
>>>>>>> 1c4b97753bd9991e73e4454261701619392486c0
    }
};

HashTable.prototype.retrieve = function(k) {
<<<<<<< HEAD
    var index = getIndexBelowMaxForKey(k, this._limit);
    var retrievedValue = this._storage.get(index);
    for (var i = 0; i < retrievedValue.length; i++) {
        if (retrievedValue[i][0] === k) {
            return retrievedValue[i][1];
        }
    }
};

HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    //this._storage.set(index);
    var storageSlot = this._storage.get(index);
    if (storageSlot) {
        for (var i = 0; i < storageSlot.length; i++) {
            if (storageSlot[i][0] === k) {
                storageSlot[i].splice(i, 1);
            }
        }
    }
=======
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageSlot = this._storage.get(index);
  for(var i=0; i<storageSlot.length; i++){
    if(storageSlot[i][0] === k){
      return storageSlot[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageSlot = this._storage.get(index);
  if(storageSlot){
    for(var i=0; i<storageSlot.length; i++){
      if(storageSlot[i][0] === k){
        storageSlot.splice(i, 1);
      }
    }
  }
>>>>>>> 1c4b97753bd9991e73e4454261701619392486c0
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
<<<<<<< HEAD
=======

 /*
insert - Worst case: O(n) / Common case: O(1)
retrieve - Worst case: O(n) / Common case: O(1)
remove - Worst case: O(n) / Common case: O(1)
 */


>>>>>>> 1c4b97753bd9991e73e4454261701619392486c0
