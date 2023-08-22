import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {createRoot} from 'react-dom/client';

const App=()=> {
  const [data,setData] = useState([])
  
  useEffect(()=> {
    fetchCountryData()
  },[])

   const fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }
  const getlifespandata=()=>{
    var lifespan;
    var alife=0;
    var avglif=0.00;
    for(var i=0;i<data.length;i++){
      lifespan=data[i].life_span.split(" - ");
      alife=(parseInt(lifespan[1])+parseInt(lifespan[0]))/2
      avglif+=alife;
    }
    avglif=Math.round((avglif/data.length)*100)/100;
    return parseFloat(String(avglif),2);
  }
  function getWeight(){
    var wgt;
    var awgt=0;
    var avgwgt=0.00;
    for(var i=0;i<data.length;i++){
      wgt=data[i].weight.metric.split(" - ");
      awgt=(parseInt(wgt[1])+parseInt(wgt[0]))/2
      avgwgt+=awgt;
    }
    avgwgt=Math.round((avgwgt/data.length)*100)/100;
    return parseFloat(String(avgwgt),2);
  }
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h2>Cats Paradise</h2>
        <div>
          <h3>There are <span class='dot'>{data.length}</span> cats in the api</h3>
          <p>On average a cat can weight about <span class='dot'>{getWeight()}</span> Kg and live <span class='dot'>{getlifespandata()}</span> years.</p>
        </div>
      </div>
    )
  }

const root = createRoot(document.getElementById('root'));
root.render(<App />)
