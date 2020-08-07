// # solution 1 with space complexity o(n)
function fib(start, end) {
  if(start < 0 || end < 0) return 'no negative numbers'
  if(typeof(start) !== 'number' || typeof(end) !== 'number') return "only numbers please!"
  if(start % 1 !== 0 || end % 1 !== 0) return 'no floats'
  
  let arr = [0, 1]
  for(let i = 2; i < end; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr.slice(start - 1, end)
}

console.log(fib(5, 10))

// solution 2 without storing all fib numbers up until the end in an array
function fib(start, end) {
  if(start < 1 || end < 1) return 'no negative numbers or zero'
  if(typeof(start) !== 'number' || typeof(end) !== 'number') return "only numbers please!"
  if(start % 1 !== 0 || end % 1 !== 0) return 'no floats'
  
  let result = []
  let prev = 1
  let prevPrev = 0
  let curr = prev + prevPrev
  let counter = 3
  
  while (counter <= end) {
    prevPrev = prev
    prev = curr
    curr = prevPrev + prev
    counter += 1
    if(counter >= start && counter <= end) {
      result.push(curr)
    }
  }
  
  if(start > 2) {
    return result.slice(3)
  } else {
    return [0, 1, 1].concat(result).slice(0, end)
  }
}

console.log(fib(1,15))
