var BinarySearchTree = function(value) {
	var newSearchTree = Object.create(BinarySearchTree.prototype);
	newSearchTree.value = value;
	newSearchTree.left = null;
	newSearchTree.right = null;

	return newSearchTree;
};

BinarySearchTree.prototype._traverse = function(){

};

BinarySearchTree.prototype.insert = function(value){
	var child = BinarySearchTree(value);
	if(child.value > this.value) {
		if(this.right === null) {
			this.right = child;
		} else {
			this.right.insert(value);
		}
	} else {
		if(this.left === null) {
			this.left = child;
		} else {
			this.left.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function(){

};

BinarySearchTree.prototype.depthFirstLog = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

 // var tree = BinarySearchTree(20);
 