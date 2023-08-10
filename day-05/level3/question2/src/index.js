import React from 'react';
import ReactDOM from 'react-dom';
import image from './images/img_avatar.png'

const rootElement = document.getElementById('root');
const Image=()=>(
  <div>
    <img src={image} alt="profile picture"></img>
  </div>
)
const Name=(props)=>(
  <div>
    <h1>{props.data.header1}</h1>
    <p>{props.data.ptext}</p>
    <h1>{props.data.header2}</h1>
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
const App=()=>{
  const data={
    header1 : 'ASABENAH YETAYEH',
    ptext : 'Senior Developer, Finland',
    header2 : 'Skills',
  }
  return(
   <div>
      <Image/>
       <Name data={data}/>
      <Skills/>
   </div>
  )
}
ReactDOM.render(<App/>,rootElement);