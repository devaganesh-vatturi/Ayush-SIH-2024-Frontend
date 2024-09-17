import React, { useState } from 'react';
import '../styles/PrintauthorList.css'; // Import the CSS file

function PrintauthorList({StartupData,type}){
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [rejected, setrejected] = useState(false);
  const [feedback, setFeedback] = useState('');
 const [maildata, setmaildata] = useState({
    Email: "sai@gmail.com",
    PANno: "3YE83H894GF",
    GSTno: "BF8E84T38R8",
    websiteAddress: "www.saitech.com",
    certificateNo: 645658738,
    CompanyDOI: "02-06-2005",
    IssuuingAuthority: "saisaisai",
    IE_code: 83648374,
    IE_DOI: "02-05-2005"
});
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
const fetchit = async(index,email)=>{
    try{
        const response=await axios.post('',email);
        if(response.success)
        {
            setmaildata()
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
      {StartupData.map((item, index) => (
        <div key={index} className="author-item">
          <div 
            onClick={() =>{
                fetchit(index,item.Email);
                 toggleDetails(index,item.Email);
                            
            }} 
            className="author-header"
          >
            <p className="author-name">{item.name}</p>
            <p className="author-email">{item.Email}</p>
          </div>
          {visibleIndex === index && (
            <div className="author-details">
               <div className='author-details-inner'>
             <div className='author-details-b1'>
                <p>Email: {maildata.Email}</p>
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