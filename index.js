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
}
var list = new SinglyLinkedList()

list.push("Hey");
list.push("There");
list.push("My");
list.unshift("Pizza");