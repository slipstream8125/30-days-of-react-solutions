const prompt = require("prompt-sync")({ sigint: true });
const pad2 = require("pad2");
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

