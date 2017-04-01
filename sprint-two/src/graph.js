// Instantiate a new graph
var Graph = function() {
	this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.storage.push(Node(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === node) {
			return true;
		}	
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

	if(this.contains(node)){

		for (var i = 0; i < this.storage.length; i++) {
			if (this.storage[i].value === node) {
				for(var j=0; this.storage[i].edges.length; j++){
					this.removeEdge(this.storage[i].value, this.storage[i].edges[j]);
				}
				this.storage.splice(i, 1);
			}
		}	

	}

	
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === fromNode) {
			return (this.storage[i].edges.indexOf(toNode) > -1) ? true : false;
		}
	}
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === fromNode) {
			this.storage[i].edges.push(toNode);
		}
	}
	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === toNode) {
			this.storage[i].edges.push(fromNode);
		}
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === fromNode) {
			var indexOfToNode = this.storage[i].edges.indexOf(toNode);
			if (indexOfToNode > -1) {
				this.storage[i].edges.splice(indexOfToNode, 1);
			}
		}
	}
	for (var i = 0; i < this.storage.length; i++) {
		if (this.storage[i].value === toNode) {
			var indexOfFromNode = this.storage[i].edges.indexOf(fromNode);
			if (indexOfFromNode > -1) {
				this.storage[i].edges.splice(indexOfFromNode, 1);
				return true;
			}			
		}
	}
	return false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	this.storage.forEach(function(node){
		cb(node.value);
	});
};

var Node = function(value) {
    var node = {};

    node.value = value;
    node.edges = [];

    return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 /*
addNode - O(1)
removeNode - O(n)
contains - O(n)
addEdge - O(n)
hasEdge - O(n)
removeEdge - O(n)
forEachNode - O(n)
 */
}