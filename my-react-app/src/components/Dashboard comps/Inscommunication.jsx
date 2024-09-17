import React ,{useState,useEffect}from 'react'
import "../styles/Inscommunication.css";
import axios from 'axios';
export default function Inscommunication({email}) {
    const [isEnabled, setIsEnabled] = useState(false); 
    const [clicks, setClicks] = useState(false);
    const [feedback,setFeedback]=useState('');

    useEffect(()=>{
      const response = axios.post("http://localhost:5002/api/StartupFeedback-get",{email});
      setFeedback(response.feedback);
      const isnotifyResponse = axios.post("/StartupFeedback-get",{email});
      setIsEnabled(isnotifyResponse.isNotifyEligible);//finished is example varibale plz modify it.
    },[])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const NotificationMsgData=null;
      const Startup_Email =email;
      const response = axios.post("http://localhost:5002/api/LA-Notificationpost",{Startup_Email,NotificationMsgData});  
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
   <div className='ins-cont'>
   <div className="ins-main">
    <p className="ins-head">Communication with Licensing Authority</p>
    <p className="ins-feed">Feedback:{feedback}</p>
    <p className="paragraph">Resend IE certificate properly</p>  
    <p className="paragraph">Reenter authorized GST number</p> 

    <button
        disabled={isEnabled}
        className={`toggle-button ${isEnabled ? "active" : "inactive"}`}
        onClick={isclicked}
    >
        Re-notify
    </button>

    {isEnabled && clicks && (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What do you wanna say to the inspector ?" className="input-field" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    )}
</div>
</div>
 </>
  )
}
