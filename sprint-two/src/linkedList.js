var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;
    var count = 1;

    //{ tail: {value: 44, next: null}}

    list.addToTail = function(value) {
        if (list.tail === null) {
            list.tail = Node(value);
        } else if (list.head === null) {
            list.head = list.tail;
            list.head.next = 'tail';
            list.tail = Node(value);
        } else {
            var tempNode = list.tail;
            list.tail = Node(value);
            tempNode.next = 'tail';
            count === 1 ? list.head.next = count : list[count - 1].next = count;
            list[count] = tempNode;
            count++;
        }
    };

    list.removeHead = function() {
        if (list.head === null) {
            var tailValue = list.tail.value;
            delete list.tail;
            return tailValue;
        }
        var nextKey = list.head.next;
        var next = list[nextKey];
        var oldValue = list.head.value;

        if (nextKey === 'tail') {
            list.head = list.tail;
            delete list.tail;
        } else {
            list.head = next;
            delete list[nextKey];
        }
        return oldValue;
    };

    list.contains = function(target) {
        for (var key in list) {
            if (list[key].value === target) {
                return true;
            }
        }
        return false;
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

 /*
addTotail - O(1)
removeHead - O(1)
contains - O(n)
 */
