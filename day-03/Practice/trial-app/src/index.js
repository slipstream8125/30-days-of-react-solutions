import React from 'react'
import ReactDOM from 'react-dom'
import alonsoposting from './images/alonsoposting.jpg'
const headerStyles={
    backgroundColor:'grey',
}
const header=(
    <header style={headerStyles}>
        <h1>Source : Alonso at the Austrailian GP 2016</h1>
        <img src={alonsoposting} alt="GP2 Engine! ARGHHHH!"></img>
    </header>
)
const rootElement=document.getElementById('root')
ReactDOM.render(header,rootElement)