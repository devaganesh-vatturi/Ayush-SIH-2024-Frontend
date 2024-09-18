import React, { useState,useEffect } from 'react';
import '../styles/PrintdrugList.css';
import axios from 'axios';

function PrintdrugList({startupmails}){

  // console.log("startups emails : ",startupmails);
  
  const [visibleIndex, setVisibleIndex] = useState(null);
 const [basicStartupDetail, setbasicStartupDetail] = useState({});
// {           //basic details
//    address: "10-1-2, vasa street, narsapuram, godavari",
//     city: "narsapuram",
//     pinCode: "534275",
//     state: "andhra",
//     district: "godavari"
// });
const fetchbasicdetails = async(email)=>{
    try{
      // const Email_ID  =email;
      console.log("---------",email);
      
        const response=await axios.post('http://localhost:5002/api/startup-basic',{Email_ID: email}); // we will pass email and it will return that startups details
        if(response.data.success){
            setbasicStartupDetail(response.data.basicdata)
            console.log(response.data.basicdata);
        }
    }catch(error){
        console.log("error : ",error);
    }
}
  // Toggle the visibility of additional info (phone and district)
  const toggleDetails = (index,emailobj) => {
    setVisibleIndex(visibleIndex === index ? null : index);
    // console.log(email);
  };

  const [startupDetails, setStartupDetails] = useState({}); // Store details for all startups

  // Fetch basic details for each email
  const fetchBasicDetails = async (email) => {
    try {
      const Email_ID= email;
      const response = await axios.post('http://localhost:5002/api/startup-basic', { Email_ID });
      if (response.data.success) {
        return response.data.basicdata; // Return the fetched details
      }
    } catch (error) {
       console.log('Error fetching details:', error);
      return null; // Return null if there's an error
    }
  };

  // Fetch details for all emails and store in state
  const getDetailsAll = async () => {
    const allDetails = {};
    for (let eachobj of startupmails) {
      const details = await fetchbasicdetails(eachobj.Email_ID);
      if (details) {
        allDetails[eachobj.Email_ID] = details; // Store each startup's details with the email as key
      }
    }
    console.log("-----xxxxxxxx-----",allDetails);
    
    setbasicStartupDetail(allDetails); // Set all details in state
  };

  // Fetch all startup details when component mounts
  useEffect(() => {
    getDetailsAll();
  }, [startupmails]);
// console.log("-----xxxxxxxx-----",basicStartupDetail);


return (
  <div className="Drugp-container">
    {startupmails.map((eachemailobj, index) => {
      const details = basicStartupDetail[eachemailobj.Email_ID]; // Get details for the current email

      return (
        <div key={index} className="Drugp-item">
          <div
            onClick={() => toggleDetails(index)}
            className="Drugp-header"
          >
            <p className="Drugp-name"> 
              {details ? details.companyName : 'Loading...'} 
            </p>
            <p className="Drugp-email">
              {eachemailobj.Email_ID}
            </p>
          </div>

          {/* Correctly wrap details rendering */}
          {visibleIndex === index && details && (
            <div className="Drugp-details">
              <div className='Drugp-details-inner'>
                <div className='Drugp-details-b1'>
                  <p>Address: {details.address}</p>
                  <p>City: {details.city}</p>
                  <p>Pincode: {details.pinCode}</p>
                  <p>District: {details.district}</p>
                  <p>State: {details.state}</p>
                </div>
              </div>
              <div className='Drugp-details-buttons'>
                <button 
                  className='Drugp-btn-assign'
                  onClick={() => alert(`Notification sent to drug inspector`)}
                >
                  Accept
                </button>
                <button className='Drugp-btn-reject'>
                  Reject
                </button>
              </div>
            </div>
          )}
        </div>
      ); // Close return block for this item
    })} {/* Close the .map() function */}
  </div> // Close Drugp-container div
);
} // Close PrintdrugList component

export default PrintdrugList;
