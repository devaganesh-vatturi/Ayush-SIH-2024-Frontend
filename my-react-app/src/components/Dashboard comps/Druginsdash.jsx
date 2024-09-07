import React,{useState} from 'react';
import Drughome from './Drughome';
import Drugnotification from './Drugnotification';
import Header from '../Header';

export default function Druginsdash() {
     const [drugtab, Setdrugtab] = useState(1);
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
    <p>Drug Inspector Desk!</p>
    <div className='drug-main'>
        <p onClick={gohome}>Home</p>
        <p onClick={gonotification}>Notifications</p>
    </div>
   {
     drugtab === 1 ? (<Drughome/>) : drugtab === 2 ? (<Drugnotification/>) : (null)
   }
    </>
  )
}
