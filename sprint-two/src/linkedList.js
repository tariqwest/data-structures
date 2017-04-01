var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;
    var item = 1;

    //{ tail: {value: 44, next: null}}

    list.addToTail = function(value) {
        if (list.tail === null) {
            list[item] = ListNode(value, item, null);
            list.tail = list[item];
        } else if (list.head === null) {
            list[item] = ListNode(value, item, null);
            list[list.tail.key].next = list[item].key;
            list.head = list.tail;
            list.tail = list[item];
        } else {
            list[item] = ListNode(value, item, null);
            list[list.tail.key].next = list[item].key;
            list.tail = list[item];     
        }
        item++;

    };

    list.removeHead = function() {
        if (list.head === null) {
            var oldTailValue = list.tail.value;
            delete list[list.tail.key];
            return oldTailValue;
        } else {
            var oldHeadValue = list.head.value;
            var oldHeadKey = list.head.key;
            list.head = list[list.head.next];
            delete list[oldHeadKey]; 
            return oldHeadValue;
        }

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

var Node = function(value, key, next) {
    var node = {};

    node.value = value;
    node.next = next;
    node.key = key;

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
