const prompt=require("prompt-sync")({sigint:true});
// Q1.
console.log("Question 1 : ");
class Animal{
  constructor(name,age,color,legs){
    this.name=name;
    this.age=age;
    this.color=color;
    this.legs=legs;
  }
  getInfo(){
    console.log("Name : "+this.name);
    console.log("Age : "+this.age);
    console.log("Color : "+this.color);
    console.log("No. of Legs : "+this.legs);
  }
}
const a=new Animal("Ram",13,'Black',4);
a.getInfo();

class Dog extends Animal{
  constructor(name,age,color,legs){
    super(name,age,color,legs);
  }
  getInfo(){
    super.getInfo();
  }
}
class Cat extends Animal{
  constructor(name,age,color,legs){
    this.name=name;
    this.age=age;
    this.color=color;
    this.legs=4;
  }
  getInfo(){
    super.getInfo();
  }
}

