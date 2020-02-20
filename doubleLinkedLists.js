class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev= null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let removed = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift() {
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let current, count;
    if(index <= this.length / 2) {
      count = 0;
      current = this.head;
      while(index !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    let current = this.get(index);
    if(current !== null) {
      current.val = val;
      return true;
    }
     return false;
  }
  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
    
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;
    
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()
   
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList;
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
// list.pop()
// list.shift()
//list.unshift(0)
console.log(list.remove(3))
console.log(list)
