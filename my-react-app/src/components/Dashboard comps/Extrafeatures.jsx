import React,{useState} from 'react';
import Filterdoctor from './Filterdoctor';
import Filterfarmer from './Filterfarmer';
import '../styles/Extrafeatures.css';
import Inscommunication from './Inscommunication';
export default function Extrafeatures() {
  const [screen, setScreen] = useState(1);
  function godoctor()
  {
    setScreen(1);
  }
  function gofarmer()
  {
    setScreen(2);
  }
  function goinspector()
  {
    setScreen(3);
  }
  return (
  
    <>
    <div className='extra-head'>
        <p onClick={godoctor}>Doctors Info</p>
        <p onClick={gofarmer}>Farmers Info</p>
        <p onClick={goinspector}>Drug inspector</p>
       
    </div>
    {
           screen ===1 ? (<Filterdoctor/>) : screen ===2 ? (<Filterfarmer/>) :screen ===3 ? 
           (<Inscommunication/>):(null) 
       }
    </>
  )
}
