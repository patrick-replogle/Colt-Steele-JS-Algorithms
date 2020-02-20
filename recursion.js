// without recursion
function reverseString(str) {
  if(str === '') return ''
  else return reverseString(str.substr(1)) + str[0]
}

// console.log(reverseString('hello world'))

function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}

// console.log(isPalindrome('tacocat'))

function someRecursive(arr, cb) {
  if(arr.length === 0) return false;
  if(cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb)
}

// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function flatten(arrays) {
  let result = [];
  for(let i = 0; i < arrays.length; i++) {
    if(Array.isArray(arrays[i])){
      result = result.concat(flatten(arrays[i]))
    } else {
      result.push(arrays[i])
    }
  }
  return result;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function nestedEvenSum(obj) {
  let sum = 0;
  for(let key in obj) {
    if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
