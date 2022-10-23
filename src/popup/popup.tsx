import React from 'react'
import ReactDOM from 'react-dom'
import Box from '@mui/material/Box';
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <img className="center" src="icon.png"/>
      <br></br>
      <p>Welcome To Your</p>
      <p>A.B.U.N.D.A.N.C.E Movement</p>
      <p>Dashboard</p>
      <a href="https://www.facebook.com" target="_blank">
        <img className="fb" src="fb.png"/>
      </a>
    </div>
    
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
