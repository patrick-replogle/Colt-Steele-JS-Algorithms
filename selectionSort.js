//selection sort sets the first index of an unsorted array as the lowest value and then compares the value of every index after it. If an index above i is lower, than that value is swapped with the value at i.
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if(i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest]
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1,5,3,6,10,2]))
