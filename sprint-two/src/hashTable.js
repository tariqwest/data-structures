var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
    this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var keyValuePair = [k, v];
    var bucket = this._storage.get(index);
    if (bucket) {
        var keyValuePairExists = false;
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === k) {
                bucket[i][1] = v;
                keyValuePairExists = true;
            }
        }
        if (keyValuePairExists === false) {
            bucket.push(keyValuePair);
        }
    } else {
        bucket = [];
        bucket.push(keyValuePair);
        this._storage.set(index, bucket);
    }
    this._count++
    if(this._count > Math.floor(0.75*(this._limit))){
        this._resize('expand')
    }
};

HashTable.prototype.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === k) {
                return bucket[i][1];
            }
        }
    }
    return undefined;   
};

HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === k) {
                bucket.splice(i, 1);
            }
        }
    }
    this._count--;
    if (this._count < Math.ceil(0.25*(this._limit))){
        this._resize('contract');
    }
};

HashTable.prototype._resize = function(size) {
    var oldStorage = this._storage;
    var oldLimit = this._limit;
    if (size === 'expand') {
        this._limit = this._limit*2;
    } else {
        this._limit = this._limit/2;
    }
    this._storage = LimitedArray(this._limit);
    this._count = 0;
    this._rehash(oldStorage, oldLimit);    
};

HashTable.prototype._rehash = function(oldStorage, oldLimit) {
    for (var i = 0; i < oldLimit; i++) {
        var bucket = oldStorage.get(i);
        if(bucket){
            for(var j=0; j < bucket.length; j++){
                this.insert(bucket[j][0], bucket[j][1]);
            }
        }
    }
}




/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
insert - Worst case: O(n) / Common case: O(1)
retrieve - Worst case: O(n) / Common case: O(1)
remove - Worst case: O(n) / Common case: O(1)
 */
