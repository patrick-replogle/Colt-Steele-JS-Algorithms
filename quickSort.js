function pivot(arr, start=0, end=arr.length+1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  let pivot = arr[start];
  let swapIdx = start;
  
  for(let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)      
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx;
}

//console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left=0, right=arr.length -1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1, right)
  }
  return arr;
}

//another version of quick sort found online that is much simpler
function quickSort2(origArray) {
  if(origArray.length <= 1) return origArray;
  
  let newArray = [];
  let left = [];
  let right = [];
  let pivot = origArray.pop();
  
  for(let i = 0; i < origArray.length; i++) {
    if(origArray[i] < pivot) {
      left.push(origArray[i])
    } else {
      right.push(origArray[i])
    }
  }
  return newArray.concat(quickSort2(left), pivot, quickSort2(right))
}



console.log(quickSort2([4,6,9,1,2,5,3,1000,2,60]))
