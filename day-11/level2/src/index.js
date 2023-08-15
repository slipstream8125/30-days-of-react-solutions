// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    position: '',
  }
  randomPosition(){
    var i=Math.floor(Math.random()*720);
    var j=Math.floor(Math.random()*720);
    var pos=[i,j]
    console.log(pos)
    return pos
  }
  // triggered whenever the mouse moves
  handleMouseMove = () => {
    this.setState({ position:this.randomPosition() })

  }
  
  render() {
    return (
      <div>
        <div class="movingelement" onMouseMove={this.handleMouseMove} style={{position:"absolute",top:this.state.position[0],left:this.state.position[1]}}>
          <h1>Move mouse on me</h1></div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)