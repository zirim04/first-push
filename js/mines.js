// const passCode = Math.ceil(Math.random()*8)*121314;
// // console.log(passCode)

// window.alert(passCode);
// const pass = Number(window.prompt(`Input one-time code here:`));

// // if(pass = passCode){
// //     console.log(`Welcome, User!`)
// // }
// // else{
// //     console.log(`You do not have access to this account!`)
// // }

// console.log((pass === passCode) ? `Welcome, User!` : `You don't have access to this account!`)

// alert(`god`)

// console.log(Math.ceil(Math.random()*8))

// let a = 10
//     y = 5
//     c = a + y

//     if(c === 15){
//         console.log(`Yes, c is 15`)
//     }
//     else{
//         console.log(`You are wrong!i`)
//     }

// console.log(a+y)

// console.log(Math.floor(Math.random()*8))

// const ran = Math.ceil(Math.random() * 1000000)
// alert(ran)

// const promo = prompt("Input On time code here")

// if(promo == ran){
//     console.log("Log in successful")
// }else{
//     console.log("Sorry, you do not have access to this site")
// }

const chibyk = true;
const martins = true;
const earnest = true;

if (!chibyk || !martins || !earnest) {
  console.log("All are true");
} else {
  console.log("One is stubborn");
}

// Array - collection of multiple data into a single variable. The array is denoted using the square bracket []

const arr = ["Philip", "Solomom", "Chidi", 655, "Iyke", "Abia"];
console.log(arr);
console.log(arr[2]);
arr[1] = "vivian";
console.log(arr);
let arw = arr.length;
console.log(arw);
let are = arr.toString();
console.log(are);
let ars = arr.at(-2);
console.log(ars);
let arq = arr.join(" - ");
console.log(arq);
arr.pop();
console.log(arr);
arr.push("John");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Ben");
console.log(arr);

arr[arr.length] = "Luke";
console.log(arr);

arr.shift();
arr.shift();
arr.pop();
arr.pop();
console.log(arr);

let arx = ["Sandra", "Lucy", "Ella"];
let art = ["Otu", "Abuo", "Ato"];
const arz = arr.concat(arx, art);
const arl = arz.concat("fist");
console.log(arl);

console.log(arr);

const ard = arr.toSpliced(1, 1);
console.log(ard);

arr.push("Mike");
let arf = arr.slice(2);
console.log(arf);
console.log(String(arf));
console.log(arf.toString());

// let names = window.prompt("What is your name?")
// let age = window.prompt("How old are you?")
// let pn = window.prompt("What is your pronoun?")
// let nature = window.prompt("Are you happy, yes or no?")

// console.log(
// `${names} is ${age} years old. And ${nature}, ${pn} is happy.`
// )

// const myName = window.prompt("What is your name?")

// const myAge = window.prompt("How old are you?")

// let proNound = window.prompt("What is your pronoun?")

// let namE = window.prompt("What is your name?")
// let age = window.prompt("How old are you?")

// document.getElementById("mainName").textContent = `${namE}`

// document.getElementById("mainName").textContent = "Elelenwo"

// .concat()

// let pg = 3
// pg++
// console.log(pg)

// document.getElementById("agE").textContent = `${age}`

// let pNoun = document.getElementById("pN").textContent = ``

// let namE = window.prompt("What is your name?")

// document.getElementById("peace").textContent = `${namE} is hot`

const rd = Math.random() * 1000000;
// console.log(rd)

let rr = Math.floor(rd);
console.log(rr);

// const a = 12
// const b = 2
// let d = a/b
// let e = a/b % 4
// let f = 3 * e

// console.log(typeof (f == 6))

// if (f == 6 || e == 2 && d == 3){
//     console.log("You are brilliant!")
// }
// else {
//     console.log("At least one calculation of yours is wrong.")
// }

// console.log(`d = ${d}`)
// console.log(`e = ${e}`)
// console.log(`f = ${f}`)

// let chief
// chief = ["Abel", "Ben", "Brian", "Bryan", "Blake"]
// chief = chief.reverse()
// console.log(chief)

// const click = document.getElementById("clicker")
// click.textContent = "Tap me"

// click.onclick = function(){
//     document.getElementById("label").textContent = "Welcome, User!"
//     document.getElementById("clicker").textContent = "Tap on the text below"
// }

// document.getElementById("label").onclick = function(){
//     document.getElementById("label").textContent = null
//     click.textContent = "Tap me"
// }

// const a = 11
// const b = 5
// const c = a - b - 1

// if (a == 1 || b !== 5 && c == 11) {
//     console.log("Okay")
// }

// else if (c == b) {
//     console.log("Still okay")
// }

// else {
//     console.log("Not okay")
// }

// console.log((a == 1 || b !== 5 && c == 11)? "Okay" : "Not okay")

let a = ["Peace", "" + "Hot", "" + "Chisom"];
console.log(a);
a.push("" + "Earnest");
a[1] = "Lawry";
console.log(a);
// document.getElementById("label").textContent = a[2]

a.pop();
console.log(a);

a.shift();
console.log(a);

a.unshift("Peace");
a.unshift(26);
a.push(26);
console.log(a);

a.slice();
console.log(a);

let b = a.includes(26, 1);
console.log(b);

a.reverse();
console.log(a);

let numb = document.getElementById("numb");
let minus = document.getElementById("minus");
let cancel = document.getElementById("cancel");
let plus = document.getElementById("plus");

let label = 0;

numb.textContent = label;
console.log(typeof label);

// if(label < 9){
//     numb.textContent = "0"+label
// }
// else{
//     numb.textContent = label
// }

minus.onclick = function () {
  label--;
  numb.textContent = label;
};
plus.onclick = function () {
  label++;
  numb.textContent = label;
};
cancel.onclick = function () {
  label = 0;
  numb.textContent = label;
};

// h1 = window.prompt("What is Ben's age?")
// h2 = window.prompt("What is Vicky's age?")
// h3 = window.prompt("What is Grace's age?")
// h4 = window.prompt("What is Earnest's age?")
// h5 = window.prompt("What is Chimobi's age?")
// h6 = document.getElementById("h6")

// h6 = document.getElementById("h6")
// // const num = 0
// const lat = window.prompt("Put a random number")

// function solve(){
//     let num = `${lat}` % 9 * 4 / 2
//     h6.textContent = num
// }
// solve()

const endGame1 = document.getElementById("endGame1");
const endGame2 = document.getElementById("endGame2");
const endGame3 = document.getElementById("endGame3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function addNumbers(a, b) {
  endGame1.textContent = a;
  endGame2.textContent = b;
  endGame3.textContent = a + b;
  console.log(a + b);
}

function subtractNumbers(a, b) {
  endGame1.textContent = a;
  endGame2.textContent = b;
  endGame3.textContent = a - b;
  console.log(a - b);
}

btn1.addEventListener("click", function () {
  addNumbers(3, 3);
});

btn2.addEventListener("click", function () {
  subtractNumbers(12, 9);
});

function ab(a, b) {
  return a * b;
}
console.log(ab(2, 3));

function createNumber(a) {
  console.log("Hello");
  return a();

  // return "Hello"
  // callback();
}

function anotherFunction() {
  console.log("Call back");
  return;
  // callback();
}

createNumber(anotherFunction);

let fi = document.getElementById("place");
let fii = document.getElementById("dance");

const naMe = "Earnest";
fi.textContent = naMe;
fii.addEventListener("click", function () {
  ad.textContent = "Chidozirim";
});

// function bel(a, x){
//     console.log(a + x)
// }

// bel(2, 3)

const judge = function () {
  console.log("Rimeka");
};

// function george(judge){
//     judge();
//     console.log(`Rimeka to the world`)
// }

// george(judge)

function slogan(rim) {
  rim();
  rim();
  rim();
}

function say() {
  console.log("Rim");
}

slogan(say);

// function say(firstName) {
//     return `Hello ${firstName}!`
// }
// const firstName = window.prompt("What is your first name?")
// let read = say(firstName)
// console.log(read)

function greetName() {
  let time = 12;
  var time2 = 23;
  if ((time = 12)) {
    // var time2 = 23
    console.log(time2);
    return time2;
  } else console.log(time2 + 2);
  // console.log(time2)
}

greetName();

const fixName = (a, b) => console.log("Benedict") + console.log(a + b);
fixName(2, 3);

function fixName2() {
  console.log("Benedicta");
}
fixName2();

// const clas = [
//     {name: "Joy", desc: "She is cheerful."},
//     {name: "Maxwell", desc: "He is elegant."},
//     {name: "Chibuike", desc: "He is an igbo man."},
//     {name: "Favour", desc: "she is light-skinned."},
//     {name: "Jacob", desc: "He is quiet."},
//     {name: "Chief", desc: "The man get money well."},
// ]

// let classE = document.getElementById("class")

// let input = window.prompt("Input user's name or class number here:")
// // input = 0

// const clasOne = `This user's name is ${clas[0].name}. ${clas[0].desc}`
// const clasTwo = `This user's name is ${clas[1].name}. ${clas[1].desc}`
// const clasThree = `This user's name is ${clas[2].name}. ${clas[2].desc}`
// const clasFour = `This user's name is ${clas[3].name}. ${clas[3].desc}`
// const clasFive = `This user's name is ${clas[4].name}. ${clas[4].desc}`
// const clasSix = `This user's name is ${clas[5].name}. ${clas[5].desc}`

// if(input == 0 || input == clas[0].name){
//     console.log("User 0 was accessed.")
//     classE.textContent = clasOne
// }
// else if(input == 1 || input == clas[1].name){
//     console.log("User 1 was accessed.")
//     classE.textContent = clasTwo
// }
// else if(input == 2 || input == clas[2].name){
//     console.log("User 2 was accessed.")
//     classE.textContent = clasThree
// }
// else if(input == 3 || input == clas[3].name){
//     console.log("User 3 was accessed.")
//     classE.textContent = clasFour
// }
// else if(input == 4 || input == clas[4].name){
//     console.log("User 4 was accessed.")
//     classE.textContent = clasFive
// }
// else if(input == 5 || input == clas[5].name){
//     console.log("User 5 was accessed.")
//     classE.textContent = clasSix
// }
// else{
//     console.log("This user is not registered in our class.")
//     classE.textContent = "User does not exist."
// }

// const can = (a, b) => console.log("Obiwendu") + console.log("Obiwandu") + (classE.textContent = "Obinna") + (c = a+b/2) + console.log(c)
// can(2, 4)

function gim(a) {
  // console.log("Ewoo")
  if (a <= 0) {
    console.log("Ewoo");
    return;
  }
  console.log(a);
  gim(a - 1);
}
gim(4);

// Program to countdown till 1

// recursive function
function counter(count) {
  document.getElementById("class").textContent = count;

  if (count > 1) {
    count--;
    counter(count);
  } else {
    return;
  }
}

// access function
counter(30);

const someArray = [2, 4, 5, 6, 9];
// console.log(someArray)
// let g = someArray[0] + someArray[1] + someArray[2] + someArray[3] + someArray[4]
// console.log(g)

function sumOfArray(n) {
  const someArray = [2, 4, 5, 6, 9];
  if (n.length === 0) {
    console.log("g");
    return 0;
  }
  // console.log(n)
  // sumOfArray(n)
  return n[0] + sumOfArray(n.slice(1));
}
console.log(sumOfArray(someArray));

let gif = {
  name: function () {
    console.log("Benjamin unalived himself using a blunt razorblade");
  },
};
gif.name();

let gif2 = {
  name() {
    console.log("Benjamin unalived himself using a blunt razorblade");
  },
};

gif2.name();

//forEach

// syntax for forEach: .forEach(function(element, index, array){})

// .forEach(function(element, index, array){})

const fruits = ["mango", "cherry", "pear", "apple", "citrus"];

fruits.forEach(function (a, b, c) {
  // console.log(a, "is at the index of", b, "inside the", c, "array")
  console.log(`${a} is at the index of ${b} inside the ${c} array`);
});

const products = [
  {
    name: "Laptop",
    price: 1000,
  },
  {
    name: "Phone",
    price: 600,
  },
  {
    name: "Tablet",
    price: 400,
  },
];

products.forEach(function (a) {
  let disc = a.price * 0.5;
  console.log(
    `The price for ${a.name} is ${a.price}. The discount price is ${disc}`
  );
});

console.log(products);

products.forEach(function (b) {
  b.disc = b.price * 0.5;
  console.log(
    `The price for ${b.name} is ${b.price}. The discount price is ${b.disc}`
  );
});

console.log(products);

//Map function

function createeCounter() {
  let count = 4;

  return function () {
    return count++;
  };
}
const gii = createeCounter();

console.log(gii());

function createCounter(n) {
  return function () {
    return n--;
  };
}

// Usage:
const counting = createCounter(9);

console.log(counting());
console.log(counting());
console.log(counting());

const gert = [9, 8, 7, 6, 5];
let sum = 0;
for (let e of gert) {
  sum += e;
}
console.log(sum);

const gret = [2, 3, 4, 2];
let surm = 0;
gret.map((i) => (surm += i));
console.log(surm);

const nep = [
  { name: "Chidi", class: "ss2" },
  { name: "Cynthia", class: "ss2" },
  { name: "Christopher", class: "ss2" },
];

nep.forEach(function (a, b, c) {
  let g = `${a.name} is in ${a.class}.`;
  console.log(g);
});

// Map function

const users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

const userFullnames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(userFullnames);
//

const jef = [
  { firstName: "Chris", lastName: "Dike" },
  { firstName: "Adanna", lastName: "Dike" },
];
console.log(jef);
const jeff = jef.map((ele) => `${ele.firstName} ${ele.lastName}`);
console.log(jeff);

fruits.map(function (element, dex, ray) {
  console.log(element + 1);
});

const fruit = fruits.map(function (element, dex, ray) {
  return element + 1;
});
console.log(fruit);

const fruitCheck = fruits.map((el) => el + 1);
console.log(fruitCheck);

const people = [
  { name: "Ragnarok", desc: "He is Ragnarok" },
  { name: "Odin", desc: "He is Odin" },
  { name: "Locki", desc: "He is Locki" },
  { name: "Thor", desc: "He is Thor" },
];
const peeps = people.map((e) => `${e.name}`);
console.log(peeps);

// Filter function - Assignment 12/11/2024

// const ask = window.prompt("Input name:");
// const fil = people.filter((e) => {
//   if (ask === e.name) {
//     return e.desc;
//   }
// });
// console.log(fil);
// const fill = fil.map((e) => `${e.desc}`);
// console.log(...fill);

// Map function

const summ = [2, 3, 8, 3];
let srum = 0;
const summation = summ.map((e) => (srum += e));
console.log(srum);
console.log(summation);

// Find function

const summi = summ.find((e) => {
  return e > 5;
});
const summit = summ.find((e) => e >= 3);
const summitt = summ.filter((e) => e >= 3);
console.log(summi);
console.log(summit);
console.log(summitt);

// Rest parameters

// makes use of (...a) - rest operator

function para(...a) {
  console.log(...a);
}
para(1, 2, 3, 4);

// Spread in objects, array literal and function calls

const nume = [2, 5, 3, 8];
const numes = [1, 3, 4, 7];
console.log(...nume, ...numes);

// Array destructuring

const newTerm = ["flair", "skill", "technical", "tactical"];
const [aa, bb, cc, dd] = newTerm;
console.log(bb);

// Object destructuring

const newTee = {
  firstName: "Earnest",
  lastName: "Jarlath",
};

// const ee = newTee.firstName
// const ef = newTee.lastName
// console.log(ef)
const { firstName, lastName } = newTee;
console.log(firstName);
console.log(lastName);

// Assignment 12/11/2024

const user = {
  id: 1,
  profile: {
    username: "John Doe",
    locat: "New York",
  },
};
const { id } = user;
console.log(id);
const { username, locat } = user.profile;
console.log(username);
console.log(locat);

// End of assignment 12/11/2024

const jb = [1, 2, 3, 4, 5];
sut = 0;
const jbb = jb.map((a) => (sut += a));
console.log(jb);
console.log(jbb);
console.log(sut);

// My trial

// const namee = document.getElementById("namee")
// const pass = document.getElementById("pass")
// const nameBtn = document.getElementById("nameBtn")
// const ans = document.getElementById("ans")

// const inputName = window.prompt("Enter name:")
// const inputMail = window.prompt("Enter email:")
// const inputPass = window.prompt("Enter password:")
// window.alert("You've successfully registered an account.")
// const file = [
//     {
//         name: inputName,
//         email: inputMail,
//         password: inputPass
//     }
// ]
// console.log(file)

// nameBtn.addEventListener("click", function(){
//     const namee = document.getElementById("namee").value
//     const pass = document.getElementById("pass").value
//     n = `${file[0].name} just checked their account.`

//     if(namee === file[0].email && pass === file[0].password){
//         ans.style.color = "#0f0"
//         ans.textContent = "You've successfully logged in."
//         console.log(n)
//     }
//     else if(namee === "" || pass === ""){
//         ans.style.color = "#ff0"
//         ans.textContent = "Missing credentials!"
//     }
//     else{
//         ans.style.color = "#f00"
//         ans.textContent = "Wrong credentials!"
//     }
// })

// End of my trial

// Destructuring params

// without destructuring
function greet(user) {
  return `Hello ${user.name} your age is ${user.age}`
}
const use = greet({ name: "Vivian", age: 20 });
console.log(use);

// without destructuring
// function greet2({ name, age }) {
//   return `Hello ${name} your age is ${age}`;
// }
// const use2 = greet2({ name: "Vicky", age: 25 });
// console.log(use2);


//  Default params
function greet2(name = "Vicky", age = 30) {
  return `Hello ${name} your age is ${age}`;
}
const use2 = greet2();
console.log(use2);

// Reduce functions
// Reduce function: a javascript method that iterates through each element in an array and applies a callback function, accumulating a single output, mostly used for summing array, flattening array, etc.

const red = [2, 3, 6, 3]
const red1 = red.reduce(function(ac, cv){
  return ac + cv
}, 0)
console.log(red1)