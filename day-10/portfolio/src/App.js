import { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button';
import img from './images/img.jpg'
const image=(
  <div>
    <img src={img}></img>
  </div>
)
const name=(
  <div>
    <h1>Dhruv Hatkar</h1>
    <p>Student, Vellore Institute of Technology, Chennai</p>
    <h1>Skills</h1>
  </div>
)

const skills=(
  <div class='flexbox'>
    <div><Button variant="contained">HTML</Button></div>
    <div><Button variant="contained">CSS</Button></div>
    <div><Button variant="contained">JS</Button></div>
    <div><Button variant="contained">Bash</Button></div>
    <div><Button variant="contained">Linux</Button></div>
    <div><Button variant="contained">C++</Button></div>
    <div><Button variant="contained">Java</Button></div>
    <div><Button variant="contained">Python</Button></div>
    <div><Button variant="contained">C</Button></div>
  </div>
)
function App() {
	const [theme, settheme] = useState(false);
	const darkTheme = createTheme({
		palette: {
			mode: theme ? 'dark' : 'light',
		},
	});
	const handleChange = (event) => {
		settheme(event.target.checked);
	}

	return (
		<div className="App">
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				{image}
        {name}
        {skills}
				<label>Toggle Mode</label>
				<Switch
					checked={theme}
					color='success'
					onChange={handleChange} sx={{
            "&.MuiSwitch-root .Mui-checked":{
              color:"#0DCAF0"
            }
          }} />
			</ThemeProvider>

		</div>
	);
}

export default App;
