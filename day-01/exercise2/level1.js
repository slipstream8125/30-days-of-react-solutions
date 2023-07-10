//Q1.
const prompt = require("prompt-sync")({ sigint: true });
console.log("Question 1 : ");
var age = prompt("Enter your age -> ");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  var yearsLeft = 18 - age;
  console.log("You are left with " + yearsLeft + " years to drive");
}
//Q2.
console.log("Question 2 : ");
var age2 = prompt("Enter your age -> ");
if (age > age2) {
  console.log("I am " + (age - age2) + " years older than you");
} else if (age < age2) {
  console.log("You are " + (age2 - age) + " years older than me");
} else {
  console.log("We are the same age");
}
//Q3.
let a = 4;
let b = 3;
if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(b + " is greater than " + a);
}
let isgreater = true;
isgreater
  ? console.log(a + " is greater than " + b)
  : console.log(a + " is greater than " + b);
//Q4.
var number = prompt("Enter a number : ");
if (number % 2 == 0) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is an odd number");
}
