//Q2.
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text=text.replace(/[^\w\s']|_/g,"").replace(/\s+/g," ");
const array=text.split(" ")
console.log(array)
console.log(array.length)
//Q3.
const shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.push('Meat')
if(shoppingCart.includes('Sugar')){
}
else{
  shoppingCart.push('Sugar');
  console.log(shoppingCart);
}
var index=shoppingCart.indexOf('Honey');
shoppingCart.splice(index,1);
console.log(shoppingCart);
index=shoppingCart.indexOf('Tea');
shoppingCart[index]='Green Tea';
console.log(shoppingCart);
//Q4.
const c=require('./q1/countries.js');
const countries=c.countries;
if(countries.includes('Ethopia')){
  console.log("ETHOPIA");
}
else{
  countries.push('Ethopia');
  console.log(countries);
}
//Q5.
const web=require('./q1/web_techs.js');
const webTechs=web.webTechs;
if(webTechs.includes('Sass')){
  console.log("Sass is a CSS preprocess");
}
else{
  webTechs.push('Sass');
  console.log(webTechs);
}
//Q6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);
