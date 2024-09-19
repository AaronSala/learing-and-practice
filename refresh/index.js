//var
//closures
let firstname = "Aaron";

function showname() {
  let secondName = "Sala";
  // console.log(`hallo ${firstname} ${secondName} `);
  function location() {
    const residence = "Nairobi";
    // console.log(`${firstname} ${secondName} is from ${residence}`);
  }
  return location;
}
const details = showname();
details();

//IIFE

const counter = ((num) => {
  //console.log( num+1)
})(5);

//prototypes
const person = {
  alive: true,
};
const musician = {
  plays: true,
};
Object.setPrototypeOf(musician, person);
//console.log(musician.alive);

class car {
  constructor() {
    (this.drives = true), (this.wheels = 4);
  }
  ready() {
    return "ready to go";
  }
}

function Student(name, classes, age) {
  (this.name = name), (this.classes = classes), (this.age = age);
}
Student.prototype.gender = "male";

const student1 = new Student("Aaron", "form 4", 19);
const student2 = new Student("Sala", "form 2", 15);


//fibbonacci

function coocking(ingredient1) {
  return (ingredient2) => {
    return (ingredient3)=>{
      return `${ingredient1} + ${ingredient2} + ${ingredient3}`
    }
  }
}

console.log(coocking("beans")("rice")('potatoes'))

const multuply = (num1) => num2 => num1 * num2
const total = multuply(12)(20)
console.log(total);
