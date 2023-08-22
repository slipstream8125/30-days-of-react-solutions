import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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

const App = (props) => {
  // setting initial state and method to update state
  const [data, setData] = useState([])

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

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
    <div className='maindiv'>
        <div className='countries-wrapper'>
      <Box sx={{ flexGrow: 1,}} >
      <Grid container spacing={3} sx={{alignItems:'center',justifyContent:'center'}}>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </Grid>
    </Box>
        </div>
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

