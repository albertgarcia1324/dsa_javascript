// Class to create new node value
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LL class set head and tail to new node/value
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  // Pushes new value as node
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(3);
myLinkedList.push(9);
console.log(myLinkedList);
