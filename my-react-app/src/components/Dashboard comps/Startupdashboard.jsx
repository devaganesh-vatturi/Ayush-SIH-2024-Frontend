import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import '../styles/Startupdashboard.css';

import Startuptrackpad from './Startuptrackpad';
import StartupApplication from './StartupApplication';
import Header from '../Header';
import Extrafeatures from './Extrafeatures';
import PeerForum from './PeerForum';
import Footer from '../styles/Footer';
import Logout from './Logout';

export default function Startupdashboard() {
    //1 is doctor
    //2 is farmer
    const [value, setvalue] = useState(1);
    const [tokenvalidation, settokenvalidation] = useState();
   const params= useLocation();
   let values=new URLSearchParams(params.search);
   let decemail= values.get('email');
//    console.log(decemail);
  let email= atob(decemail);
   if(!email.endsWith('@gmail.com'))
   {
   return( <h1 style={{ textAlign: 'center' }}>Email Should be valid</h1>);
   }
   let token= values.get('token');
   const [activeTab, setActiveTab] = useState('Status');
   useEffect(()=>{
    const fetch_it = async(e)=>{;
        try {
            const response = await axios.post('http://localhost:5002/api/tokenverify', 
                {token}, { // parsing the token as a JSON file
                            headers: {
                                'authorization': `Bearer ${token}`, 
                                'Content-Type': 'application/json',
                            } 
                        }
            );
            const tokenSuccess  = response.data.tokenSuccess;
            settokenvalidation(tokenSuccess);        
            if (tokenSuccess) {
                console.log("Token success:", tokenSuccess);
                
            } else if(tokenSuccess===false){
                alert("token is false.. invalid entry into the portal");
                settokenvalidation(false);
                // block the whole website down
            }else {
                console.log("TokenSuccess variable itself is not recieved from the Backend RESPONSE.");
            }
        } catch (error) {

            if (error.response) {
                // Server responded with a status code OUTSIDE of the 2xx range
                console.error("Error Response Data:", error.response.data);
                console.error("Error Response Status:", error.response.status);
            } else if (error.request) {
                // No response received from the server
                console.error("No response received:", error.request);
            } else {
                // Something went wrong setting up the request
                console.error("Request error:", error.message);
            }
        }
        
                }
        fetch_it();
       
        return()=>{
            fetch_it();
        }
    },[]);
   if(!tokenvalidation){
    return(<h1>Error 404</h1>)
   }
  
   console.log(email);  
   if(!email.endsWith('@gmail.com'))
   {
   return( <h1 style={{ textAlign: 'center' }}>Email Should be valid</h1>);
   }
    function goStatus(e)
    {
        e.preventDefault();
        setvalue(1);
        setActiveTab('Status');
    }
    function goApplication(e)
    {
        e.preventDefault();
        setvalue(2);
        setActiveTab('Application');
    }
    function goAyush(e)
    {
        e.preventDefault();
        setvalue(3);
        setActiveTab('Ayush');
    }
    function goPeerForum(e)
    {
        e.preventDefault();
        setvalue(4);
        setActiveTab('PeerForum');
    }
  return (
    <div>
    <Header/>
    <div className='startup-dsh-head'>
    <div className='startup-dsh-head-first'>
    <p className={activeTab === 'Status' ? 'active-tab' : ''} onClick={goStatus}>Status Tracking</p>
    <p className={activeTab === 'Application' ? 'active-tab' : ''}  onClick={goApplication}>Fill Aplication</p>
    <p  className={activeTab === 'Ayush' ? 'active-tab' : ''} onClick={goAyush}>Aayush 3.0</p>
    <p   className={activeTab === 'PeerForum' ? 'active-tab' : ''} onClick={goPeerForum}>Peer Forum</p>
    </div>
    <div>
    <Logout/>
    </div>
    </div>
    <div >
     {
        value ===1 ? (<Startuptrackpad email={email}/>) :
                (value === 2 ? (<StartupApplication email={email}/>) :
                                    ( value ===3 ? (<Extrafeatures email={email} />) : 
                                            (value ===4 ? (<PeerForum email={email}/>) :  (null) ) ))
     }
    
     </div>
     <Footer/>
     </div>
  );
}
