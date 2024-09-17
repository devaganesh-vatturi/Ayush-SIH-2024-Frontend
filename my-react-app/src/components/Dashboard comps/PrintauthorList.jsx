import React, { useState,useEffect } from 'react';
import '../styles/PrintauthorList.css'; // Import the CSS file
import axios from 'axios';

function PrintauthorList({StartupData,type}){

  if (typeof StartupData === 'undefined') { // Check for undefined
    return (
      <>
        <h1>nothing there</h1>
      </>
    );
  }

  const [visibleIndex, setVisibleIndex] = useState(null);
  const [startupDetails, setStartupDetails] = useState([]);

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

  // Function to fetch startup details by email
  const fetchStartupDetails = async (email) => {
    try {
      const Email_ID = email;
      const response = await axios.post('http://localhost:5002/api/startup-basic', { Email_ID });
      return response.data.basicdata; // Return the data from the API
    } catch (error) {
      console.error('Error fetching startup details for:', email, error);
      return null; // Return null in case of error
    }
  };

  // useEffect to fetch details for each email and store in the state
  useEffect(() => {
    const fetchDetailsForAllEmails = async () => {
      try {
        const detailsArray = await Promise.all(
          StartupData.map(async (eachObj) => {
            const { Email_ID } = eachObj;
            console.log("Fetching data for: \n", eachObj);
            const startupData = await fetchStartupDetails(Email_ID);
            return startupData; // Return the fetched data
          })
        );
        
        // Remove null values from the array and set state
        setStartupDetails(detailsArray.filter((data) => data !== null));
        console.log("------>>>>> ",startupDetails);
      } catch (error) {
        console.error('Error fetching startup details:', error);
      }
    };

    fetchDetailsForAllEmails();
  }, [StartupData]); // Dependency array should include StartupData

  // Toggle the visibility of additional info (email, etc.)
  const toggleDetails = (index, email) => {
    setVisibleIndex(visibleIndex === index ? null : index);
    console.log(email);
  };

  return (
    <div className="author-container">

      { (startupDetails.length!==0 || typeof startupDetails === 'undefined') ? 
       startupDetails.map((item, index) => (
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
                                  <button className='author-btn-reject'>
                                    Reject
                                  </button>
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
      ))          : <h1>There are no {type} startups</h1>
      }
    </div>
  );
}

export default PrintauthorList;
