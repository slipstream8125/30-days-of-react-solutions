import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import img from './images/img_avatar.png'


const rootElement = document.getElementById('root');
const image=(
  <div>
    <img src={img}></img>
  </div>
)
const name=(
  <div>
    <h1>ASABENAH YETAYEH</h1>
    <p>Senior Developer, Finland</p>
    <h1>Skills</h1>
  </div>
)

const skills=(
  <div class='flexbox'>
    <div>
      <Button variant="contained">HTML</Button>
    </div>
    <div><Button variant="contained">CSS</Button></div>
    <div><Button variant="contained">Sass</Button></div>
    <div><Button variant="contained">JS</Button></div>
    <div><Button variant="contained">React</Button></div>
    <div><Button variant="contained">Redux</Button></div>
    <div><Button variant="contained">Node</Button></div>
    <div><Button variant="contained">MongoDB</Button></div>
    <div><Button variant="contained">Python</Button></div>
    <div><Button variant="contained">Flask</Button></div>
    <div><Button variant="contained">Django</Button></div>
    <div><Button variant="contained">NumPy</Button></div>
    <div><Button variant="contained">Pandas</Button></div>
    <div><Button variant="contained">Data Analysis</Button></div>
  </div>
)
const app=(
  <div>
    {image}
    {name}
    {skills}
  </div>
)
ReactDOM.render(app,rootElement);
