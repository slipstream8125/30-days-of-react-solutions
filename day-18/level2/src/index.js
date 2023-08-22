import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
    
  }
  fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  getlifespandata(){
    var lifespan;
    var alife=0;
    var avglif=0.00;
    for(var i=0;i<this.state.data.length;i++){
      lifespan=this.state.data[i].life_span.split(" - ");
      alife=(parseInt(lifespan[1])+parseInt(lifespan[0]))/2
      avglif+=alife;
    }
    avglif=Math.round((avglif/this.state.data.length)*100)/100;
    return parseFloat(String(avglif),2);
  }
  getWeight(){
    var wgt;
    var awgt=0;
    var avgwgt=0.00;
    for(var i=0;i<this.state.data.length;i++){
      wgt=this.state.data[i].weight.metric.split(" - ");
      awgt=(parseInt(wgt[1])+parseInt(wgt[0]))/2
      avgwgt+=awgt;
    }
    avgwgt=Math.round((avgwgt/this.state.data.length)*100)/100;
    return parseFloat(String(avgwgt),2);
  }
  render() {
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats Paradise</h2>
        <div>
          <h3>There are <span class='dot'>{this.state.data.length}</span> cats in the api</h3>
          <p>On average a cat can weight about <span class="dot">{this.getWeight()}</span>Kg and live <span class="dot">{this.getlifespandata()}</span>years.</p>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
