import React, { useState, useEffect } from 'react'
import { MDBContainer } from "mdbreact";
import { Bar} from "react-chartjs-2";
import axios from 'axios'
import {createRoot} from 'react-dom/client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchField from "react-search-field";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
}));

const Country = ({ country}) => {
  // console.log(country.currencies.name)
  var language;
  console.log(country.name+country.languages.length)
  if((country.languages.length)===1){
    language="Language"
  }
  else{
    language="Languages"
  }
 
  var lang=[]
  for(var i=0;i<country.languages.length;i++){
    lang.push(country.languages[i].name);
  }
  return (
    <Grid item xs={4} >
       <Item  >
    <div className='country'>
      <div className='country_flag'>
        <img src={country.flag} alt={country.name} />
      </div>
      <h3 className='country_name' sx={{textColor:'orange'}}>{country.name.toUpperCase()}</h3>
      <div class='country_text'>
      <p><b>Capital: </b>{country.capital}</p>
      <p><b>{language}: </b>{lang.join(', ')}</p>
        <p><b>Population:</b> {country.population.toLocaleString()}</p>
        <p><b>Currency: </b></p>
      </div>
    </div>
    </Item>
    </Grid>
  )
}

const App = () => {
  // setting initial state and method to update state
  const [data, setData] = useState([])
  const [q,setq]=useState(false);
  const [search]=useState(["capital","name"]);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.com/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  const filteredData = data.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

// console.log(chartData.labels+"  "+chartOptions.title)
  return (
    <div className='App'>
      <div style={{backgroundColor:'#F0F0F0'}}>
      <h1 className='header_name'>World Countries Data</h1>
      <h2>Currently, we have {data.length} countries</h2>
      </div>
      <div>
        <br/>
        <div className='search'>
        <SearchField
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchValue}
        />
        </div>
    <div className='maindiv'>
        <div className='countries-wrapper'>
      <Box sx={{ flexGrow: 1,}} >
      <Grid container spacing={3} sx={{alignItems:'center',justifyContent:'center'}}>
      {filteredData.map((country) => (
                  <Country key={country.name} country={country} />
          ))}
        </Grid>
    </Box>
        </div>
        </div>

      </div>
    </div>
  )
}
const root=createRoot(document.getElementById('root'))
root.render(<App/>)