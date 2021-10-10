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
    //if there are no nodes return undefined
    if (this.howLong === 0) {
      return "empty"
    }
    var deletedNode = this.head;
    this.head = deletedNode.next
    this.howLong--;
    console.log(this.howLong)
    if(this.howLong === 0) {
      this.tail = null;
    }
    return deletedNode;
    //store the current head in a variable
    //set head to be the current heads next property
    //decrement the length by 1
    //return the value of node 
  }
}
var list = new SinglyLinkedList()

list.push("Hey");
list.push("There");
list.push("My");
list.shift()
list.push("My");