import React ,{useState}from 'react'
import "../styles/Inscommunication.css";
export default function Inscommunication() {
    const [isEnabled, setIsEnabled] = useState(false); 
    const [clicks, setClicks] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEnabled(false);
      setClicks(false);   
    };
  
    function isclicked() {
      if (!isEnabled) {
        setClicks(true);
        setIsEnabled(true);
      }
      console.log(clicks);
      console.log(isEnabled);
    }
  return (
   <>
   <p>Communication with Drug Inspector</p>
   <p>Feedback</p>
   <br/>
   <p>Resend IE certificate properly</p>  
   <p>Reenter authorized GST number</p> 
   <div className="ins-main">
      <button
      
        disabled={isEnabled}
        className={`toggles-button ${isEnabled ? "active" : "inactive"}`}
        onClick={isclicked}
      >
        Re-notify
      </button>

      {isEnabled && clicks && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter something" className="input-field" />
          <button type="submit" className="submits-button">Submit</button>
        </form>
      )}
    </div>






   </>
  )
}
