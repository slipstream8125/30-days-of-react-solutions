import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const Header=() =>(
  <div>
    <h1>
      Subscribe
    </h1>
    <p>Sign up with you email address to recieve news and updates</p>
  </div>
)
const Inputs = () => (
  <div class="flexbox">
    <div><input type='text' value="First Name"></input></div>
    <div><input type='text' value="Last Name"></input></div>
    <div><input type='email' value="Email"></input></div>
  </div>
)
const Button=() =>(
  <div>
    <button>
      Subscribe
    </button>
  </div>
)
const App = () =>(
  <div>
    <Header/>
    <Inputs/>
    <Button/>
  </div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />,rootElement)