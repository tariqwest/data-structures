var DoubleLinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;
    var item = 1;

    //{ tail: {value: 44, next: null}}

    list.addToTail = function(value) {
        if (list.tail === null) {
            list[item] = ListNode(value, item, null, null);
            list.tail = list[item];
        } else if (list.head === null) {
            list[item] = ListNode(value, item, null, list.tail.key);
            list[list.tail.key].next = list[item].key;
            list.head = list.tail;
            list.tail = list[item];
        } else {
            list[item] = ListNode(value, item, null, list.tail.key);
            list[list.tail.key].next = list[item].key;
            list.tail = list[item];     
        }
        item++;
    };

    list.addToHead = function(value) {
        if (list.head === null) {
          list[item] = ListNode(value, item, null, null);
          list.head = list[item];
        } else if (list.tail === null) {
            list[item] = ListNode(value, item, list.head.key, null);
            list[list.head.key].prev = list[item].key;
            list.tail = list.head;
            list.head = list[item];
        } else {
            list[item] = ListNode(value, item, list.head.key, null);
            list[list.head.key].prev = list[item].key;
            list.head = list[item];     
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
        list.head = list[list.head.next];
        delete list[list.head.prev]; 
        list.head.prev = null;
        return oldHeadValue;
      }
    };

    list.removeTail = function() {
      if (list.tail === null) {
        var oldHeadValue = list.head.value;
        delete list[list.head.key];
        return oldHeadValue;
      } else {
          var oldTailValue = list.tail.value;
          list.tail = list[list.tail.prev];
          delete list[list.tail.next]; 
          list.tail.next = null;
          return oldTailValue;
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

var ListNode = function(value, key, next, prev) {
    var ListNode = {};

    ListNode.value = value;
    ListNode.next = next;
    ListNode.prev = prev;
    ListNode.key = key;

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
