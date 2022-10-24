import React from 'react'
import ReactDOM from 'react-dom'
import Box from '@mui/material/Box'
import './popup.css'
import Main from './components/Main'
import Login from './components/Login'


const App: React.FC<{}> = () => {
  return (
    <div>
      <Main></Main>
      <Login></Login>
      
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
