import React, { useEffect, useState } from 'react';
import '../styles/PrintauthorList.css'; // Import the CSS file
import axios from 'axios';

function PrintauthorList({StartupEmails,type}){
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [rejected, setrejected] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [basicStartupDetail, setBasicStartupDetail] = useState([]); // Store details as an array
//   {
//     Email: "sai@gmail.com",
//     PANno: "3YE83H894GF",
//     GSTno: "BF8E84T38R8",
//     websiteAddress: "www.saitech.com",
//     certificateNo: 645658738,
//     CompanyDOI: "02-06-2005",
//     IssuuingAuthority: "saisaisai",
//     IE_code: 83648374,
//     IE_DOI: "02-05-2005"
// });

useEffect(()=>{ // to LOAD only email and names (basic data) on the basic display tabs
  console.log("calleddd sounsndsni");
  
  fetchit();
   
  return()=>{
      fetchit();
  }
},[]);
const [basicdata, setbasicdata] = useState({});
function rejectclick(e)
{
  e.preventDefault();
  setrejected(true);


}
const handleSubmit = () => {
  alert(`Feedback Submitted: ${feedback}`);
  setrejected(false);  // Hide the feedback form after submission
  setFeedback('');     // Optionally clear the feedback after submission
};
const handleInputChange = (e) => {
  setFeedback(e.target.value);  // Update the feedback state as the user types
};
const fetchit = async(email)=>{
const Email  = email;
    try{
        const response=await axios.post('http://localhost:5002/api/startup-basic',{Email});  //startup-dash-retrieval
        if(response.data.success)
        {
            setbasicdata(response.data.basicdata);
            console.log("kdhbhidbdhb    ",basicdata);
            
        }
        fetchfulldet(email);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchfulldet = async(email)=>{
  const Email_ID = email;
  try{
      const response=await axios.post('http://localhost:5002/api/startup-basic',{Email_ID});  //startup-dash-retrieval
      if(response.success)
      {
          setbasicdata(response.data.data)
      }
  }
  catch(error)
  {
      console.log(error);
  }
}
  // Toggle the visibility of additional info (phone and district)
  const toggleDetails = (index,email) => {
    setVisibleIndex(visibleIndex === index ? null : index);
    console.log(email);
  };

  return (
    <div className="author-container">
      {StartupData.map((each_item) => ( // 
        <div key={index} className="author-item">
          <div 
            onClick={() =>{
                fetchfulldet(each_item.Email_ID);
                 toggleDetails(index,each_item.Email);
                            
            }} 
            className="author-header"
          >
            <p className="author-name">{basicdata.Email}</p>
            <p className="author-email">{item.Email}</p>
          </div>
          {visibleIndex === index && (
            <div className="author-details">
               <div className='author-details-inner'>
             <div className='author-details-b1'>
                <p>Email: {basicdata.Email}</p>
                <p>GST no: {maildata.GSTno}</p>
                <p>PAN no: {maildata.PANno}</p>
                <p>Website: {maildata.websiteAddress}</p>
                <p>Certificate Issuing Authority: {maildata.IssuuingAuthority}</p>
                </div>
                <div className='author-details-b2'>
                <p>Certificate no: {maildata.certificateNo}</p>
                <p>Date of issue: {maildata.CompanyDOI}</p>
                <p>IE code: {maildata.IE_code}</p>
                <p>IE Date of issue: {maildata.IE_DOI}</p>
                    </div>
                </div>
                <div className='author-details-buttons'>
                { type==='pending' &&<>
                <button 
                className='author-btn-assign'
                onClick={() => alert(`Notification sent to drug inspector for ${item.name}`)}
              >
               Assign Drug Inspector
              </button>
              <button className='author-btn-reject' onClick={rejectclick}>
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
              <button onClick={handleSubmit} id="feed-submit">Submit</button>
            </>
          )}
              </>
               }
               {
                  type==='accepted' && <>
                  <button className='author-btn-approve'>Approve License</button>
                  </>
               }
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PrintauthorList;