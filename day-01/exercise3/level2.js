const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
//Q1.
console.log("Question 1 :");
var maxskills={email:null ,skills:[],age:null,isLoggedIn:null,points:null};
for (i in users){
  if(maxskills.skills.length<users[i].skills.length){
    maxskills=Object.assign({},users[i]);
  }
}
console.log(maxskills.email)
//Q2.
console.log("Question 2 : ");
var loggedIn=0,greaterThan=0;
for (i in users){
  if(users[i].isLoggedIn===true){
    loggedIn++;
  }
  if(users[i].points>=50){
    greaterThan++;
  }
}
console.log("Logged in Users : "+loggedIn);
console.log("Users with points >= 50 : "+greaterThan);
//Q3.
console.log("Question 3 :");
const mernStack=['MongoDB','Express','React','Node'];
var array=[]
var count=0;
for (i in users){
  for(j in users[i].skills){
    for(k=0;k<mernStack.length;k++){
      if(users[i].skills[j]===mernStack[k]){
        count++;
      }
    }
  }
  if (count>0){
    array.push(i);
    count=0;
  }
}
console.log(array);
// Q4.
console.log("Question 4 :");
for(i in users){
  users[i].name=i;
}
console.log(users);
//Q5.
console.log("Question 5 : ");
console.log(Object.keys(users['Paul']));
//Q6.
console.log("Question 6 :");
console.log(Object.values(users));
//Q7.
const countries={
  India : {
    name : 'India',
    capital : 'Delhi',
    population : '140 crores',
    languages : ['Hindi','Marathi','Kannada']
  },
  USA : {
    name : 'United States of America',
    capital : 'Washington DC',
    population : '33.19 crores',
    languages : ['English']
  }
}
console.log(Object.values(countries));
