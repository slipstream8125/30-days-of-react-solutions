// Q1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages); //sort the ages
console.log(ages[0]); //min age
console.log(ages[ages.length - 1]); //max age
//median age
if (ages.length % 2 === 0) {
  console.log((ages[ages.length / 2] + ages[ages.length / 2 + 1]) / 2);
} else {
  console.log(ages[ages.length / 2 + 0.5]);
}
//average age
average = 0;
for (i = 0; i < ages.length; i++) {
  average += ages[i];
}
average /= ages.length;
console.log(average);
// Q2.
const countries = require("./countries.js").countries;
console.log(countries.slice(0, 10));
// Q3.
var i1 = 0;
var i2 = 0;
if (countries.length % 2 === 0) {
  i1 = countries.length / 2;
  i2 = countries.length / 2 + 1;
  console.log(countries.slice(i1, i2 + 1));
} else {
  i1=(countries.length + 1) / 2;
  console.log(countries[i1]);
}
