//function will take in an arr and num. Return the maximum total you would get from combinations of adding <num> amount of the numbers together
function maxSubArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }
 
  return maxSum;
}

console.log(maxSubArray([2,6,9,2,1,8,5,6,3], 3))
