//Q1.
console.log("Question 1 : ");
const dog={

}
//Q2.
console.log("Question 2 : ");
console.log(dog);
//Q3.
console.log("Question 3 : ");
dog.name='Topher';
dog.legs=4;
dog.color='golden';
dog.age=10;
dog.bark = function(){
  return 'woof woof';
}
console.log(dog);
//Q4.
console.log("Question 4 :")
console.log("Name : "+dog.name);
console.log("Legs : "+dog.legs);
console.log("Age : "+dog.age);
console.log("Color : "+dog.color);
console.log("Bark : "+dog.bark());
//Q5.
console.log("Question 5 : ");
dog.breed='Golden Retriever';
dog.getDogInfo = function(){
  console.log("Name : "+dog.name);
  console.log("Legs : "+dog.legs);
  console.log("Age : "+dog.age);
  console.log("Color : "+dog.color);
  console.log("Bark : "+dog.bark());
  console.log("Breed : "+dog.breed);
}
dog.getDogInfo();
