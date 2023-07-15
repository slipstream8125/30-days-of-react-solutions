const prompt = require("prompt-sync")({ sigint: true });
//Q1.
console.log("Question 1 : ");
const fullName = (firstName, lastName) => firstName + " " + lastName;
console.log(fullName("Dhruv", "Hatkar"));
//Q2.
console.log("Question 2 : ");
const addNumbers = (a, b) => a + b;
console.log(addNumbers(12, 13));
//Q3.
console.log("Question 3 : ");
const _areaOfCircle = (radius) => 3.14 * radius * radius;
var radius = prompt("Enter radius : ");
console.log("Area of Circle : ", _areaOfCircle(radius));
//Q4.
console.log("Question 4 : ");
const convertCelciustoFahrenheit = (celcius) => (celcius * 9) / 5 + 32;
var celcius = prompt("Enter temperature in celcius : ");
console.log(
  "Temperature in Fahrenheit : " + convertCelciustoFahrenheit(celcius)
);
//Q5.
console.log("Question 5 : ");
function weightCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (25 > bmi >= 18.5) {
    return "Normal Weight";
  } else if (25 <= bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
var bmi = prompt("Enter BMI : ");
console.log("Weight Category : " + weightCategory(bmi));
//Q6.
console.log("Question 6 : ");
function CheckSeason(month) {
  var Season;
  var Autumn = ["September", "October", "November"];
  var Winter = ["December", "January", "February"];
  var Spring = ["March", "April", "May"];
  var Summer = ["June", "July", "August"];
  if (Autumn.includes(month)) {
    Season = "Autumn";
  } else if (Winter.includes(month)) {
    Season = "Winter";
  } else if (Spring.includes(month)) {
    Season = "Spring";
  } else if (Summer.includes(month)) {
    Season = "Summer";
  }
  return Season;
}
var month = prompt("Enter month : ");
console.log("Season : " + CheckSeason(month));
