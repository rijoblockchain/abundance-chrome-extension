import React from 'react'
import './Login.css'

const Login = () => {
  const fbLogin = () => {
    chrome.tabs.update(null, { url: 'https://www.facebook.com' })
  }
  
  return (
    <button className="fbbutton">
      <img src="fb.png" alt="fb image" onClick={() => fbLogin()} className="fb" />
    </button>
  )
}

export default Login
