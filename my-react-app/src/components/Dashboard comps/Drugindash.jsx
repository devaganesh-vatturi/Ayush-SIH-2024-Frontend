import React,{useEffect,useState} from 'react';
import PrintdrugList from './PrintdrugList';
import '../styles/Drugindash.css';
import Header from '../Header';
import { useLocation } from 'react-router-dom';

export default function Drugindash() {
  
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let decemail= values.get('email');
  
  let email= atob(decemail);
  let token= values.get('token');
  const [tokenvalidation, settokenvalidation] = useState(false);
  
  const Data = [
    {Email:"raj@gmail.com"},{Email:"giri@gmail.com" },{Email:"venu@gmail.com"},{Email:"venkat@gmail.com"},
  ];
  
  useEffect(()=>{
    const fetch_it = async(e)=>{
      try {
        const response = await axios.post('http://localhost:5002/api/tokenverify', 
            {email}, { // parsing the token as a JSON file
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


useEffect(()=>{
  const get_startups = async(e)=>{  // which are drug ins assigned true

        }
        get_startups();
   
    return()=>{
      get_startups();
    }
},[]);
        
if(tokenvalidation==false){
    return(<p>Error 404</p>)
   }

   return (
    <>
    <Header/>
    <p className='drug-dash-head'>DrugInspector Dashboard</p>
    <PrintdrugList startupmails={Data}/>
    </>
  )
}
