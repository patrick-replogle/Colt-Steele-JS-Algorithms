/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._length = 0;
  }
  push(value) {
    this._storage[this._length] = value;
    this._length++;
  }
  pop() {
    if(!this._length) return null;
    const lastVal = this._storage[this._length - 1];
    delete this._storage[this._length - 1];
    this._length--;
    return lastVal;
  }
  peek() {
    if(!this._length) return undefined;
    return this._storage[this._length - 1];
  }
}

const myStack = new Stack();
myStack.push('zero')
myStack.push('one')
myStack.push('two')

console.log(myStack.peek())
console.log(myStack)
