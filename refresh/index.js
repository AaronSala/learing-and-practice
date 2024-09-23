//closures

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const last = outer();
last();

//carrying

function sum(num1) {
  return function (num2) {
    return function (num3) {
      return num1+num2+num3
    };
  };
}
const total = sum(9);
console.log(total(8)(0));

//this
//implicit binding
const person= {
  name: "aaron",
   sayName: function() {
       console.log(`my name is ${this.name}`);
    },
 
}
person.sayName()

//explicit binding
function sayName(){
       console.log(`my name is ${this.name}`);
    }

sayName.call(person)

//new binding
const Person = function (name) {
  this.name = name;
  console.log(`my second Name is ${this.name}`);
  
}

const person2 = new Person('mutuku')
const person3 = new Person("mwangu");

//prototypes