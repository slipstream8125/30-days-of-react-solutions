import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div style={{backgroundColor :hexaColor()}}>{hexaColor()}</div>

const App = () =>(
  <div class="inline">
   <HexaColor/>
   <HexaColor/>
   <HexaColor/>
   <HexaColor/>
   <HexaColor/>
  </div>
)
ReactDOM.render(<App/>,root);