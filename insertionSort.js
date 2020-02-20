// //insertion sort starts on the second index then compares the value at the second index with the one before it. If the previous value is greater, they swap indexes.
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentVal = arr[i];
    while(j >= 0 && arr[j] > currentVal) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}


console.log(insertionSort([11,13,8,2,10,9,17]))
