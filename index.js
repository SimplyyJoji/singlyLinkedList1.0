const { ServerResponse } = require("http");

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.howLong = 0;
  }
  // this function should accept a val
  push(val) {
    //create variable to store val in a Node
    var newNode = new Node(val);
  //If nothing in this.head
  if (!this.head) {
    //this.head is now the new node
    this.head = newNode;
    //this.tail is now head so  tail is null 
    //we are saving every value that is saved 
    this.tail= this.head;
    //else meaning if we have a value in the this.head
  } else {
    //the tail is now the new node
    this.tail.next = newNode;
    //will be the node before
    this.tail = newNode;
    }
    //we need to update the length
    this.howLong++
    return this;
  // create a new node using the value passed to the function
  // If there is no head property on the listenerCount, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail propert on the list to be the newly created node
  //   Increment the length by one
  }
    pop(){
    //Edge Case if no nodes in list return undefiend
    if (this.howLong === 0) {
      return "empty";
    }
    //We need 2 variables both will start at this.head
    var current = this.head;
    var newTail = current;
    while(current.next) {
      //While there is a next this.tail will go up 
      newTail = current;
      //Current willl go to that next one
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.howLong--;
    if(this.howLong === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    //Loop thru until you reach tail
    //Set property of the 2nd to last to be null
    //Set the tail to be the 2nd to last Node
    //Decrement the length of the list by 1
    //Return thye value of the node removed
  }
  shift(){
    //Edge Case: if there are no nodes return undefined
    if (this.howLong === 0) {
      return "empty"
    }
    //store the current head in a variable
    var deletedNode = this.head;
    //set head to be the current heads next property
    this.head = deletedNode.next;
     //decrement the length by 1
    this.howLong--;
    console.log(this.howLong)
    if(this.howLong === 0) {
      this.tail = null;
    }
     //return the value of node
    return deletedNode;
    
  }
  //unshift should accept val
  unshift(val) {
  //create a new Node uusing the value passed to function
    var newNode = new Node(val);
  //if there is not this.head set the head and tail to the new Node
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //otherwise set the newly created nodes next property to be the current head
    } else {
       //set the head on the list to be that newly created node
      newNode.next = this.head;
      this.head = newNode;
    }    
      //increment the length of the list by 1
      this.howLong++
      //return the linked list  
      return this;
  
  }
  //get function should accept a index
  get(index) {
    //Edge Case: if the index is less the 0 or if index is greater then or equal to the list length
    if (index < 0 || index >= this.howLong) {
      return "We can not do that"
    }
    let counter = 0;
    let current = this.head;
    
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
    //Loop through the list  and return the node that is in the index 
  }
  //Set should accept a value and a index
  set(index,value){
    //use the get function to find the specific node
    var foundValue = this.get(index);

    if (foundValue) {
      foundValue.value = value
      return true;
    }
    return false;
    //if node not there return false
    //if node is found change the node value to the function and return true
    
  }

  insert(index, val){
    //if index is less then 0 or greater then the length return false
    if (index < 0 || index > this.length) return false;
     //if the index is the same as the length , push a new node to the end of the list
    if (index === this.length) return !!this.push(val);
  //if the index is 0 unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(val);
    //set the next property on that node to be the new node
    var newNode = new Node(val);
      //otherwise use the get method, access the node at the index
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    //increment the length
    this.howLong++;
        //return true
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.howLong) return undefined;
    if (index === this.howLong - 1) return this.pop()
    if (index === 0) return this.shift()
    //if the index is less then 0 or greater then length return undefined
    //if index is is same as length, pop
    //if the index is 0, shift
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.howLong--;
    return removed;
    //otherwise use the get method to access the node at the index 01

  }
  reverse(){
    //swap the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    //create varable called next
    //create variable called prev
    //create a var called node and initialize it to the head property
    //loop through the list
    //set next to be the property on whatever node is
    //Set the nect property on the node to be whatever prev is
    //Set prev to be the value of
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}
var list = new SinglyLinkedList()

list.push(10);
list.push(30);
list.push(40);
list.remove(0)
list.remove(0)