import React,{useState} from 'react'
import '../styles/Startupdashboard.css';
import Startuptrackpad from './Startuptrackpad';
import StartupApplication from './StartupApplication';
import Header from '../Header';
import Extrafeatures from './Extrafeatures';
import { useLocation } from 'react-router-dom';
import PeerForum from './PeerForum';
export default function Startupdashboard() {
    //1 is doctor
    //2 is farmer
    const [value, setvalue] = useState(1);
   const params= useLocation();
   let values=new URLSearchParams(params.search);
   let decemail= values.get('email');
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
                                    ( value ===3 ? (<Extrafeatures email={email}/>) : 
                                            (value ===4 ? (<PeerForum email={email}/>) :  (null) ) ))
     }
     </div>
     </div>
  );
}
