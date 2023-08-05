const prompt=require("prompt-sync")({sigint:true});
// Q1.
console.log("Question 1 : ");
words="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function userIdGeneratedByUser(){
  var wordlen=prompt("Enter Word Length : ");
  var wordnum=prompt("Enter no of ids to be generated : ");
  var arr=[];
  for(i=0;i<wordnum;i++){
    var word="";
    for(j=0;j<wordlen;j++){
        word+=words.charAt(Math.round(Math.random()*words.length));
    }
    arr.push(word);
  }
  return arr;
}
console.log(userIdGeneratedByUser());
//Q2.
console.log("Question 2 : ");
function generateColors(type,amount){
  const hexwords="abcdef1234567890";
  var colors=Array();
  if(type=='hexa'){
    for(i=0;i<amount;i++){
      word="";
      for(j=0;j<6;j++){
        word+=hexwords.charAt(Math.round(Math.random()*hexwords.length));
      }
      colors.push('#'+word);
    }
  }
  else if(type=='rgb'){
    for(i=0;i<amount;i++){
      var val1,val2,val3;
      val1=(Math.round(Math.random()*255));
      val2=(Math.round(Math.random()*255));
      val3=(Math.round(Math.random()*255));
      colors.push('rgb('+val1+", "+val2+", "+val3+")");
    }
  }
  return colors;
}
var type=prompt("Enter the type of colors needed : ");
var amount=prompt("Enter the number of colors needed : ");
console.log(generateColors(type,amount));
// Q3.
console.log("Question 3: ");
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
var array=Array();
var length=prompt("Enter array length : ");
console.log("Enter values : ");
for(i=0;i<length;i++){
  array[i]=prompt();
}
console.log(shuffleArray(array));
//Q4.
console.log("Question 4 : ");
function factorial(number){
  var fact=1;
  for(i=1;i<=number;i++){
    fact*=i;
  }
  return fact;
}
console.log("The factorial is : "+factorial(prompt("Enter number : ")));
//Q5.
console.log("Question 5 : ");
function isEmpty(word){
  if(word.length==0){
    return "Empty";
  }
  else{
    return "Not Empty";
  }
}
console.log("The parameter is : "+isEmpty(prompt("Enter Word : ")));
//Q6.
console.log("Question 6 : ");
function average(array){
  var isnan=0;
  var average=0;
  for(i=0;i<array.length;i++){
    if(isNaN(array[i])){
      return 'Not a Number';
    }
    else{
      average+=array[i];
    }
  }
  return average/array.length;
}
console.log(average([1,2,3,4,5]));
console.log(average('a',1,2,3));
