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
      
<<<<<<< HEAD
    <p className='home-name'>AUSHADI 2.0</p>
=======
    <p className='home-name'>Aayush 2.0</p>
>>>>>>> 7fe9fca4dc3ead47b36463e3d0daa3e33d186255
    </div>
    <button className='home-button' onClick={gochatbot}>Chat Bot</button>
   </div>
   
  )
}
