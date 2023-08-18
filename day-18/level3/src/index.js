import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const PrintList=(props)=>{
  return(
    <div>
      <ul>
    {props.array.map(item=>(
      <li>{item}</li>
    ))
    }
    </ul>
  </div>
  )
}
class App extends Component {
  state = {
    data: [],
    avglife: 0,
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
    // console.log(avglif/this.state.data.length);
    // console.log(this.state.data);
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
    // console.log(avglif/this.state.data.length);
    // console.log(this.state.data);
    return parseFloat(String(avgwgt),2);
  }
  getCountries(){
    var countries={};
    var maxval=0;
    var key;
    var maxkey;
    for(var i=0;i<this.state.data.length;i++){
      key=this.state.data[i].origin;
      if(!(key in countries)){
        countries[key]=1;
      }
      else{
        countries[key]+=1;
      }
    }
    for(const [key,value] of Object.entries(countries)){
      if(value>maxval){
        maxval=value;
        maxkey=key
      }
    }
    const array=Object.keys(countries).sort(function(a,b){
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
    console.log(countries);
    return [Object.keys(countries).length,maxkey,array];
  }
  render() {
    // this.getlifespandata()
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats Paradise</h2>
        <div>
          <h3>There are <span class='dot'>{this.state.data.length}</span> cats in the api</h3>
          <p>On average a cat can weight about <span class="dot">{this.getWeight()}</span>Kg and live <span class="dot">{this.getlifespandata()}</span>years.</p>
          <p> <span class="dot">{this.getCountries()[0]}</span> countries have cat breeds</p>
          <p>{this.getCountries()[1]} has the highest no of breeds</p>
          <br/>
          <p>The list of countries in the ascending order of their number of breeds is : </p>
          <PrintList array={this.getCountries()[2]}/>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
