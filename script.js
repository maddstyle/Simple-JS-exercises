let userName = prompt("What is your name?");
alert("Nice to meet you " + userName);
console.log("Also, great to meet you " + userName);

let firstName = prompt("What is your name?");
let lastName = prompt("What is your last name?");
let age = prompt("How old are you?");
let fullName = firstName + " " + lastName;
console.log(`Your full name is ${fullName}`);
console.log(`And you are ${age} years old.`)

let age = prompt("How old are you?");
let howManyDays = age * 365;
alert(`Dude, you have been around for ${howManyDays} days!`);
console.log(36 * 365);

let age = 25;

if (age < 18){
    console.log("You are too young to enter!");
}
else if (age < 21){
    console.log("You can enter, but cannot drink!");
}
if (age < 0){
    console.log("Error!")
}
else if (age === 21){
    console.log("Happy Birthday!")
}
else if (age % 2 !== 0){
    console.log("Your age is odd!")
}

else {
    console.log("Come on in, you can drink.")
}
//age = 19; 