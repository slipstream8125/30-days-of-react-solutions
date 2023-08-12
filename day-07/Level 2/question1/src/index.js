import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

function check(n){
  var isprime=0;
  var oddeven=0;
  if(n===0||n===1){
    isprime=1;
  }
  for (var i = 2; i <= n - 1; i++)
    if (n % i === 0) {
      isprime=1;
      break;
    }
  if(n%2===1){
    oddeven=1;
  }
  if(isprime===0){
    return '#fd5e53';
  }
  else if(oddeven===0){
    return '#21bf73';
  }
  else{
    return '#fddb3a';
  }
}

const Numbers=({numbers})=>{
  const number=numbers.map((numbers) => <div class='box' style={{backgroundColor: check(numbers)}}><p>{numbers}</p></div>)
  return number
}

class App extends React.Component{
  render(){
    var numbers1=[];
    var numbers2=[];
    var numbers3=[];
    var numbers4=[];
    for(var i=0;i<=7;i++){
      numbers1.push(i);
    }
    for( i=8;i<16;i++){
      numbers2.push(i);
    }
    for( i=16;i<24;i++){
      numbers3.push(i);
    }
    for(i=24;i<=31;i++){
      numbers4.push(i);
    }
    return(
    <div>
    <h1> 30 Days of React</h1>
    <p>Number Generator</p>
      <div class='inline'>
      <div class='flexbox'>
        <Numbers numbers={numbers1}/>
      </div>
      <div class='flexbox'><Numbers numbers={numbers2}/></div>
      <div class='flexbox'><Numbers numbers={numbers3}/></div>
      <div class='flexbox'><Numbers numbers={numbers4}/></div>
      </div>
      </div>
    )
  }
}
ReactDOM.render(<App/>,rootElement)