//helper function to get the correct index of each number
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//helper function to count the number of digits of number
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//helper function to figure out which number in the array has the most digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits;
}

//and finally radix sort
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); 
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums;
}

console.log(radixSort([23,345,5678,12,2345,9852]))

// console.log(getDigit(7323, 0))
// console.log(digitCount(391))
// console.log(mostDigits([111,222222,111111]))
