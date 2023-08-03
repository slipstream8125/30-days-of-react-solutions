const prompt = require("prompt-sync")({ sigint: true });
const pad2 = require("pad2");
const crypto = require("crypto");
// Question 1
console.log("Question 1 : ");
function solveQuadratic(a = 0, b = 0, c = 0) {
  var arr = new Array();
  var val1 = ((-b + Math.sqrt(b * b) - 4 * a * c) / 2) * a;
  var val2 = ((-b - Math.sqrt(b * b) - 4 * a * c) / 2) * a;
  if (val1 === val2) {
    arr.push(val1);
  } else {
    arr.push(val1, val2);
  }
  return arr;
}
console.log(solveQuadratic(1, -1, 2));

// Question 2
console.log("Question 2 : ");
function printArray(arr) {
  for (i in arr) {
    console.log(arr[i]);
  }
}
var arr = [1, 2, 3, 4, 5];
printArray(arr);

//Q3.
console.log("Question 3 : ");
function showDateTime() {
  const date = new Date();
  const day = pad2(date.getDate());
  const month = pad2(date.getMonth());
  const year = pad2(date.getFullYear());
  const hours = pad2(date.getHours());
  const minutes = pad2(date.getMinutes());
  console.log(day + "/" + month + "/" + year + " " + hours + ":" + minutes);
}
showDateTime();

//Q4.
console.log("Question 4 : ");
function swapValues(x, y) {
  var temp=x;
  x=y;
  y=temp;
  return [x,y];
}
console.log(swapValues(1,2));
//Q5.
console.log("Question 5 : ");
function reverseArray(array){
  var newarr=Array();
  for(i=1;i<=array.length;i++){
    newarr.push(array[array.length-i]);
  }
  return newarr;
}
console.log(reverseArray([1,2,3,4,5]));
// Q6.
console.log("Question 6 : ");
var inp=prompt("Enter Characters : ");
var array=inp.split(" ");
array[0]=array[0].slice(0,1).toUpperCase()+array[0].slice(1);
console.log(array);
// Q7.
console.log("Question 7 : ")
array=["Mangoes","Apples","Strawberries"];
function addItem(item){
  array.push(item);
  return array;
}
console.log(addItem(prompt("Enter name of fruit to add : ")));
// Q8.
console.log("Question 8 : ");
function removeItem(item){
  var index=array.indexOf(item);
  array.splice(index,1);
  return array;
}
console.log(removeItem(prompt("Enter name of fruit to remove : ")));

//Q9.
console.log("Question 9 : ");
function evensAndOdds(number){
  var even=0;
  var odd=0;
  for(i=0;i<=number;i++){
    if(i%2==0){
      even++;
    }
    else{
      odd++;
    }
  }
  console.log("The number of odds are : "+odd);
  console.log("The number of evens are : "+even);
}
evensAndOdds(100);
//Q10.
console.log("Question 10 : ");
function sum(){
  var sum=0;
  for(i=0;i<arguments.length;i++){
    sum+=arguments[i];
  }
  return sum;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
// Q11.
console.log("Question 11 : ");
console.log(crypto.randomBytes(4.5).toString('hex'));
