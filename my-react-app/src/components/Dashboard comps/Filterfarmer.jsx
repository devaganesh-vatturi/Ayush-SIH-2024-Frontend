import PrintList from './PrintList.jsx';
import React, {useEffect } from 'react'
import axios from 'axios';
import '../styles/Filterfarmer.css';
export default function Filterfarmer({email}) {
  const farmerData = [
    {name:"deva",Email:"raj@gmail.com",phone:"9045643891",district:"west godavari"},
    {  name:"ganesh",Email:"giri@gmail.com",phone:" 87345445897",district:"krishna" },
    {  name:"sriram",Email:"venu@gmail.com",phone:"9947646747",district:" kadapa" },
    {  name:"manikanta",Email:"venkat@gmail.com",phone:"9848162013",district:"east godavari" },
  ];

  useEffect(()=>{  
    const fetchit = async(e)=>{
      try{
        const response= await axios.post(''.email);
      }
      catch(error)
     {

     }
    }
    fetchit();
  },[]);

  return (
    <> 
    <p className='farmer-info'>Farmers Info</p>
    {farmerData.map((obj,index) => (
        
        <PrintList  key={index} name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))}
    </>
  );
}
