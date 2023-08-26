import React, { useState,useCallback } from 'react';
import {createRoot} from 'react-dom/client';
import { FaRegPaste as Paste } from "react-icons/fa6";
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import {Grid,Box,Paper} from '@mui/material';
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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
}));
const Numbers=({numbers})=>{
  const [copied,setCopied]=useState(false);
  const handleCopy=()=>{
    setCopied(true);
  };
  var hex;
  const number=numbers.map((numbers) => <div class='box' style={{backgroundColor: hex=hexaColor()}}><p>{hex}<br/><Fab size="small" color="primary" sx={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}><CopyToClipboard text={hex} onCopy={handleCopy}><div><Paste /></div></CopyToClipboard></Fab></p></div>)
//   <Grid item xs={2.1}>
//   {numbers.map((numbers) => <div class='box' style={{backgroundColor: hex=hexaColor()}}><p>{hex}<br/><Fab size="small" color="secondary"><copy-button target-text={hex} sx={{ backgroundColor: 'transparent'}}><div><Paste /></div></copy-button></Fab></p></div>) }
// </Grid>
  hex=hexaColor();
  return number
}

const App=()=>{
  var numbers=[];
  for(var i=1;i<=6;i++){
    numbers.push(i);
  }
  return(
  <div>
  <h1> 30 Days of React</h1>
  <p>Hexadecimal Colors</p>
    {/* <div class='inline'>
    <div class='flexbox'>
      <Numbers numbers={numbers}/>
    </div>
    <div class='flexbox'><Numbers numbers={numbers}/></div>
    <div class='flexbox'><Numbers numbers={numbers}/></div>
    <div class='flexbox'><Numbers numbers={numbers}/></div>
    <div class='flexbox'><Numbers numbers={numbers}/></div>
    <div class='flexbox'><Numbers numbers={numbers}/></div>
    </div>*/}
      <Box sx={{ flexGrow: 1,}} >
      <Grid container spacing={3} sx={{alignItems:'center',justifyContent:'center'}}>
      <Numbers numbers={numbers}/>
        </Grid>
    </Box>
    </div> 
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)