// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
  function hello() {
    console.log('hello')
  }
  return hello;
}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function printer() {
    console.log(input)
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
  function addBy(num) {
    return num + x;
  }
  return addBy;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let counter = 0;
  let result;
  function inner(val) {
    if(counter === 0) {
      result = func(val)
      counter++;
      return result;
    } else {
      return result;
    }
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  return (val) => {
    if (++counter >= count){
      return func(val);
    } 
  }
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed



// CHALLENGE 6
// function delay(func, wait) {
//   return setTimeout(() => func(), wait);
// }

// const something = delay((a, b) => a + b, 6)
// console.log(something(2,4))

// CHALLENGE 7
function rollCall(names) {
  if(Array.isArray(names)) {
    	return (() => {
	   if(!names.length) return 'Everyone accounted for'
	   else return names.shift()
	  })
  	}
   return -1;
}

// // /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// console.log(rollCaller()) // => should log 'Victoria'
// console.log(rollCaller()) // => should log 'Juan'
// console.log(rollCaller()) // => should log 'Ruth'
// console.log(rollCaller()) // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  let obj = {};
  return ((val) => {
    if(val === magicWord) {
      return obj;
    } else {
      obj[val] = func(val);
      return func(val)
    }
  })
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let newArr = [];
  let counter = 0;
  return (() => {
    if(!array.length) {
      counter = 0;
      array = newArr;
      return newArr.shift()
    }
    else {
      newArr.push(array[counter])
      counter++;
      return array.shift()
    } 
  })
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay());// => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
  return ((...args) => {
    return func(arg, ...args)
  })
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  let obj = {date: "", output: ""};
  return ((...args) => {
    obj["date"] = Date.now();
    obj['output'] = func(...args);
    return obj;
  })
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


//CHALLENGE 12
function censor() {
  let result = {};
  function innerFunc(str1, str2) {
    if(arguments.length === 2) {
      result[str1] = str2;
    } else {
      for (let key in result) {
        str1 = str1.replace(key, result[key])
      }
    }
    return str1;
  }
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

}

// /*** Uncomment these to check your work! ***/
// const obj = createSecretHolder(5)
// obj.getSecret()
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
  let counter = 0;
  return (() => {
    counter++;
    return counter;
  })
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2


// CHALLENGE 15
function russianRoulette(num) {
  let count = 1;
  return (() => {
    if(count === num) {
      count++;
      return 'bang';
    } else if(count < num){
      count++;
      return 'click';
    } else {
      return 'reload to play again';
    }
  })
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
  let numbers = [];
  let average = 0;
  
  return ((num) => {
    if(num) {
      numbers.push(num);
      average = (numbers.reduce((a, b) => a + b)) / numbers.length;
      return average;
    } else {
      return average;
    }
  })
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
   return ((callback) => {
    for(let i = 0; i < arrOfTests.length; i++) {
      let arr = arrOfTests;
      if(callback(arr[i][0]) === arr[i][1]) {
        return true;
      }
      return false;
    }
  })
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  let result = [];
	return ((str) => {
    if(str === 'undo' && result.length) {
      return result.pop() + ' ' + 'undone';
    } 
    if(result.length === 0 && str === 'undo') {
      return 'nothing to undo';
    } 
    if(result.length <= limit) {
      result.push(str);
      return str + ' ' + 'done';
    } 
  })
}

// /*** Uncomment these to check your work! ***/
//const myActions = makeHistory(2);
//console.log(myActions('jump')); // => should log 'jump done'
//console.log(myActions('undo')); // => should log 'jump undone'
//console.log(myActions('walk')); // => should log 'walk done'
//console.log(myActions('code')); // => should log 'code done'
//console.log(myActions('pose')); // => should log 'pose done'
//console.log(myActions('undo')); // => should log 'pose undone'
//console.log(myActions('undo')); // => should log 'code undone'
//console.log(myActions('undo')); // => should log 'walk undone'
//console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let counter = 1;
  let temp;
  let sum = 0;
  let bust = false;
  
  function dealer(num1, num2) {
    function player() {
      if(counter === 1) {
        sum = num1 + num2;
        counter++;
        return sum;
      } 
      if(counter === 2) {
        temp = sum + array[0];
        sum = temp;
        counter++;
        if(sum <= 21) {
          return sum;
        } else {
          bust = true;
          return 'bust';
        }
      }
      if(counter === 3) {
        temp = sum + array[1];
        sum = temp;
        counter++;
        if(sum <= 21) {
          return sum;
        } else {
          bust = true;
          return 'bust';
        }
      }
      if(counter === 4) {
        temp = sum + array[2];
        sum = temp;
        counter++;
        if(sum <= 21) {
          return sum;
        } else {
          bust = true;
          return 'bust';
        }
      }
      if(counter === 5) {
        temp = sum + array[3];
        sum = temp;
        counter++;
        if(sum <= 21) {
          return sum;
        } else {
          bust = true;
          return 'bust';
        }
      }
      if(bust) {
        return 'you are done!'
      }
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
