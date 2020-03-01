//Stack is a stack of data (think the call stack). The last thing that was added will be on top and therefore the first thing to be removed will be the last thing that was added

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.size === this.last) {
      this.last = null;
    } 
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.pop()
console.log(stack)
