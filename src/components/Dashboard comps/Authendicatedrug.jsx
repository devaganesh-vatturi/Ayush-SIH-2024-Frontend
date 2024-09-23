import React, { useEffect,useState } from 'react'
import '../styles/Authendicatedrug.css';
export default function Authendicatedrug({email}) {
    const [visibleIndex, setVisibleIndex] = useState(null);
    useEffect(()=>{
        const fetchit = async(e)=>{
       try{
        const data= await axios.post('',email);
       }
       catch(error)
       {
        console.log(error);
       }
       
        }
        fetchit();
    },[])
    function Acceptdrug(presentmail)
    {
      console.log("you can accept drug inspector",presentmail);
    }
    function rejectclick(e)
{
  console.log('clicked on reject');
  e.preventDefault();
  setrejected(true);
}
const handleInputChange = (e) => {
    setFeedback(e.target.value);  // Update the feedback state as the user types
  };
const handleSubmit = (presentmail) => {
    console.log(`Feedback Submitted: ${feedback} you can reject ${presentmail}`);
  
    setrejected(false);  // Hide the feedback form after submission
    setFeedback('');     // Optionally clear the feedback after submission
  };
      // Toggle the visibility of additional info
  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
 const newmails=["devaganesh@gmail.com","devavatturi@gmail.com"];
  return (
    <>
    <p>List of drug inspectors to get Approved</p>
    {newmails.map((eachemailobj, index) => {
        const details = basicStartupDetail[index]; // Fetch the details based on the index

        return (
          <div key={index} className="Drugp-item">
            <div
              onClick={() => toggleDetails(index)}
              className="Drugp-header"
            >
            <p>Email:{}</p>
            </div>

            {visibleIndex === index && details && (
              <div className="Drugp-details">
                <div className='Drugp-details-inner'>
                  <div className='Drugp-details-b1'>
                    <p>Name: {details.address}</p>
                    <p>Phone no: {details.phno}</p>
                    <p>District: {details.district}</p>
                    <p>State: {details.state}</p>
                  </div>
                </div>
                <div className='Drugp-details-buttons'>
                  <button 
                    className='Drugp-btn-assign'
                    onClick={() =>{ Acceptdrug(eachemailobj.Email_ID)}}
                  >
                    Accept
                  </button>
                  <button className='Drugp-btn-reject' onClick={rejectclick}>
                    Reject
                  </button>
                  {rejected && (
            <><br/>
              <input 
                type='text' 
                name="feedback" 
                id="feedback-inp"
                placeholder='Enter feedback'
                value={feedback}  // Bind the input value to the feedback state
                onChange={handleInputChange}  // Update state when the input changes
              />
              <button onClick={()=>{handleSubmit(eachemailobj.Email_ID)}} id="feed-submit">Submit</button>
            </>
          )}
                </div>
              </div>
            )}
          </div>
        ); 
      })}
    </>
  )
}
