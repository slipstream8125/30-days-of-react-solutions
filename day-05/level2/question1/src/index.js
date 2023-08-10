import React from 'react';
import ReactDOM from 'react-dom';
import html from './images/HTML.png'
import css from './images/css.png'
import js from './images/js.png'
import reactimage from './images/react.png'

const rootElement = document.getElementById('root');
const Header= (props) => ( 
  <div><h1>{props.data.headertext}</h1></div>
)
const Images= () => (
  <div class='flexbox'>
    <div><img src={html} alt='html logo'></img></div>
    <div><img src={css} alt="css logo"></img></div>
    <div><img src={js}alt ="js logo"></img></div>
    <div><img src={reactimage}alt="react logo"></img></div>
  </div>
)
const App= () => {
  const data={
    headertext : 'Front End Technologies',
  }
  return(
    <div>
      <Header data={data}/>
      <Images/>
    </div>
  )
}
ReactDOM.render(<App/>,rootElement)
