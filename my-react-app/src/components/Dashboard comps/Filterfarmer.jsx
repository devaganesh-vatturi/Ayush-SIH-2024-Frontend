import PrintList from './PrintList.jsx';
import React from 'react'
import '../styles/Filterfarmer.css';
export default function Filterfarmer() {
  const faqData = [
    {name:"deva",Email:"deva@gmail.com",phone:"9045645647",district:"west godavari"},
    {  name:"chaitanya",Email:"chaitanya@gmail.com",phone:" 87345447845",district:"krishna" },
    {  name:"sai",Email:"sai@gmail.com",phone:"9947641425",district:" kadapa" },
    {  name:"venkat",Email:"venkat@gmail.com",phone:"9745162013",district:"east godavari" },
  ];

  return (
    <> 
    <p className='farmer-info'>Farmers Info</p>
    {faqData.map((obj,index) => (
        
        <PrintList   name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
             ))}
    </>
  );
}
