import React ,{useState,useEffect}from 'react'
import "../styles/Inscommunication.css";
import axios from 'axios';
export default function Inscommunication({email}) {
    const [isEnabled, setIsEnabled] = useState(false); 
    const [clicks, setClicks] = useState(false);
    const [feedback,setFeedback]=useState('');

    useEffect( ()=>{
     const getit =async()=>{
       try{
        console.log("the start");
        const Email = email;
      const response = await axios.post("http://localhost:5002/api/StartupFeedback-get",{Email});
      setFeedback(response.data.feedback);
      console.log("enableeeeeeeeeeeee \n\n\n\n ",isEnabled);  
      const Email_ID = email;
      const isnotifyResponse = await axios.post("http://localhost:5002/api/isNotifyEligible",{Email_ID});
      console.log("enableeeeeeeeeeeee  ",isEnabled);  
      setIsEnabled(isnotifyResponse.data.success);//finished is example varibale plz modify it.
    console.log("enableeeeeeeeeeeee  ",isEnabled);  
    }
    catch(error){
        console.log(error);
      }
    }
    getit();

    },[])
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      const NotificationMsgData=e.target.elements.sendmail.value;
      // console.log(NotificationMsgData)
      const Startup_Email =email;
      const response =await axios.post("http://localhost:5002/api/LA-Notificationpost",{Startup_Email,NotificationMsgData}); 
      if(response.data.success){
        alert("Successfully notified the licensing authority !");
      } else{
        alert("Failed to notify the licensing authority !");
      }
      setIsEnabled(false);
      setClicks(false);  


    };
  
    function isclicked() {
    if(isEnabled)
    {
      setClicks(true);
    }
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
            <input type="text" name="sendmail" placeholder="What do you wanna say to the inspector ?" className="input-field" />
            <button type="submit"  className="submit-button">Submit</button>
        </form>
    )}
</div>
</div>
 </>
  )
}
