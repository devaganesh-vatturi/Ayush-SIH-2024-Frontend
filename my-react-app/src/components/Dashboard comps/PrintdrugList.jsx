import React, { useState } from 'react';
import '../styles/PrintdrugList.css';
import axios from 'axios';

function PrintdrugList({startupmails}){

  console.log("startups emails : ",startupmails);
  
  const [visibleIndex, setVisibleIndex] = useState(null);
 const [maildatas, setmaildatas] = useState({
   address: "10-1-2, vasa street, narsapuram, godavari",
    city: "narsapuram",
    pinCode: "534275",
    state: "andhra",
    district: "godavari"
});
const fetchit = async(email)=>{
    try{
      const Email_ID  =email;
        const response=await axios.post('http://localhost:5002/api/startup-basic',{Email_ID}); // we will pass email and it will return that startups details
        if(response.data.success){
            // setmaildatas(response.data.basicdata)
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
    <div className="Drugp-container">
      { startupmails.length===0 ? 
             <h1> There are no Startups</h1> : startupmails.map((item, index) => (
        <div key={index} className="Drugp-item">
          <div 
            onClick={() =>{
                fetchit(index,item.Email);
                 toggleDetails(index,item.Email);
                            
            }} 
            className="Drugp-header"
          >
            <p className="Drugp-name">{item.name}</p>
            <p className="Drugp-email">{item.Email}</p>
          </div>
          {visibleIndex === index && (
            <div className="Drugp-details">
               <div className='Drugp-details-inner'>
             <div className='Drugp-details-b1'>
                <p>Address: {maildatas.address}</p>
                <p>City: {maildatas.city}</p>
                <p>Pincode: {maildatas.pinCode}</p>
                <p>District: {maildatas.district}</p>
                <p>State: {maildatas.state}</p>
                </div>
                </div>
                <div className='Drugp-details-buttons'>
                <button 
                className='Drugp-btn-assign'
                onClick={() => alert(`Notification sent to drug inspector for ${item.name}`)}
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
      ))}
    </div>
  );
}

export default PrintdrugList;
