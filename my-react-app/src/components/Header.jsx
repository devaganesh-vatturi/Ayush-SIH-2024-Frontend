import React from 'react'
import './styles/Header.css';
export default function Header() {
  function gochatbot()
  {
    window.location.href='/chatbot';
  }
  return (
  
    <div className="home-head">
      <div className='home-first'>
      <div className='home-img'>
      </div>
      
    <p className='home-name'>AUSHADI 2.0</p>
    </div>
    <button className='home-button' onClick={gochatbot}>Chat Bot</button>
   </div>
   
  )
}
