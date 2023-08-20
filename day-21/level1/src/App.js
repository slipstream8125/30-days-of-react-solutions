import logo from './logo.svg';
import './App.css';
import {useState,createContext} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home"
import {Menu} from "./pages/Menu"
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
export const AppContext= createContext();
function App() {
  const [username,setUsername]=useState("Slipstream");
  return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Error 404 : Page Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
