import React from 'react';
import ReactDOM from 'react-dom';
import html from './images/HTML5_Badge.png';
import css from './images/css3.png';
import js from './images/js.png';
import reactImage from './images/react.png' 
const header=(
  <div>
    <h1 align='center'></h1>
  </div>
)
const root = (
  <div>
    <div><h1 align="center">Front-end Technologies</h1></div>
  <div class="flex-container">
    <div><img src={html}></img></div>
    <div><img src={css}></img></div>
    <div><img src={js}></img></div>
    <div><img src={reactImage}></img></div>
  </div>
  </div>
);
const app=(
  <div>
    {header}
    {root}
  </div>
);
const rootElement=document.getElementById('root');
ReactDOM.render(root,rootElement);
