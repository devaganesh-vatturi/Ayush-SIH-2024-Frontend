import PrintList from './PrintList.jsx';
import React, {useEffect } from 'react'
import '../styles/Filterfarmer.css';
export default function Filterfarmer() {
  const Farmer = async(e) => { 
    try{
     const response = await axios.post(" ");
      
    }
    catch (error) {
     console.error('Error fetching  farmer data:', error);
 }
     }
 
     useEffect(() => {
          Farmer( );
 
           
       }, []);

  return (
    <> 
    <p className='farmer-info'>Farmers Info</p>
    {response.map((obj,index) => (
        
        <PrintList   name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))}
    </>
  );
}
