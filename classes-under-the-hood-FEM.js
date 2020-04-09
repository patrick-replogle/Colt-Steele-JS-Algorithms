//how to recreate what happens under the hood without the new key word or function constructor

function userCreator(name, age) {
  let newUser = Object.create(userStore)
  newUser.name = name;
  newUser.age = age;
  
  return newUser;
}

const userStore = {
  greet: function () {
    console.log('hello')
  },
  sayName: function () {
    console.log(`hello ${this.name}`)
  }
}

let patrick = userCreator('Patrick', 34)
console.log(patrick.age);
patrick.greet()
patrick.sayName()

// now with the same thing, but using the new keyword, a function constructor and an object prototype

function UserCreator1 (name, age){
  this.name = name;
  this.age = age;
}

UserCreator1.prototype.sayName = function(){
  console.log(`hello ${this.name}`)
}

let carina = new UserCreator1('Carina', 26)
console.log(carina.name)
carina.sayName()

//now the ES6 way of doing the same thing using classes

class UserCreator2 {
  constructor(props){
    this.name = props.name;
    this.age = props.age
  }
  greet() {
    console.log(`hello ${this.name}`)
  }
}

const gabi = new UserCreator2({
  name: 'gabi',
  age: 34
});

console.log(gabi.name)
console.log(gabi.age)
gabi.greet()

//extend class example

class NewClass extends UserCreator2 {
  constructor(props){
    super(props)
  }
    oldMan() {
       console.log(`you are ${this.age} years old`)
    }
}

let dadDude = new NewClass ({
  name: 'dadDude',
  age: 90
})

console.log(dadDude.name)
dadDude.oldMan()
