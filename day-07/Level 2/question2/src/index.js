import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

function hexaColor(){
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const Numbers=({numbers})=>{
  var hex;
  const number=numbers.map((numbers) => <div class='box' style={{backgroundColor: hex=hexaColor()}}><p>{hex}</p></div>)
  hex=hexaColor();
  return number
}

class App extends React.Component{
  render(){
    var numbers=[];
    for(var i=0;i<=7;i++){
      numbers.push(i);
    }
    return(
    <div>
    <h1> 30 Days of React</h1>
    <p>Hexadecimal Colors</p>
      <div class='inline'>
      <div class='flexbox'>
        <Numbers numbers={numbers}/>
      </div>
      <div class='flexbox'><Numbers numbers={numbers}/></div>
      <div class='flexbox'><Numbers numbers={numbers}/></div>
      <div class='flexbox'><Numbers numbers={numbers}/></div>
      </div>
      </div>
    )
  }
}
ReactDOM.render(<App/>,rootElement)