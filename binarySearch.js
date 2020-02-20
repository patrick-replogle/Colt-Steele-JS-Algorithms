//only works with sorted arrays
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  
  while(arr[middle] !== value && start <= end) {
    if(arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === value) {
    return middle;
  } else {
    return - 1;
  }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 9))
