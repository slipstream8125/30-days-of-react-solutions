import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');


const HexaColor = (props) => <div style={{backgroundColor :props.data()}}>{props.data()}</div>

const App = () =>{
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
return(
    <div class="inline">
      <HexaColor data={hexaColor}/>
      <HexaColor data={hexaColor}/>
      <HexaColor data={hexaColor}/>
      <HexaColor data={hexaColor}/>
      <HexaColor data={hexaColor}/>
    </div>
  )
}
ReactDOM.render(<App/>,root);