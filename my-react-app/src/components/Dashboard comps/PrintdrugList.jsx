import React, { useState } from 'react';
import '../styles/PrintdrugList.css';

function PrintauthorList({startupmails}){
  const [visibleIndex, setVisibleIndex] = useState(null);
 const [maildata, setmaildata] = useState({
   address: "10-1-2, vasa street, narsapuram, godavari, andhra",
    city: "narsapuram",
    pinCode: "534275",
    state: "andhra",
    district: "godavari"
});
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
    <div className="Drugp-container">
      {startupmails.map((item, index) => (
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
                <p>Address: {maildata.address}</p>
                <p>City: {maildata.city}</p>
                <p>Pincode: {maildata.pinCode}</p>
                <p>District: {maildata.district}</p>
                <p>State: {maildata.state}</p>
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

export default PrintauthorList;
