import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {tenHighestPopulation} from  './ten_most_highest_populations.js'
import { MDBContainer } from "mdbreact";
import { Bar} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const root=createRoot(document.getElementById('root'));
const Text=()=>(
  <div>
    <h1><b>30 Days of React</b></h1>
    <h2>World Population</h2>
    <p>Ten most populated countries</p>
  </div>
)
const Chart=()=>{
  const datas=tenHighestPopulation;
  var countries=[];
  var population=[] ;
  for (var c in datas) {
        countries.push(datas[c].country);
        population.push(datas[c].population);
}
const dataset={
  labels:countries,
  datasets:[
    {  
      label : countries,
      data : population,
      fill:true,
      backgroundColor: "#FFA500",
    }
  ]
}
  return(
    <MDBContainer>
      <Bar
     data={dataset}
     options={{
     indexAxis: 'y',
     plugins:{
          title:{display:false, text:countries, font:{size: 12, family: 'rubik'}},
          legend: {display: false, position: 'right'}},
     maintainAspectRatio: true
     }}/>
    </MDBContainer>
  )
}
const App=()=>(
  <div>
    <Text/>
    <Chart/>
  </div>
)
root.render(
    <App />
);