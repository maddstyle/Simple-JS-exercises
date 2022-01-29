// creating variables 
if( true ) {
  var name = "Ryan";
  alert(name);
}

let fname = "Ryan";
let lname = "D";
let age = prompt("Guess Ryan's age")

// old way
// let result = fname + '' + lname + 'is' + 'age' + 'years old';
// alert(result);

// now concatenation
let result = `${fname} ${lname} is ${age} years old`;
alert(result);

// function greeting(message){
//   return alert(`${message} everyone!`);
// }

// Arrow function
let greeting = message => alert(`${message} everyone!`);

greeting('Good morning');

let createBlog = (title, body) => {
  if (!title) {
    throw new Error('A title is required');
  }
  if (!body) {
    throw new Error('Body cannot be empty');
  }
  return alert(`${title} - ${body}`);
};

createBlog('Blog Title', 'Blog body');

// word this is key word reffering to the window object in the function
// function sayHi(){

// }

// console.log(this);

let nepal = {
  // add property
  mountains: ['Everest', 'Fish Tail', 'Annapurna'],
  // add method
  printWithDash: function(){
    setTimeout(() => console.log(this.mountains.join(" - ")), 3000);
  }
}

nepal.printWithDash();

// Destructuring
let thingsToDo = {
  morning: "Exercise",
  afternoon: "Work",
  evening: "Code",
  night: ["Sleep", "Dream"]
}

let {morning, afternoon} = thingsToDo;
morning = "Run";

console.log(morning, ' - ', afternoon);

let uniStudent = ({name, university}) => {
  console.log(`${name} from ${university}`)
}

uniStudent({
  name: "Ryan",
  university: "University of Sydney",
});

// Destructuring an array
let [, , mountains] = ['Everest', 'Fish Tail', 'Annapurna'];
console.log(mountains);

// Restructuring
let adventureClimbing = {
   mountName: 'Everest',
   height: 8848,
   output() {
     console.log(`Mt. ${this.mountName} is ${this.height} meters tall.`);  
  }
};
adventureClimbing.output();

// Spread operator array
const worldMoutains = ['Everest', 'Fish Tail', 'Annapurna'];
const japanMountains = ['Fuji'];

let allMountains = [...worldMoutains, ...japanMountains];
console.log(allMountains);

// Soread operator object
const day = {
  breakfast: 'toast with milk',
  lunch: 'rice with chicken',
}

const night = {
  dinner: 'noodle soup',
  dessert: 'ice cream',
}

let picnic = {...day, ...night};

console.log(picnic);

// Spread operator as rest
const rivers = ['Amazon', 'Nile', 'Ganga'];

let [first, ...rest] = rivers;

console.log(rest);

// Classes - the old way

// we could create a function and add methods on the function object using the prototype

// in JS functions are objects - inherit the behaviour of object

// wherever you create an object, the prototype is also created behing the scenes

// function Holiday(destination, days) {
//   this.destination = destination;
//   this.days = days;
// }

// Holiday.prototype.info = function(){
//   console.log(this.destination + " | " + this.days + " days");
// }

// let egypt = new Holiday("Egypt", 30)
// console.log(egypt.info())

//--------------------------------------------------------------------------------------------

// Classes - the new way

// super class/parent class
class Holiday {
  constructor(destination, days){
    this.destination = destination;
    this.days = days;
  }
  info(){
    console.log( `${this.destination} will take ${this.days} days.`);
  }
}

const trip = new Holiday("Slovakia", 30);

console.log(trip.info());

// sub class/children class
class Expedition extends Holiday {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }

  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripWithGear = new Expedition("Everest", 30, ["Jacket", "Trecking Shoes", "Camera"]);
tripWithGear.info();