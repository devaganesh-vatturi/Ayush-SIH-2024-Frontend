import React,{useState} from 'react'
import Filterdoctor from './Dashboard comps/Filterdoctor'
import Filterfarmer from './Dashboard comps/Filterfarmer';
import Startuptrackpad from './Dashboard comps/Startuptrackpad';
import './Startupdashboard.css';
export default function Startupdashboard() {
    //1 is doctor
    //2 is farmer
    const [value, setvalue] = useState(3);
    function gofarmer(e)
    {
        e.preventDefault();
        setvalue(2);
    }
    function godoctor(e)
    {
        e.preventDefault();
        setvalue(1);
    }
    function goapplication(e)
    {
        e.preventDefault();
        setvalue(3);
    }
  return (
    <div>
    Startupdashboard
    <div className='stp-dsh-minhed'>
    <p onClick={gofarmer}>Farmers Info</p>
    <p onClick={godoctor}>Doctors Info</p>
    <p onClick={goapplication}>Application Status</p>
    </div>
     {
        value ===1 ? (<Filterdoctor/>) : value === 2 ? (<Filterfarmer/>) : 
        value ===3 ? (<Startuptrackpad/>) : (null)
     }
     </div>
  );
}
