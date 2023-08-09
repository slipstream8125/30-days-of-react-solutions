import React from 'react';
import ReactDOM from 'react-dom';
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
      <button type="button" class="btn btn-info">HTML</button>
    </div>
    <div><button  type="button" class="btn btn-info">CSS</button></div>
    <div><button type="button" class="btn btn-info">Sass</button></div>
    <div><button type="button" class="btn btn-info">JS</button></div>
    <div><button type="button" class="btn btn-info">React</button></div>
    <div><button type="button" class="btn btn-info">Redux</button></div>
    <div><button type="button" class="btn btn-info">Node</button></div>
    <div><button type="button" class="btn btn-info">MongoDB</button></div>
    <div><button type="button" class="btn btn-info">Python</button></div>
    <div><button type="button" class="btn btn-info">Flask</button></div>
    <div><button type="button" class="btn btn-info">Django</button></div>
    <div><button type="button" class="btn btn-info">NumPy</button></div>
    <div><button type="button" class="btn btn-info">Pandas</button></div>
    <div><button type="button" class="btn btn-info">Data Analysis</button></div>
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