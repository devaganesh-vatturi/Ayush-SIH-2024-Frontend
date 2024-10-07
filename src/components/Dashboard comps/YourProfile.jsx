import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../styles/YourProfile.css';

const YourProfile = ({email}) => {

  return (
    <>
    <div style={{height:"50vh"}}>
    <h1>email id here : {email} </h1>

    </div>
   
    </>
  );
};

export default YourProfile;
