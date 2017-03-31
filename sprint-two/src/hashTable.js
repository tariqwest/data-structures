var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
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
    }
};

HashTable.prototype.retrieve = function(k) {
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
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
