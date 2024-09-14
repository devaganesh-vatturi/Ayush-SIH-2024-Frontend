import PrintList from './PrintList.jsx';
import React, { useEffect } from 'react'
import '../styles/Filterdoctor.css';
import axios from 'axios';
export default function Filterdoctor({email}) {
  const doctorData = [
    {name:"raju",Email:"raj@gmail.com",phone:"9045643891",district:"west godavari"},
    {  name:"giri",Email:"giri@gmail.com",phone:" 87345445897",district:"krishna" },
    {  name:"venu",Email:"venu@gmail.com",phone:"9947646747",district:" kadapa" },
    {  name:"venkat",Email:"venkat@gmail.com",phone:"9848162013",district:"east godavari" },
  ];

  useEffect( ()=>{
    const datafun= async(e)=>{
      try{
        const response= await axios.post('',email);
      }
      catch(error)
      {

      }
    }
    datafun();

  },[]);
  return (
    <> 
    <p className='doctor-info'>Doctors Info</p>
    {doctorData.map((obj,index) => (
      <PrintList  key={index} name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
           ))}
   </>
  );
}