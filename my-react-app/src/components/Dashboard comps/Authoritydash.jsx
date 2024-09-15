import React,{useState} from 'react';
import Authorityhome from './Authorityhome';
import Authoritynotification from './Authoritynotfication';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import '../styles/Authoritydash.css';
export default function Druginsdash() {
     const [drugtab, Setdrugtab] = useState(1);
     const params= useLocation();
   let values=new URLSearchParams(params.search);
   let email= values.get('email');
    function gohome()
    {
        Setdrugtab(1);
    }
    function gonotification()
    {
        Setdrugtab(2);
    }
  return (
    <>
    <Header/>
    <p className='drug-head'>Drug Inspector Desk!</p>
    <div className='drug-main'>
        <p className="drug-nav" onClick={gohome}>Home</p>
        <p className="drug-nav" onClick={gonotification}>Notifications</p>
    </div>
   {
     drugtab === 1 ? (<Authorityhome/>) : drugtab === 2 ? (<Authoritynotification/>) : (null)
   }
    </>
  )
}
