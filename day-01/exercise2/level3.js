const prompt = require("prompt-sync")({ sigint: true });
var Enum = require('enum');
//Q1.
function capitalize(month){
  month=month[0].toUpperCase()+month.slice(1).toLowerCase();
  return month;
}
var daysofMonth=new Enum({
  'january' : 31,
  'february' : 28,
  'march' : 31,
  'april' : 31,
  'may' : 31,
  'june' : 30,
  'july' : 31,
  'august' : 31,
  'september' : 31,
  'october' : 31,
  'november' : 30,
  'december' : 31
});
function monthtoDays(month,day){
  switch(month.toLowerCase()){
      case day.january.key:
        days=day.january.value;
        break;
      case day.february.key:
        days=day.february.value;
        break;
      case day.march.key:
        days=day.march.value;
        break;
      case day.april.key:
        days=day.april.value;
        break;
      case day.may.key:
        days=day.may.value;
        break;
      case day.june.key:
        days=day.june.value;
        break;
      case day.july.key:
        days=day.july.value;
        break;
      case day.august.key:
        days=day.august.value;
        break;
      case day.september.key:
        days=day.september.value;
        break;
    case day.october.key:
        days=day.october.value;
        break;
    case day.september.key:
        days=day.september.value;
        break;
    case day.november.key:
        days=day.november.value;
        break;
    case day.december.key:
        days=day.december.value;
        break;
  }
  return days;
}

console.log("Question 1 :");
var month=prompt("Enter a month : ");
var days=monthtoDays(month.toLowerCase(),daysofMonth);
console.log(capitalize(month)+" has "+days+" days");
//Q2.
var daysofmonth=new Enum({
  'january' : 31,
  'february' : 29,
  'march' : 31,
  'april' : 31,
  'may' : 31,
  'june' : 30,
  'july' : 31,
  'august' : 31,
  'september' : 31,
  'october' : 31,
  'november' : 30,
  'december' : 31
});
console.log("Question 2 :");
var month=prompt("Enter a month : ");
var days=monthtoDays(month.toLowerCase(),daysofmonth);
console.log(capitalize(month)+" has "+days+" days");

