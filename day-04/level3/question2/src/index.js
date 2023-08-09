import React from 'react';
import ReactDOM from 'react-dom';
import image from './images/img_avatar.png'

const rootElement = document.getElementById('root');
const Image=()=>(
  <div>
    <img src={image} alt="profile picture"></img>
  </div>
)
const Name=()=>(
  <div>
    <h1>ASABENAH YETAYEH</h1>
    <p>Senior Developer, Finland</p>
    <h1>Skills</h1>
  </div>
)

const Skills= ()=>(
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
const App=()=>(
  <div>
    <Image/>
    <Name/>
    <Skills/>
  </div>
)
ReactDOM.render(<App/>,rootElement);