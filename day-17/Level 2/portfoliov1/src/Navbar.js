import {Link} from "react-router-dom";
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';

export const Navbar=()=>{
    return (
        <nav class="Navbar rounded-lg  bg-slate-900 py-2 ring-1 ring-slate-200/5 shadow-xl">
          <Link to="/" class='link'><Button size="large" variant="elevated" sx={{color : '#1976D2',borderColor: '#1976D2',backgroundColor: 'black'}}>Home</Button></Link>
          <Link to="/hobbies" class='link'><Button size="large" variant="elevated" sx={{color : '#1976D2', borderColor: '#1976D2',backgroundColor: 'black'}}>Hobbies</Button></Link>
          <Link to="/contact" class='link'><Button size="large" variant="elevated" sx={{color : '#1976D2',borderColor: '#1976D2',backgroundColor: 'black'}}>Contact</Button></Link>
        </nav>
    )
}