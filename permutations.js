function permutations(str) {
  let results = []
  
  if (str.length === 1) {
    results.push(str)
    return results
  }
  for(let i = 0; i < str.length; i++) {
    let firstChar = str[i]
    let remainingChars = str.substring(0, i) + str.substring(i + 1)
    let perms = permutations(remainingChars)
    
    for(let j = 0; j < perms.length; j++) {
      results.push(firstChar + perms[j])
    }
  }
  return results
}

console.log(permutations('abc'))
