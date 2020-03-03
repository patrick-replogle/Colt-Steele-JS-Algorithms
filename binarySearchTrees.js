// in a binary search tree, all values to the right are larger than the root's value and all values to the left are smaller

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
  // breadth-first-search searches horizontally thru tree
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node)
    
    while(queue.length) {
      node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data;
  }
  // searches branch depth first
  // useful for cloning a tree
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data;
  }
  // processes all subtrees first before processing the root
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if(node.left)traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(this.root)
    return data;
  }
  // build a list in ascending order
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if(node.left)traverse(node.left);
      data.push(node.value)
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }
  // reverse level order traversal will build the list in descending order
  RLOTraversal() {
    let data = [];
    function traverse(node) {
      if(node.right) traverse(node.right);
        data.push(node.value)
      if(node.left)traverse(node.left);
    }
    traverse(this.root)
    return data;
  }
} 

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSDesc())

// inserting without methods
// let tree = new BinarySearchTree();
// tree.root = new Node(10)
// tree.root.right = new Node(15);
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// console.log(tree)
