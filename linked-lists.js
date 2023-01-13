const LinkedList = () => {
  //add list item at beginning of list
  const prepend = function (value) {
    let node = Node(value);
    let restOfList = this.head;

    this.head = node;
    this.head.nextNode = restOfList;

    this.size++;

    return this;
  }

  //add list item at the end of the list
  const append = function (value) {
    let node = Node(value);
    let current;
    
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.nextNode != null) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.size++;

    return this;
  }

  //return last element of list
  const tail = function () {
    let tail = this.head;

    while (tail.nextNode != null) tail = tail.nextNode;

    return tail;
  }

  //returns element at specified index
  const at = function (index) {
    let at = 0;
    let node;

    if (index < 0 || index > this.size) return "Please enter a valid index.";

    if (index == 0) node = this.head;
    else {
      node = this.head;

      while (at < index) {
        node = node.nextNode;
        at++;
      }
    }

    return node;
  }

  //remove last node from list
  const pop = function () {
    let index = this.size - 2;

    let node = this.at(index);

    node.nextNode = null;
    this.size--;

    return this;
  }

  //returns true/false whether value is in list
  const contains = function(value) {
    let current = this.head;
    let contains = 0;
    
    while (current.nextNode != null) {
      if (current.value === value) contains = 1;
      
      current = current.nextNode;
    }
    
    if (current.value === value) contains = 1;

    if (contains == 1) return true;
    else return false;
  }

  //return index of value if it exists, null if not
  const find = function(value) {
    let index = 0;
    let current = this.head;
    let nodeIsPresent = false;

    while (current != null) {
      if (current.value === value) {
        nodeIsPresent = true;
        return index;
      } else 
      current = current.nextNode;
      index++;
    }
    
    if (nodeIsPresent == false) return null;
  }

  //print out list as string
  const toString = function() {
    let current = this.head;
    let string = "";

    while (current.nextNode != null) {
      string = string + `( ${current.value} )` + ` -> `;
      current = current.nextNode;
    }
    
    string = string + `( ${current.value} )` + ` -> `;//append last node to string
    string += null;

    return string;
  }

  //insert node at specific index
  const insertAt = function (value, index) {
    let nodeIndex = 0
    let node = Node(value);
    let current = this.head;
    let restOfList;

    if (index < 0 || index > this.size) return "Please enter a valid index.";
    else {
      restOfList = this.at(index);
      
      while (nodeIndex < index - 1) {
        current = current.nextNode;
        nodeIndex++;
      }

      current.nextNode = node;
      current.nextNode.nextNode = restOfList;
      this.size++;

      return this;
    }
  }

  //remove node at index
  const removeAt = function (index) {
    let nodeIndex = 0;
    let current = this.head;
    let restOfList;

    while (nodeIndex < index - 1) {
      current = current.nextNode;
      nodeIndex++;
    }

    restOfList = current.nextNode.nextNode;
    current.nextNode = null;
    current.nextNode = restOfList;
    this.size--;

    return this;
  }
  
  return {
    head: null,
    size: 0,
    prepend,
    append,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  }
}

const Node = function (value) {
  return {
    value: value,
    nextNode: null
  }
}