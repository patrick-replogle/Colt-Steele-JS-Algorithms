//FIFO: first in first out data structure. Similar to stack, but a stack is LIFO.
// uses include background tasks, uploading resources, printing/task processing

// implementation using array 

const q = [];
//FIRST WAY 
q.push('FIRST')
q.push('SECOND')
q.push('THIRD');

q.shift('FIRST')
q.shift('SECOND')
q.shift('THIRD')

//SECOND WAY * more efficient since the array doesn't have to reindex when removing in FIFO order since the first item will be at the end of the array when using unshift and therefore pop will actually remove the first item added.
q.unshift('FIRST')
q.unshift('SECOND')
q.unshift('THIRD')

q.pop('FIRST')
q.pop('SECOND')
q.pop('THIRD')

// implementation using a class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // adds value
  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  //removes value
  dequeue() {
    if(!this.first) return null;
    
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
 }

let queue = new Queue();
queue.enqueue('FIRST')
queue.enqueue('SECOND')
queue.enqueue('THIRD')

console.log(queue.dequeue())
