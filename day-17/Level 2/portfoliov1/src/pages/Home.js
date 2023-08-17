import Button from '@mui/material/Button';
import './Home.css'
import img from './images/img.jpg'
const Image=()=>(
  <div>
    <img src={img} class="profile"></img>
  </div>
)
const Name=()=>(
    <div>
    <h1 >Dhruv Hatkar</h1>
    <p >Student, Vellore Institute of Technology, Chennai</p>
    <br/>
    <h1 >Skills</h1>
  </div>
)

const Skills=()=>(
    <div class='flexbox'>
    <div><Button variant="contained" class='element'>HTML</Button></div>
    <div><Button variant="contained" class='element'>CSS</Button></div>
    <div><Button variant="contained" class='element'>JS</Button></div>
    <div><Button variant="contained" class='element'>Bash</Button></div>
    <div><Button variant="contained" class='element'>Linux</Button></div>
    <div><Button variant="contained" class='element'>C++</Button></div>
    <div><Button variant="contained" class='element'>Java</Button></div>
    <div><Button variant="contained" class='element'>Python</Button></div>
    <div><Button variant="contained" class='element'>C</Button></div>
  </div>
)
export const Home=()=>{
    return(
        <div class="maindiv bg-slate-900">
            <Image/>
            <Name/>
            <Skills/>
        </div>
    )
}