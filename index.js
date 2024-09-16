let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector(".text");
const xptext = document.querySelector("#xptext");
const healthText = document.querySelector("#healthtext");
const goldText = document.querySelector("#goldtext");

const goStore = () => {
  console.log("going to store");
};
const goCave = () => {
  console.log("going to cave");
};
const fightDragon = () => {
  console.log("fighting Dragon");
};

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

const number = document.querySelector(".gues-number");
const response = document.querySelector(".response");
const submitBtn = document.querySelector("#button");

// number.addEventListener('input', () => {
//   console.log(number.value);

// })
let trials = 0

  submitBtn.onclick = handleClick;
 
const realNumber = Math.floor(Math.random() * 100);
console.log(realNumber);

function handleClick() {
  trials+=1
  let values = number.value;
  values == realNumber;
  if (values < realNumber) {
    response.innerHTML = "you guesed too low \n try again";
    response.style.color = "red";
  } else if (values > realNumber) {
    response.innerHTML = "you guesed too high";
    response.style.color = "red";
  } else {
    response.innerHTML = "you guesed right!!!!";
    response.style.color = "green";
    response.style.fontSize = "2rem"
    trials = 0;
    number.value = "";
  }
  console.log(trials)

  if (trials == 10) {
     response.innerHTML = "you have failed Try again";
    response.style.color = "red";
    trials = 0
    number.value=""
  }
  number.value = "";
}
