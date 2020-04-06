// array built from scratch

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    if(!this.length) return undefined;
    let removed = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }
  get(index) {
    if(!this.data[index]) return undefined;
    return this.data[index];
  }
  delete(index) {
    if(!this.data[index]) return undefined;
    const removed = this.data[index];
    this._collapseTo(index)
    return removed;
  }
  _collapseTo(index) {
    if(!this.data[index]) return undefined;
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const myArr = new ArrayList();
myArr.push('zero')
myArr.push('one')
myArr.push('two')
myArr.push('three')
myArr.delete(2)

console.log(myArr)
