import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Count = ({ count, addOne}) => (
  <div>
    <div>
      <Button text='Select Cat' onClick={addOne} style={buttonStyles} />
    </div>
  </div>
)
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
async function imagesearch(data){
  const url = 'https://api.thecatapi.com/v1/images/search?breed_id='+data;
  try {
    const response = await axios.get(url)
    const data = await response.data
    console.log(data[0].url);
    return (data[0].url);
  } catch (error) {
    console.log(error)
  }
}

const UserCard = ({count,data}) => {
  const image="https://cdn2.thecatapi.com/images/"+data[count].reference_image_id+'.jpg';
  return(
  <div>
    <div>
      <img src={image}></img>
      </div>
  <div className='user-card'>
    {/* <img src={image} alt={name} /> */}

    <h4>{data[count].name}</h4>
     <p class="cclass"><b>Origin :</b> {data[count].origin}</p> 
     <p class="cclass"><b>Life Span :</b> {data[count].life_span}</p>
     <p class="cclass"><b>Weight (in kgs) :</b> {data[count].weight.metric}</p>
     <p class="cclass"><b>Temperament :</b> {data[count].temperament}</p>
  </div>
  </div>
  )
}
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)
// console.log(countries[0].flag);
// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#d62fec',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      count,
      addOne,
      data
    } = this.props
    return (
      <main>
        <div className='maindiv'>
          <ul>
            {/* <TechList techs={techs} /> */}
          </ul>
          <UserCard count={count} data={data}/>

          <Count count={count} addOne={addOne}/>
        </div>
      </main>
    )
  }
}
class App extends Component {
  state = {
    count: 0,
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
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
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
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats Paradise</h2>
        <div>
          <h3>There are <span class='dot'>{this.state.data.length}</span> cats in the api</h3>
          <p>On average a cat can weight about <span class="dot">{this.getWeight()}</span> Kg and live <span class="dot">{this.getlifespandata()}</span> years.</p>
          <p> <span class="dot">{this.getCountries()[0]}</span> countries have cat breeds</p>
          <p>{this.getCountries()[1]} has the highest no of breeds</p>
          <br/>
          {this.state.data.length > 0 ? (
            <>
              <Main
                addOne={this.addOne}
                minusOne={this.minusOne}
                count={this.state.count}
                data={this.state.data}
              />
            </>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
