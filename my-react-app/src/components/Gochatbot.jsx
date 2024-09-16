import React from 'react'
import './styles/Gochatbot.css';
export default function Gochatbot() {
    function goaichat()
    {
        window.location.href='/chatbot';
    }
  return (
    <div className="home-chatbot">
              <p>Have more questions than our FAQs ?</p>
              <button onClick={goaichat}>Click Here</button>
              <p>to chat with our AI chatbot.</p>
        </div>
  )
}
