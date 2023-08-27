import React, { useState,useCallback } from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from '@mui/material'
import { FaRegPaste as Paste } from "react-icons/fa6";
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import {Grid,Box,Paper,TextField} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function hexaColor(){
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
}));
const Numbers=({numbers})=>{
  const [copied,setCopied]=useState(false);
  const handleCopy=()=>{
    setCopied(true);
  };

  var hex;

  const number=numbers.map((numbers) => 
  <Grid item xs={2}>
    <Item style={{backgroundColor: hex=hexaColor(),color: 'white',fontSize: '2rem',
        verticalAlign: 'middle'}}>
    <p class='hex'>{hex}<br/>
    <Fab size="small" color="tertiary" sx={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
      <CopyToClipboard text={hex} onCopy={handleCopy}><div><Paste /></div></CopyToClipboard></Fab>
      </p>
      </Item>
      </Grid>)

  hex=hexaColor();
  return number
}

const App=()=>{
  const [number,setNumber]=useState(27);
  var numbers=[];
  for(var i=0;i<number;i++){
    numbers.push(i);
  }
  return(
  <div>
    <div className='header'>
  <h1> 30 Days of React</h1>
  <p>Hexadecimal Colors</p>
  <div style={{verticalAlign: 'middle',justifyContent: 'center'}}>
  <TextField id="outlined-basic" label="" variant="outlined" sx={{width:'40%'}} onChange={(e)=>setNumber(e.target.value)}/>
  <Button variant='contained' sx={{marginLeft:'10px',height:'54px'}} >Generate</Button>
  </div>
  </div>
    <br/>
    <br/>
    <Box sx={{ flexGrow: 0,}} >
      <div className='maindiv'>
        <Grid container spacing={3} sx={{alignItems:'center',justifyContent:'space-between'}}>
          <Numbers numbers={numbers}/>
        </Grid>
      </div>
    </Box>
    
    </div> 
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)