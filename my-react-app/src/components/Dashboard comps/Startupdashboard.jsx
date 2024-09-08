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
   let email= values.get('email');
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
    <p onClick={goAyush}>Ayush 3.0</p>
    <p onClick={goPeerForum}>Peer Forum</p>
    </div>
    <div >
     {
        value ===1 ? (<Startuptrackpad/>) :
                (value === 2 ? (<StartupApplication/>) :
                                    ( value ===3 ? (<Extrafeatures/>) : 
                                            (value ===4 ? (<PeerForum/>) :  (null) ) ))
     }
     </div>
     </div>
  );
}
