// my first solution
function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let anagram1 = {};
  let anagram2 = {};
  
  for(let char of str1){
      anagram1[char] ? anagram1[char] += 1 : anagram1[char] = 1;
  } 
  
  for(let char of str2){
      anagram2[char] ? anagram2[char] += 1 : anagram2[char] = 1;
  }
  for(let key in anagram1) {
   if(anagram1[key] !== anagram2[key]){
       return false
   }
  }
  return true;
}

//second solution: a bit cleaner version of the solution
function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  
  let lookup = {};
  
  for(i = 0; i < str1.length; i++){
    let letter = str1[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  
  for(let j = 0; j < str2.length; j++) {
     let letter = str2[j]
     if(!lookup[letter]) {
       return false;
     } else {
       lookup[letter] -= 1
     }
  }
  return true;;
}

console.log(validAnagram('aaz', 'zaa'))

function sameFrequency(num1, num2){
  num1 = num1.toString();
  num2 = num2.toString();
  
  let freq1 = {};
  let freq2 = {};
  for(let val of num1){
      freq1[val] ? freq1[val] += 1 : freq1[val] = 1;
  }
  for(let val of num2) {
      freq2[val] ? freq2[val] += 1 : freq2[val] = 1;
  }
  
  for(let key in freq1) {
      if(freq1[key] !== freq2[key]) {
          return false;
      }
  }
  return true;
}
