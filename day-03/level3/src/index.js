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
      <button>HTML</button>
    </div>
    <div><button>CSS</button></div>
    <div><button>Sass</button></div>
    <div><button>JS</button></div>
    <div><button>React</button></div>
    <div><button>Redux</button></div>
    <div><button>Node</button></div>
    <div><button>MongoDB</button></div>
    <div><button>Python</button></div>
    <div><button>Flask</button></div>
    <div><button>Django</button></div>
    <div><button>NumPy</button></div>
    <div><button>Pandas</button></div>
    <div><button>Data Analysis</button></div>
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