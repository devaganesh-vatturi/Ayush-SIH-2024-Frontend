import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import '../styles/Startupdashboard.css';

import Startuptrackpad from './Startuptrackpad';
import StartupApplication from './StartupApplication';
import Header from '../Header';
import Extrafeatures from './Extrafeatures';
import PeerForum from './PeerForum';

export default function Startupdashboard() {
    //1 is doctor
    //2 is farmer
    const [value, setvalue] = useState(1);
    const [tokenvalidation, settokenvalidation] = useState();
    const [farmersNOTFound,setFarmersNOTFound] = useState(false);
    const [farmerData,setFarmerdata] = useState([]); 
   const params= useLocation();
   let values=new URLSearchParams(params.search);
   let decemail= values.get('email');
   console.log(decemail);
  let email= atob(decemail);
   if(!email.endsWith('@gmail.com'))
   {
   return( <h1 style={{ textAlign: 'center' }}>Email Should be valid</h1>);
   }
   let token= values.get('token');

   useEffect(()=>{
    const fetch_it = async(e)=>{
        console.log("vacha AAAAAAAAAAAA ");  
        const response= await axios.post('http://localhost:5002/api/farmertab-in-startup-and-token',
            JSON.stringify(decemail),{ headers: {
                            'authorization': `Bearer ${token}`, 
                            'Content-Type': 'application/json',
                            }  }
                        ).then(response => {
                            console.log(response.data);
                            if(response.data.tokenSuccess){
                                console.log("JWT token is valid and true"); // for developer confirmation
                                settokenvalidation(true);
                                if(!response.data.farmerRetrievalSuccess){
                                        console.log("there are no farmers in THAT district by startupdashboardjsx");
                                        setFarmersNOTFound(true); // there are no farmers in THAT district
                                }else{
                                        // there ARE farmers in that district
                                        console.log("there ARE farmers in that district");
                                        setFarmerdata(response.data.Farmerslist);
                                        console.log("there lsit : ", farmerData);
                                    }
                                }
                        }).catch(error => {
                            console.log("vacha BBBBBBBBB ");
                            if(!response.data.tokenSuccess){
                                    console.log("JWT token is not valid");
                                    settokenvalidation(false);
                                    alert("JWT token is invalid !");
                                    // block the total website down !
                            }
                            console.error('Error Response:', error.response); // Log the full error response
                            if (error.response && error.response.status === 403) {
                                console.error('Access Forbidden: You may not have permission.');
                            }
                        });
                }
        fetch_it();
       
        return()=>{
            fetch_it();
        }
    },[]);
//    if(tokenvalidation==false){
//     return(<p>Error 404</p>)
//    }
  
   console.log(email);  
   if(!email.endsWith('@gmail.com'))
   {
   return( <h1 style={{ textAlign: 'center' }}>Email Should be valid</h1>);
   }
    function goStatus(e)
    {
        e.preventDefault();
        setvalue(1);
    }
    function goApplication(e)
    {
        e.preventDefault();
        setvalue(2);
    }
    function goAyush(e)
    {
        e.preventDefault();
        setvalue(3);
    }
    function goPeerForum(e)
    {
        e.preventDefault();
        setvalue(4);
    }
  return (
    <div>
    <Header/>
    <div className='startup-dsh-head'>
  
    <p onClick={goStatus}>Status Tracking</p>
    <p onClick={goApplication}>Fill Aplication</p>
    <p onClick={goAyush}>Aayush 3.0</p>
    <p onClick={goPeerForum}>Peer Forum</p>
    </div>
    <div >
     {
        value ===1 ? (<Startuptrackpad email={email}/>) :
                (value === 2 ? (<StartupApplication email={email}/>) :
                                    ( value ===3 ? (<Extrafeatures email={email} farmerMatter={{farmersNOTFound,farmerData}}/>) : 
                                            (value ===4 ? (<PeerForum email={email}/>) :  (null) ) ))
     }
     </div>
     </div>
  );
}
