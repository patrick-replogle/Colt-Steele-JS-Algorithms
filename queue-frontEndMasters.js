
class Queue {

  constructor() {
    this._storage =  {};
    this._length = 0;
    this._headIndex = 0;
  }
  enqueue(value) {
    const lastIndex = this._length + this._headIndex;
    this._storage[lastIndex] = value;
    this._length++;
  }
  dequeue() {
    if(!this._length) return undefined;
    const firstVal = this._storage[this._headIndex];
    delete this._storage[this._headIndex];
    this._length--;
    this._headIndex++;
    return firstVal;
  }
  peek() {
    if(!this._length) return undefined;
    return this._storage[this._headIndex];
  }
}

const myQ = new Queue()
myQ.enqueue('zero')
myQ.enqueue('one')
myQ.enqueue('two')
myQ.dequeue()
console.log(myQ.peek())
console.log(myQ)
