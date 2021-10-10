

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = head;
    this.tail = tail;
    this.howLong = 0;
  }
  push(val) {
    var newNode = new Node(val);

  // this function should accept a val
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.howLong++
    return this;
  // create a new node using the value passed to the function
  // If there is no head property on the listenerCount, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail propert on the list to be the newly created node
  //   Increment the length by one
  }
}
var list = new SinglyLinkedList()
list.push("HELLO")
console.log(list);
