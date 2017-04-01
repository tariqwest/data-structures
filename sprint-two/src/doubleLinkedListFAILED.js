var DoubleLinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;
    var key = 1;
    var count = 1;

    //{ tail: {value: 44, next: null}}

    list.addToTail = function(value) {
        // 1st ListNode
        if (list.tail === null) {
            list.tail = ListNode(value);
            if (list.head !== null) {
                list.tail.prev = 'head';
                list.head.next = 'tail';
            }
        // 2nd ListNode
        } else if (list.head === null) {
            list.head = list.tail;   
            list.tail = ListNode(value);
            list.head.next = 'tail';
            list.tail.prev = 'head';
        // 3rd or 4th ListNode
        } else {
            var tempListNode = list.tail;
            list.tail = ListNode(value);
            list.tail.prev = key;
            // 3rd ListNode
            if (count === 1) {
                tempListNode.next = 'tail';
                tempListNode.prev = 'head';
                list.head.next = key;
            // 4th+ ListNode
            } else {
                tempListNode.next = 'tail';
                tempListNode.prev = key - 1;
                list[key - 1].next = key;
            }
            list[key] = tempListNode;
            count++;
            key++;
        }
    };

    list.addToHead = function(value) {
        // 1st ListNode
        if (list.head === null) {
            list.head = ListNode(value);
            if (list.tail !== null) {
                list.head.next = 'tail';
                list.tail.prev = 'head';
            }
        // 2nd ListNode
        } else if (list.tail === null) {
            list.tail = list.head;   
            list.head = ListNode(value);
            list.tail.prev = 'head';
            list.head.next = 'tail';
        // 3rd or 4th ListNode
        } else {
            var tempListNode = list.head;
            list.head = ListNode(value);
            list.head.next = key;
            // 3rd ListNode
            if (count === 1) {
                tempListNode.next = 'tail';
                tempListNode.prev = 'head';
                list.tail.prev = key;
            // 4th+ ListNode
            } else {
                tempListNode.next = key - 1;
                tempListNode.prev = 'head';
                list[key - 1].prev = key; 
            }
            list[key] = tempListNode;
            count++;
            key++;
        }
    };

    list.removeHead = function() {
        // If only one item, remove item and return value
        if (list.head === null) {
            var tailValue = list.tail.value;
            delete list.tail;
            return tailValue;
        }

        // Find next key
        var nextKey = list.head.next;
        var next = list[nextKey];

        // Get heads current value
        var oldValue = list.head.value;

        // If only two items head/tail
        if (nextKey === 'tail') {
            list.head = list.tail;
            delete list.tail;
        } else {
        // Set next item to head and delete head
            list.head = next;
            list.head.prev = null;
            // Set node after new head to point to head
            list[list.head.next].prev = 'head';
            delete list[nextKey];
        }
        count--;
        return oldValue;
    };

    list.removeTail = function() {
        if (list.tail === null) {
            var headValue = list.head.value;
            delete list.head;
            return headValue;
        }
        var prevKey = list.tail.prev;
        var prev = list[prevKey];
        var oldValue = list.tail.value;

        if (prevKey === 'head') {
            list.tail = list.head;
            delete list.head;
        } else {
            list.tail = prev;
            list.tail.next = null;
            // Set node before new tail to point to tail
            list[list.tail.prev].next = 'tail';
            delete list[prevKey];
        }
        count--;
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

var ListNode = function(value) {
    var ListNode = {};

    ListNode.value = value;
    ListNode.next = null;
    ListNode.prev = null;

    return ListNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
addTotail - O(1)
removeHead - O(1)
contains - O(n)
*/
