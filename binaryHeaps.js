// Binary heap is similar to a tree, although a max binary heap puts the largest value as the root and there will only ever be two children branches that branch off a parent. In a min binary heap, the smallest number is at the start of the tree

// to find the index of child node
// for any index of an array i...
// the left child is stored at 2i + 1
// the right child is stored at 2i + 2

// to find the index of parent node at index i...
// its parent is at index Math.floor((i-1)/2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if(element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
    }
  }
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ){
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(1)
heap.insert(45)
heap.insert(199)

console.log(heap.extractMax())
console.log(heap.values)
