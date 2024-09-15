import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

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
   let token= values.get('token');

    const theaders = {
        'authorization': `Bearer ${token}`,
    }

   useEffect(()=>{
    const fecthit = async(e)=>{
        try{
            const response= await axios.post('http://localhost:5002/api/farmertab-in-startup-and-token',decemail,{theaders}); // in startupf... f means farmer
            
            if(!response.data.tokenSuccess){
                settokenvalidation(false);
                alert("JWT token is invalid !");
                // block the total website down !
            }else{
                console.log("JWT token is valid and true"); // for developer confirmation
                settokenvalidation(true);
                if(!response.data.farmerRetrievalSuccess){
                    setFarmersNOTFound(true); // there are no farmers in THAT district
                }else{
                    // there ARE farmers in that district
                    setFarmerdata(response.data.Farmerslist);
                }
            }
        }catch(error){

        }
        fecthit();

    }
   },[]);
//    if(tokenvalidation==false){
//     return(<p>Error 404</p>)
//    }
   const email = atob(decemail);
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
