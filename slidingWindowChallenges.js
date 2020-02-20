// //window pattern challenge to find maximum value by adding <num> consecutive numbers together in the array
function maxSubarraySum(arr, num){
  if(arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let j = num; j < arr.length; j++) {
      tempSum = tempSum - arr[j - num] + arr[j];
      maxSum = Math.max(tempSum, maxSum)
  }
 return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))

//challenge #2: this function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one return 0 instead.
function minSubArrayLen(arr, num) {
  let i = 0; //start
  let j = 0; //end
  let sum = 0;
  let minLen = Infinity;
  
  while(i < arr.length) {
    if(sum < num && j < arr.length) {
      sum += arr[j]
      j++;
    } 
    else if(sum >= num) {
      minLen = Math.min(minLen, j - i);
      sum -= arr[i];
      i++;
    } else {
      break; 
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = Infinity;
  
  while(start < arr.length) {
    if(sum < num && end < arr.length) {
      sum += arr[end];
      end++
    }
    else if(sum >= num) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) //2 [4, 3]
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 [5, 4]
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 52)) //3

function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let seen = {};
  
  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(seen[char]) {
      start = Math.max(start, seen[char])
    } 
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1;
  }
  return longest;
}

//console.log(findLongestSubstring('rithmschool'))
// console.log(findLongestSubstring('bbbb'))


//non recursion method
function factorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// //with recursion
function factorial2(num) {
  if(num === 1) return 1;
  return num * factorial2(num - 1)
}
// console.log(factorial2(3))

//another recursive function
function odds(arr) {
  let result = [];
  
  function helper(helperArr) {
    if(helperArr.length !== 0) {
      return;
    }
    if(helperArr[0] % 2 !== 0) {
      result.push(helperArr[0])
    }
    helper(helperArr.slice(1))
  }
  helper(arr)
  return result;
}

//same concept with pure recursion
function odds(arr) {
  let newArr = [];
  
  if(arr.length === 0) {
    return newArr;
  }
  
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  
  newArr = newArr.concat(odds(arr.slice(1)))
  return newArr;
}

// console.log(odds([1,2,3,4,5,6,7,8,9]))

//recursion reverse string
function reverse(str) {
  if(str.length === 0) {
    return ''
  } else {
    return reverse(str.substr(1)) + str.charAt(0)
  }
 }
console.log(reverse('awesome'))
function isPalindrome(str){
  let arr = [];
  for(let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i])
  }
 if(arr.join('') === str) {
   return true;
 } else {
 }
}
// console.log(isPalindrome('tacocat'))

// console.log('tacocat'.slice(-1))
