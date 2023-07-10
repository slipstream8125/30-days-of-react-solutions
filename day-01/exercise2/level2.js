const prompt = require("prompt-sync")({ sigint: true });
//Q1.
console.log("Question 1 : ");
var score=prompt("Enter score -> ");
var grade;
if(score<=100 && score >=90){
  grade = 'A';
}
else if(score>=70 && score < 90){
  grade = 'B';
}
else if(69>=score>=60){
  grade = 'C';
}
else if(59>=score>=50){
  grade = 'D';
}
else if(score < 50){
  grade = 'F';
}
console.log("Grade : "+grade);
// Q2.
console.log("Question 2 :");
var month = prompt("Enter month -> ");
var season;
switch (month.toLowerCase()){
  case 'september':
    season="Autumn";
    break;
  case 'october':
    season="Autumn";
    break;
  case 'november':
    season="Autumn";
    break;
  case 'december':
    season="Winter";
    break;
  case 'january':
    season="Winter";
    break;
  case 'february':
    season="Winter";
    break;
  case 'march':
    season="Spring";
    break;
  case 'april':
    season="Spring";
    break;
  case 'may':
    season="Spring";
    break;
  case 'june':
    season="Summer";
    break;
  case 'july':
    season="Summer";
    break;
  case 'august':
    season="Summer";
    break;
}
console.log('Season : '+season);
// Q3.
console.log("Question 3 :");
var day=prompt("What is the day today? ");
var dayType;
switch(day.toLowerCase()){
  case 'monday':
    dayType='working day';
    break;
  case 'tuesday':
    dayType='working day';
    break;
  case 'wednesday':
    dayType='working day';
    break;
  case 'thursday':
    dayType='working day';
    break;
  case 'friday':
    dayType='working day';
    break;
  case 'saturday':
    dayType='weekend';
    break;
  case 'sunday':
    dayType='weekend';
    break;
}
day=day.charAt(0).toUpperCase()+day.slice(1).toLowerCase();
console.log(day+" is a "+dayType);
