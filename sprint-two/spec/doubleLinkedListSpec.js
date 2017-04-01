describe('doublelinkedList', function() {
var doubleLinkedList;

beforeEach(function() {
  doubleLinkedList = DoubleLinkedList();
});

it('should have a head and tail', function() {
  expect(doubleLinkedList).to.have.property('head');
  expect(doubleLinkedList).to.have.property('tail');
});

it('should have methods named "addToTail", "removeHead", and "contains"', function() {
  expect(doubleLinkedList.addToTail).to.be.a('function');
  expect(doubleLinkedList.removeHead).to.be.a('function');
  expect(doubleLinkedList.contains).to.be.a('function');
  expect(doubleLinkedList.addToHead).to.be.a('function');
  expect(doubleLinkedList.removeTail).to.be.a('function');
});

it('should designate a new tail when new nodes are added to the tail', function() {
  doubleLinkedList.addToTail(4);
  expect(doubleLinkedList.tail.value).to.equal(4);
  doubleLinkedList.addToTail(5);
  expect(doubleLinkedList.tail.value).to.equal(5);
});

it('should add nodes to tail and nodes should have prev and next', function() {
  doubleLinkedList.addToTail(4);
  doubleLinkedList.addToTail(5);
  doubleLinkedList.addToTail(6);
  expect(doubleLinkedList.head.next).to.equal(2);
  expect(doubleLinkedList.head.prev).to.equal(null);
  expect(doubleLinkedList.tail.next).to.equal(null);
  expect(doubleLinkedList.tail.prev).to.equal(2);
  expect(doubleLinkedList[2].next).to.equal(3);
  expect(doubleLinkedList[2].prev).to.equal(1);

});

it('should designate a new head when new nodes are added to the head', function() {
  doubleLinkedList.addToHead(4);
  expect(doubleLinkedList.head.value).to.equal(4);
  doubleLinkedList.addToHead(5);
  expect(doubleLinkedList.head.value).to.equal(5);
});

it('should add nodes to head and nodes should have prev and next', function() {
  doubleLinkedList.addToHead(4);
  doubleLinkedList.addToHead(5);
  doubleLinkedList.addToHead(6);
  expect(doubleLinkedList.head.next).to.equal(2);
  expect(doubleLinkedList.head.prev).to.equal(null);
  expect(doubleLinkedList.tail.next).to.equal(null);
  expect(doubleLinkedList.tail.prev).to.equal(2);
  expect(doubleLinkedList[2].next).to.equal(1);
  expect(doubleLinkedList[2].prev).to.equal(3);

});

it('should remove the head from the list when removeHead is called', function() {
  doubleLinkedList.addToTail(4);
  doubleLinkedList.addToTail(5);
  expect(doubleLinkedList.head.value).to.equal(4);
  doubleLinkedList.removeHead();
  expect(doubleLinkedList.head.value).to.equal(5);
});

it('should remove the tail from the list when removeTail is called',
  function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    expect(doubleLinkedList.tail.value).to.equal(6);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

it('should return the value of the former head when removeHead is called', function() {
  doubleLinkedList.addToTail(4);
  expect(doubleLinkedList.removeHead()).to.equal(4);
});

it('should contain a value that was added when added with addToTail', function() {
  doubleLinkedList.addToTail(4);
  doubleLinkedList.addToTail(5);
  expect(doubleLinkedList.contains(4)).to.equal(true);
  expect(doubleLinkedList.contains(5)).to.equal(true);
  expect(doubleLinkedList.contains(6)).to.equal(false);
});

it('should contain a value that was added with addToHead', function() {
  doubleLinkedList.addToHead(4);
  doubleLinkedList.addToHead(5);
  expect(doubleLinkedList.contains(4)).to.equal(true);
  expect(doubleLinkedList.contains(5)).to.equal(true);
  expect(doubleLinkedList.contains(6)).to.equal(false);
});

it('should not contain a value that was removed by removeHead', function() {
  doubleLinkedList.addToTail(4);
  doubleLinkedList.addToTail(5);
  doubleLinkedList.removeHead();
  expect(doubleLinkedList.contains(4)).to.equal(false);
});

it('should not contain a value that was removed by removeTail', function() {
  doubleLinkedList.addToTail(4);
  doubleLinkedList.addToTail(5);
  doubleLinkedList.removeTail();
  expect(doubleLinkedList.contains(5)).to.equal(false);
});

// add more tests here to test the functionality of doubleLinkedList
});
