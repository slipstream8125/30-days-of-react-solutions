import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const Header=(props) =>(
  <div>
    <h1>
      {props.data.header}
    </h1>
    <p>{props.data.followup}</p>
  </div>
)
const Inputs = () => (
  <div class="flexbox">
    <div><input type='text' value="First Name"></input></div>
    <div><input type='text' value="Last Name"></input></div>
    <div><input type='email' value="Email"></input></div>
  </div>
)
const Button=(props) =>(
  <div>
    <button>
      {props.data.header}
    </button>
  </div>
)
const App = () =>{
  const headerdata={
    header:"Subscribe",
    followup:"Sign up with your email address to recieve news and updates",
  }
  return(
   <div>
     <Header data={headerdata}/>
     <Inputs/>
     <Button data={headerdata}/>
   </div>
  )
}
ReactDOM.render(<App />,rootElement)